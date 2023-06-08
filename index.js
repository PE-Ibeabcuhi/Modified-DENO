const server = Deno.listen({ port: 8000 });
console.log("Listening on http://localhost:8000/");

for await (const conn of server) {
  const httpConn = Deno.serveHttp(conn);
  for await (const { respondWith } of httpConn) {
    await respondWith(new Response("Welcome to Deno\n"));
  }
}