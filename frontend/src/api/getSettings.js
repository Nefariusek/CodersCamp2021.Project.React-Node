const getSettings = async (url) => {
  const response = await fetch(`${url}`, {
    method: 'GET',
  });
  return response.json();
};

export default getSettings;
