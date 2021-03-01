export const handler = {
  returnSuccess: (x) => ({
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(x),
  }),
};

export default {
  handler,
};
