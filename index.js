const s = Deno.listen({ port: 8000 });
console.log("Listening on http://localhost:8000/");

for await (const conn of s) {
  await conn.respond({ body: "Welcome to Deno\n" });
}