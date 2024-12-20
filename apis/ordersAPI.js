export const ordersAPI = () => {
  const { $api } = useNuxtApp()

  const getOrders = () => useAsyncData('orders', () => $api('/orders'));

  const getOrderItem = (id) => useAsyncData(`order-${id}`, () =>
    $api(`/orders/${id}`)
  );

  const createOrder = (payload) => useAsyncData('createOrder', () =>
    $api('/orders', {
      method: 'POST',
      body: payload
    })
  );

  const deleteOrderItem = (id) => useAsyncData(`deleteOrder-${id}`, () =>
    $api(`/orders/${id}`, {
      method: 'DELETE'
    })
  );

  return {
    getOrders,
    getOrderItem,
    createOrder,
    deleteOrderItem
  }
}