// Minimal static file server for local preview.
// Lovable invokes the dev script with a "--port <n>" flag, which we accept.
const args = process.argv.slice(2);
let port = 8080;
for (let i = 0; i < args.length; i++) {
  if ((args[i] === "--port" || args[i] === "-p") && args[i + 1]) {
    port = parseInt(args[i + 1], 10);
  }
}

const root = process.cwd();

const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function ext(p) {
  const i = p.lastIndexOf(".");
  return i < 0 ? "" : p.slice(i).toLowerCase();
}

Bun.serve({
  port,
  hostname: "0.0.0.0",
  async fetch(req) {
    const url = new URL(req.url);
    let path = decodeURIComponent(url.pathname);
    if (path.endsWith("/")) path += "index.html";
    if (path === "") path = "/index.html";

    // prevent path traversal
    if (path.includes("..")) return new Response("Bad request", { status: 400 });

    const filePath = root + path;
    const file = Bun.file(filePath);
    if (!(await file.exists())) {
      // SPA-style fallback to root index for unknown paths
      const fallback = Bun.file(root + "/index.html");
      if (await fallback.exists()) {
        return new Response(fallback, { headers: { "content-type": "text/html; charset=utf-8" } });
      }
      return new Response("Not found", { status: 404 });
    }
    return new Response(file, {
      headers: { "content-type": mime[ext(path)] || "application/octet-stream" },
    });
  },
});

console.log(`Static server listening on http://localhost:${port}`);
