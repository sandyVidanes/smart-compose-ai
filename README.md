

# Serverless Framework Node HTTP API on AWS
This project is just to explore AWS serverless services

### Deployment
```
$ serverless deploy
$ serverless remove
```

After deploying, you should see the following endpoints:

```bash
endpoints:
  GET - https://{{api-id}}.execute-api.us-east-1.amazonaws.com/
  GET - https://{{api-id}}.execute-api.us-east-1.amazonaws.com/customers
  POST - https://{{api-id}}.execute-api.us-east-1.amazonaws.com/
```

_Note_: In current form, after deployment, your API is public and can be invoked by anyone. For production deployments, you might want to configure an authorizer. For details on how to do that, refer to [http event docs](https://www.serverless.com/framework/docs/providers/aws/events/apigateway/).

### Invocation
After successful deployment, you can call the created application via HTTP:
```bash
curl https://{{api-id}}.execute-api.us-east-1.amazonaws.com/
```

Response:
```json
{
  "message": "Go Serverless v2.0! Your function executed successfully!",
  "input": {
    ...
  }
}
```

### Local development
You can invoke your function locally by using the following command:
```bash
serverless invoke local --function hello
```

Response:
```
{
  "statusCode": 200,
  "body": "{\n  \"message\": \"Go Serverless v3.0! Your function executed successfully!\",\n  \"input\": \"\"\n}"
}
```