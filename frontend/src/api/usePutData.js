const usePutData = async (url, requestBody) => {
  const putStatus = {
    statusCode: 0,
    isLoading: true,
    errorMessage: '',
    requestBody: {},
  };
  await fetch(`${url}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(requestBody),
  })
    .then((response) => {
      putStatus.statusCode = response.status;
      putStatus.isLoading = false;
      putStatus.errorMessage = response.statusText;
    })
    .catch((error) => {
      throw error;
    });
  return putStatus;
};

export default usePutData;
