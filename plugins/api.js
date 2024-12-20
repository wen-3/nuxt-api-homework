export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const token = useCookie('auth');

  const api = $fetch.create({
    baseURL: config.public.API_URL,
    onRequest({ request, options }) {

      if (options.method === 'POST' || options.method === 'PUT') {
        options.headers.set('Content-Type', 'application/json');
      }

      if (token.value) {
        options.headers.set('Authorization', token.value);
      }

    }
  })

  return {
    provide: {
      api
    }
  }
})