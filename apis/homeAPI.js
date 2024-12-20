export const homeAPI = () => {
  const { $api } = useNuxtApp();

  const getNews = () => useAsyncData('news', () => $api('/home/news'));
  const getNewsItem = (id) => useAsyncData(`news-${id}`, () => $api(`/home/news/${id}`));

  const getCulinary = () => useAsyncData('culinary', () => $api('/home/culinary'));
  const getCulinaryItem = (id) => useAsyncData(`culinary-${id}`, () => $api(`/home/culinary/${id}`));

  return {
    getNews,
    getNewsItem,
    getCulinary,
    getCulinaryItem
  }
}