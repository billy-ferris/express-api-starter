import winston from "winston";
const { combine, timestamp, json } = winston.format;

export const logger = winston.createLogger({
  level: "info",
  format: combine(timestamp(), json()),
  transports: [new winston.transports.Console()],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}
