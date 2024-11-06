'use strict';
 
module.exports.handler = async (event) => {
   try {
      const body = JSON.parse(event.body);
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: `${body.message} in ${body.style} style`  || 'something' ,
        }),
      };
   } catch (e) {
      console.log(e);
   }
};