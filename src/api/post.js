'use strict';
import { ok } from "../helpers/response.js";
 
export async function handler(event) {
   try {
      const body = JSON.parse(event.body);
      const { message, style } = body;

      return ok({
        message: `${message} in ${style} style`  || 'something' ,
      });
   } catch (e) {
      console.log(e);
   }
}