let count = 0;
console.log("debug 01");
console.log(Deno.env.toObject());
console.log(Deno.permissions.query({name: "read"}));
console.log(Deno.permissions.query({name: "write"}));
console.log(Deno.permissions.query({name: "env"}));
console.log(Deno.permissions.query({name: "net"}));
console.log(Deno.permissions.query({name: "run"}));
console.log(Deno.permissions.query({name: "plugin"}));
console.log(Deno.permissions.query({name: "hrtime"}));

// deno-lint-ignore no-explicit-any
addEventListener("fetch", (event: any) => {
  console.log("debug 02");
  console.log(`Received request #${++count} to ${event.request.url}`);
  event.respondWith(
    new Response("Hello world", {
      status: 200,
      headers: {
        server: "denosr",
        "content-type": "text/plain",
      },
    }),
  );
});
