'use strict';
import { ok, serverError } from "../helpers/response.js";
import { smartCompose } from "../services/openai.js";
 
export async function handler(event) {
   try {
      const body = JSON.parse(event.body);
      const { message, style } = body;
      const newMessage = await smartCompose(message, style);

      return ok({ message: newMessage });
   } catch (e) {
      console.log(e);
      return serverError();
   }
}