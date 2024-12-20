export const usersAPI = () => {
  const { $api } = useNuxtApp();

  const getUser = () => useAsyncData('user', () => $api('/user'));
  const getUserCheck = () => useAsyncData('user-check', () => $api('/user/check'));

  const postUserLogin = (payload) => useAsyncData(`user-login`, () =>
    $api('user/login', {
      method: 'POST',
      body: payload
    })
  );

  const postUserSignup = (payload) => useAsyncData(`user-signup`, () =>
    $api('user/signup', {
      method: 'POST',
      body: payload
    })
  );

  const postUserForgot = (payload) => useAsyncData(`user-forgot`, () =>
    $api('user/forgot', {
      method: 'POST',
      body: payload
    })
  );


  const updateUser = (payload) => useAsyncData(`updateUser`, () =>
    $api('user', {
      method: 'PUT',
      body: payload
    })
  );

  return {
    getUser,
    getUserCheck,
    postUserLogin,
    postUserSignup,
    postUserForgot,
    updateUser
  }
}