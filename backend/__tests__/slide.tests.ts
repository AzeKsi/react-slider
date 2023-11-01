import request from "supertest";
import app from "../app";
import { SlidesData } from "../constants/slides.const";

describe("Test API endpoints", () => {
  it("should handle non-existent endpoints", async () => {
    const response = await request(app).get("/nonexistentendpoint");
    expect(response.status).toBe(404);
  });

  it("should get slides data", async () => {
    const response = await request(app).get("/slides");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(SlidesData);
  });
});
