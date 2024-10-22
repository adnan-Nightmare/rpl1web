
const response = (statusCode, data, message, res) => {
  return new Response(JSON.stringify({
    payload: {
      status_code: statusCode,
      datas: data,
      message: message,
    },
    pagination: {
      prev: "",
      next: "",
      max: "",
    },
  }), {
    status: statusCode,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export default response;
