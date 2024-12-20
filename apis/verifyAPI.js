export const verifyAPI = () => {
  const { $api } = useNuxtApp();

  const verifyEmail = (payload) => useAsyncData(`verify-email`, () =>
    $api('verify/email', {
      method: 'POST',
      body: payload
    }
    ));

  const verifyGenerateEmailCode = (payload) => useAsyncData(`verify-generateEmailCode`, () =>
    $api('verify/generateEmailCode', {
      method: 'POST',
      body: payload
    }
    ));

  return {
    verifyEmail,
    verifyGenerateEmailCode
  }
}