import { app } from "./app";
import { connectDatabase } from "./config/db";
import { env } from "./config/env";

const startServer = async () => {
  await connectDatabase();

  app.listen(env.PORT, () => {
    console.log(`Server running on http://localhost:${env.PORT}`);
  });
};

startServer().catch((error) => {
  console.error("Startup failed:", error);
  process.exit(1);
});
