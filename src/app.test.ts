import request from "supertest";
import app from "../src/app";

describe("app", () => {
  test("responds with a not found message", async () => {
    const res = await request(app)
      .get("/not-found")
      .set("Accept", "application/json");

    expect(res.statusCode).toStrictEqual(404);
  });
});
