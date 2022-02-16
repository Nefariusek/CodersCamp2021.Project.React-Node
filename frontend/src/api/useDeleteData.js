const useDeleteData = async (url) => {
  const deleteStatus = {
    statusCode: 0,
    isLoading: true,
    errorMessage: '',
  };
  await fetch(`${url}`, { method: 'DELETE' }).then((response) => {
    deleteStatus.statusCode = response.status;
    deleteStatus.isLoading = false;
    deleteStatus.errorMessage = response.statusText;
  });
  return deleteStatus;
};

export default useDeleteData;
