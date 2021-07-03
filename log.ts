let count = 0;
// deno-lint-ignore no-explicit-any
addEventListener("fetch", (event: any) => {
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