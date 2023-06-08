const s = Deno.listen({ port: 8000 });
console.log("Listening on http://localhost:8000/");

(async () => {
  for (const conn of s) {
  await conn.respond({ body: "Welcome to Deno\n" });
  }
})();