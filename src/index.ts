import { server } from "./server/Server";

server.listen(3000, () => {
  console.log("Server started at http://localhost:3000");
});
