'use strict';
 
module.exports.handler = async (event) => {
   try {
      const body = JSON.parse(event.body);
      const { message, style } = body;

      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Methods': '*'
        },
        body: JSON.stringify({
          message: `${message} in ${style} style`  || 'something' ,
        }),
      };
   } catch (e) {
      console.log(e);
   }
};