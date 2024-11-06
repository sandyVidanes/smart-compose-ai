'use strict';
const AWS = require('aws-sdk');
 
module.exports.createCustomer = async (event) => {
   try {
      console.log('test')
      const body = JSON.parse(event.body);
     
      return {
        statusCode: 201,
        body: JSON.stringify({
          message: body,
        }),
      };

   } catch (e) {
      console.log(e);
   }
};