addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  return new Response("Welcome to Deno\n", { status: 200 });
}
