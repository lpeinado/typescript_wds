type errorResponse = {
  status: 'Error';
  message: string;
};

type successResponse = {
  status: 'Success';
  data: { id: string; name: string; email: string; };
};

type apiResponse = errorResponse | successResponse;

function handleResponse( response : apiResponse ) {
  if (response.status === 'Error') {
    console.log(response.message);
  }
  if (response.status === 'Success') {
    console.log(response.data);
  }
}