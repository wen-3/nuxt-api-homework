export const roomsAPI = () => {
  const { $api } = useNuxtApp();

  const getRooms = () => useAsyncData('rooms', () => $api('/rooms'));
  const getRoomItem = (id) => useAsyncData(`room-${id}`, () => $api(`/rooms/${id}`));

  return {
    getRooms,
    getRoomItem
  }
}