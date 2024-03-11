import React from 'react';
import { GlobalAppContainer } from '../../containers/appContainer';
import { fetchUser } from '../../api/getUser';
import { IUser, setLogin, setUser } from '../../store/reducers/userSlice';
import { useDispatch } from 'react-redux';
import { fetchFaves } from '../../api/getFave';
import { addFavorites } from '../../store/reducers/favoriteSlice';

const GlobalAppPage = () => <GlobalAppContainer />;

export default GlobalAppPage as React.FC;