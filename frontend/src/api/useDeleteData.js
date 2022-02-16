const useDeleteData = (url) => {
  let deleteStatus = true;
  (async function sendDeleteRequest() {
    await fetch(`${url}`, { method: 'DELETE' }).catch((error) => {
      deleteStatus = false;
      console.log(error);
    });
  })();
  return deleteStatus;
};

export default useDeleteData;
