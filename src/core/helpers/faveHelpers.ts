import { fetchFaves } from '../../api/getFave';
import { postFaveProduct } from '../../api/postFave';
import { delFaves } from '../../api/delFave';


export const faveHelper = (data: any) => {
  fetchFaves().then((response) => {
    console.log('response: ', response);

    const isExist = response?.data.find((item: any) => item.id === data.id);

    console.log('isExist: ', isExist);

    if (!isExist) {
      return postFaveProduct(data).then(res => {
        console.log('added list: ', res);
      });
    }

    return delFaves(data.id).then(res => {
      console.log('Removed list: ', res);
    });
  });
};
