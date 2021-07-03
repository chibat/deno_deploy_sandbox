let count = 0;
console.log("debug 01");
console.log(Deno.env.toObject());

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
