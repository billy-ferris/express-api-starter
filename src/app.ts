import express, { Express } from "express";
import morgan from "morgan";
import helmet from "helmet";
import { notFound, errorHandler } from "./middlewares";
import { config } from "dotenv";
import { logger } from "./logger";
import api from "./api";
config();

const app: Express = express();

const morganMiddleware = morgan(
  ":method :url :status :res[content-length] - :response-time ms",
  {
    stream: {
      write: (message) => logger.http(message.trim()),
    },
  }
);

app.use(morganMiddleware);
app.use(helmet());
app.use(express.json());

app.use("/api/v1", api);

app.use(notFound);
app.use(errorHandler);

export default app;
