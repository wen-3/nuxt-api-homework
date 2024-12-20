import { homeAPI } from '../apis/homeAPI';
import { ordersAPI } from '../apis/ordersAPI';
import { roomsAPI } from '../apis/roomsAPI';
import { usersAPI } from '../apis/usersAPI';
import { verifyAPI } from '../apis/verifyAPI';

export const useAPI = () => {
  const home = homeAPI();
  const orders = ordersAPI();
  const rooms = roomsAPI();
  const users = usersAPI();
  const verify = verifyAPI();

  return {
    home,
    orders,
    rooms,
    users,
    verify
  }
}