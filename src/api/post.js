'use strict';
import { ok, serverError } from "../helpers/response.js";
import { smartCompose } from "../services/openai.js";
 
export async function handler(event) {
   try {
      const body = JSON.parse(event.body);
      const { message, style } = body;
      let newMessage = await smartCompose(message, style);

      if (newMessage.length > 160) {
        newMessage = await smartCompose(newMessage, 'shorter')
      }

      return ok({ message: newMessage });
   } catch (e) {
      console.log(e);
      return serverError();
   }
}