import { Application, Router } from "https://deno.land/x/oak@v12.6.1/mod.ts";

const app = new Application();
const router = new Router();

let visitsCount = 0;

router
  .get("/visits", (context) => {
    visitsCount += 1;
    context.response.body = `<!DOCTYPE html><html><body>Visits: ${visitsCount}</body></html>`;
  })
  .get("/meaning", (context) => {
    context.response.body = "Seeking truths beyond meaning of life, you will find 43.";
  })
  .get("/", (context) => {
    context.response.body = "Nothing here yet.";
  });

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8000 });
console.log("Server started on http://localhost:8000");
