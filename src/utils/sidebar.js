import Generic from '../page/Generic';

// Icons
import { ReactComponent as buyurtma } from '../assets/icons/buyurtmalar.svg';
import { ReactComponent as filial } from '../assets/icons/filial.svg';
import { ReactComponent as hisobot } from '../assets/icons/hisobot.svg';
import { ReactComponent as hodimlar } from '../assets/icons/settings.svg';
import { ReactComponent as settings } from '../assets/icons/settings.svg';
import { ReactComponent as mahsulotlar } from '../assets/icons/mahsulotlar.svg';
import { ReactComponent as kategoriya } from '../assets/icons/kategoriya.svg';
import { ReactComponent as mijozlar } from '../assets/icons/mijozlar.svg';

export const sidebar = [
  {
    id: 1,
    path: 'buyurtmalar',
    title: 'Buyurtmalar',
    Component: Generic,
    Icon: buyurtma,
    hidden: false,
  },
  {
    id: 2,
    path: 'maxsulotlar',
    title: 'Maxsulotlar',
    Component: Generic,
    Icon: mahsulotlar,
    hidden: false,
  },
  {
    id: 3,
    path: 'katigoriya',
    title: 'Katigoriya',
    Component: Generic,
    Icon: kategoriya,
    hidden: false,
  },
  {
    id: 4,
    path: 'filiallar',
    title: 'Filiallar',
    Component: Generic,
    Icon: filial,
    hidden: false,
  },
  {
    id: 5,
    path: 'mijozlar',
    title: 'Mijozlar',
    Component: Generic,
    Icon: mijozlar,
    hidden: false,
  },
  {
    id: 6,
    path: 'hisobot',
    title: 'Hisobot',
    Component: Generic,
    Icon: hisobot,
    hidden: false,
  },
  {
    id: 7,
    path: 'hodimlar',
    title: 'Hodimlar',
    Component: Generic,
    Icon: hodimlar,
    hidden: false,
  },
  {
    id: 8,
    path: 'katalog',
    title: 'Katalog',
    Component: Generic,
    Icon: settings,
    hidden: false,
  },
];
