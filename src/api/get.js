'use strict';
import { ok } from "../helpers/response.js";

export async function handler(event) {
  return ok({
    message: "Go Serverless v3.0! Your function executed successfully!",
    input: event,
  });
}