export const ok = (responseBody) => {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*'
    },
    body: responseBody ? JSON.stringify(responseBody) : 'OK'
  };
};

export const serverError = (message) => {
  return {
    statusCode: 500,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*'
    },
    body: JSON.stringify({
      message: message || "Something is wrong"
    })
  };
};