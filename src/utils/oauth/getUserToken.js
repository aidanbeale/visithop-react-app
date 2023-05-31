const getUserToken = (userAuthCode) => {
  return new Promise((resolve, reject) => {
    async function fetchToken() {
      const response = await fetch(process.env.REACT_APP_AUTH_COGNITO_URL + 'oauth2/token', {
        method: "POST",
        headers: new Headers({
          'Content-Type': 'application/x-www-form-urlencoded'
        }),
        body: new URLSearchParams({
            'grant_type': 'authorization_code',
            'client_id': process.env.REACT_APP_AUTH_USER_POOL_CLIENT_ID,
            'redirect_uri': process.env.REACT_APP_AUTH_COGNITO_REDIRECT_URI,
            'code': userAuthCode
        })
      });
      const responseData = await response.json();
      if (responseData && !responseData.error) {
        return responseData;
      }
      throw Error("Unable to fetch user token.");
    }

    fetchToken()
      .then((token) => {
        resolve(token);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default getUserToken;