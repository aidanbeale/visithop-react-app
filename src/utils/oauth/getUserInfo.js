const getUserInfo = (bearerToken) => {
  return new Promise((resolve, reject) => {
    async function fetchInfo() {
      const response = await fetch(process.env.REACT_APP_AUTH_COGNITO_URL + '/oauth2/userInfo', {
        method: "GET",
        headers: new Headers({
          Authorization: `Bearer ${bearerToken}`,
        })
      });
      const responseData = await response.json();
      if (responseData && !responseData.error) {
        return responseData;
      }
      throw Error("Unable to fetch user info.");
    }

    fetchInfo()
      .then((info) => {
        resolve(info);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default getUserInfo;