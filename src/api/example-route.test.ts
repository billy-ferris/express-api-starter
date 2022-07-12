import request from "supertest";
import app from "../app";

describe("example route", () => {
  test("responds with a not found message", async () => {
    const res = await request(app)
      .get("/api/v1/example")
      .set("Accept", "application/json");

    expect(res.statusCode).toStrictEqual(200);
    expect(res.body).toStrictEqual({
      message: "This is an example of a route. Change this.",
    });
  });
});
