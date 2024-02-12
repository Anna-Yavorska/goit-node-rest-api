require("dotenv").config();
const testRequest = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");

const { DB_HOST } = process.env;

const subscriptionValues = ["starter", "pro", "business"];

describe("Test login user", () => {
  beforeAll(async () => {
    await mongoose
      .connect(DB_HOST)
      .then(() => console.log("DB Connected"))
      .catch((err) => {
        console.error(err);
      });
  });

  it("should login existent user", async () => {
    const response = await testRequest(app).post("/users/login").send({
      email: "avatar@mail.com",
      password: "qweqwe",
    });

    expect(response.statusCode).toBe(200);

    expect(response.body).toHaveProperty("token");

    expect(response.body.user).toEqual(
      expect.objectContaining({
        email: expect.any(String),
        subscription: expect.any(String),
      })
    );

    expect(response.body.user.email).toEqual("avatar@mail.com");

    expect(response.body.user.subscription).toEqual(
      expect.stringMatching(subscriptionValues.join("|"))
    );
  });

    it("should not login non-existent user", async () => {
        const response = await testRequest(app).post("/users/login").send({
            email: "test@mail.com",
            password: "qweqwe",
        });

        expect(response.statusCode).toBe(401);

        expect(response.text).toBe('{"message":"Email or password is wrong"}')
    });

  afterAll(async () => {
    await mongoose.disconnect(DB_HOST);
    console.log("DB Disconnected");
  });
});
