import { serve } from "https://deno.land/std@0.202.0/http/server.ts";

const handleRequest = (request) => {
  return new Response("Seeking truths beyond the meaning of life, you will find 43.");
};

serve(handleRequest, { port: 7777 });
