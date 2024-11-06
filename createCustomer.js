'use strict';
const AWS = require('aws-sdk');
 
module.exports.createCustomer = async (event) => {
   try {
      const body = JSON.parse(event.body);
      // const dynamoDb = new AWS.DynamoDB.DocumentClient();
      // const putParams = {
      //   TableName: process.env.DYNAMODB_CUSTOMER_TABLE,
      //   Item: {
      //     primary_key: body.name,
      //     email: body.email,
      //   },
      // };
      // await dynamoDb.put(putParams).promise();

      const prompt = `simplify "${body}"`;
      
    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: prompt }],
                max_tokens: 100,
                temperature: 0.7
            },
            {
                headers: {
                    'Authorization': `Bearer ${OPENAI_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        // Extract remaining limits from response headers
        const requestId = response.headers['x-request-id'];
        const remainingRequestsPerMinute = response.headers['x-ratelimit-remaining-requests'];
        const remainingRequestsPerDay = response.headers['x-ratelimit-remaining-tokens'];

        console.log(`Request: ${requestId}`);
        console.log(`Remaining Requests per Minute (RPM): ${remainingRequestsPerMinute}`);
        console.log(`Remaining Requests per Day (RPD): ${remainingRequestsPerDay}`);

        const aiResponse = response.data.choices[0].message.content.trim();
        res.json({ response: aiResponse });

    } catch (error) {
        console.error('Error fetching response:', error.response ? error.response.data : error.message);
        res.status(500).send({ error: "Error fetching response" });
    }
     


      return {
        statusCode: 201,
        customer : { ...body }
      };

   } catch (e) {
      console.log(e);
   }
};