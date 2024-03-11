import { fetchFaves } from '../../api/getFave';
import { postFaveProduct } from '../../api/postFave';
import { delFaves } from '../../api/delFave';
import { fetchUser } from '../../api/getUser';
import { IUser, setLogin, setUser } from '../../store/reducers/userSlice';
import { addFavorites } from '../../store/reducers/favoriteSlice';


export const loginHelper = (userId: any, dispatch: any) => {
  if (!userId) return;

  fetchUser(`${userId}`).then((res) => {
    const user: IUser = res?.data;

    if (typeof user === 'object' && !Array.isArray(user)) {
      dispatch(setLogin(true));
      dispatch(setUser(user));
    }
  });

  fetchFaves().then(item => {
    const faveList = item.data || [];

    faveList.forEach((item: any) => {
      dispatch(addFavorites(item));
    });
  });
};
