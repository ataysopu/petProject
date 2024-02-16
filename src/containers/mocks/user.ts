import { TUser } from '../../core/types/user';
import iphone from 'assets/icons/cart/iphone.png';


export const user_data: TUser = {
  isAuth: true,
  name: 'Бердымухамедов Гурбангулы Мяликгулиевич',
  birthday: '01.01.1996',
  phone: '+996312123456',
  photo: '',
  gender: 'Мужской',
  email: 'berdymuhamedovgm@gmail.com',
  adress: 'Чуйский обл., Сокулукский р-ну, А/О Военно-Антоновский,  Ваенно-Антоновка А., Сыдыкова К., 91 Ү., 121 Б.',
  identifiedType: 'OUTDOOR',
  orders: [
    {
      name: 'Смартфон Samsung Galaxy s21 Ultra, Green, 256 GB',
      price: '32 250',
      paymentMethod: 'В кредит',
      processMethod: 'Самовывоз',
      status: 1,
      applicationId: '43222-1214',
      date: 'от 1 октября, 2021',
      image: iphone
    },
    {
      name: 'Смартфон Samsung Galaxy s21 Ultra, Green, 1 TB',
      price: '27 000',
      paymentMethod: 'В кредит',
      processMethod: 'Доставка',
      status: 2,
      applicationId: '43222-312',
      date: 'от 5 октября, 2021',
      image: iphone
    },
    {
      name: 'Смартфон Samsung Galaxy s21 Ultra, Green, 512 GB',
      price: '22 000',
      paymentMethod: 'В кредит',
      processMethod: 'Самовывоз',
      status: 3,
      applicationId: '43222-325',
      date: 'от 10 октября, 2021',
      image: iphone
    },
    {
      name: 'Смартфон Samsung Galaxy s21 Ultra, Green, 512 GB',
      price: '17 000',
      paymentMethod: 'В кредит',
      processMethod: 'Самовывоз',
      status: 4,
      applicationId: '43222-3662',
      date: 'от 27 октября, 2021',
      image: iphone
    }
  ]
};
