import request from "supertest";
import { app } from "server";

describe("POST /user/register", () => {
  describe("given an email and password", () => {
    test("should respond with a 201 status code", async () => {
      const response = await request(app).post("/user/register").send({
        email: "username@gmail.com",
        password: "Password123!",
      });
      expect(response.statusCode).toBe(201);
    });
  });
  //
  // given an email and password
  // email and/or password is missing
  // email is not an email
  // password is strong enough
  // should respond with the created user
  // should respond with a 200 status code
  //
  // user have been created
  // password have been hashed and stored
  // access & refresh token have been generated
});
