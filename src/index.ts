import http from "http";
import { ENVIRONMENT } from "./environment";
import { randomUUID } from "crypto";

const server = http.createServer((req, res) => {
  console.log("Request received. Assigned id:", randomUUID());
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.write("App is running!");
  res.end();
});

export const app = (server: http.Server, port: number, hostname: string) => {
  return server.listen(port, hostname, () => {
    console.log(`Starting app on: http://${hostname}:${port}`);
    console.log("Session ID:", randomUUID());
  });
};

app(server, ENVIRONMENT.PORT, ENVIRONMENT.HOSTNAME);
