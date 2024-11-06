'use strict';
const AWS = require('aws-sdk');
 
module.exports.createCustomer = async (event) => {
   try {
      const body = JSON.parse(event.body);
     
      return {
        statusCode: 201,
        body: JSON.stringify({
          message: `${body.message} in ${body.style} style`  || 'something' ,
        }),
      };

   } catch (e) {
      console.log(e);
   }
};