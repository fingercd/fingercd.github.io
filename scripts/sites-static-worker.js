const securityHeaders = {
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
};

function secureResponse(response, status = response.status) {
  const headers = new Headers(response.headers);

  for (const [name, value] of Object.entries(securityHeaders)) {
    headers.set(name, value);
  }

  return new Response(response.body, {
    status,
    statusText: status === 404 ? "Not Found" : response.statusText,
    headers,
  });
}

function assetRequest(request, pathname) {
  const url = new URL(request.url);
  url.pathname = pathname;
  url.search = "";

  return new Request(url, {
    method: request.method === "HEAD" ? "HEAD" : "GET",
    headers: request.headers,
  });
}

const staticSiteWorker = {
  async fetch(request, env) {
    if (!env.ASSETS) {
      return new Response("Static asset binding is unavailable.", {
        status: 500,
        headers: securityHeaders,
      });
    }

    const url = new URL(request.url);

    if (url.pathname === "/") {
      return secureResponse(Response.redirect(new URL("/zh/", url), 302));
    }

    if (url.pathname === "/favicon.ico") {
      return secureResponse(
        await env.ASSETS.fetch(assetRequest(request, "/favicon.svg")),
      );
    }

    const response = await env.ASSETS.fetch(request);

    if (response.status !== 404) {
      return secureResponse(response);
    }

    const fallback = await env.ASSETS.fetch(
      assetRequest(request, "/404.html"),
    );

    return secureResponse(fallback, 404);
  },
};

export default staticSiteWorker;
