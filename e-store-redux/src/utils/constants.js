import {GiCompass, GiDiamondHard, GiStabbedNote} from 'react-icons/gi'

export const links = [
    {
        id: 1,
        text: 'home',
        url: '/'
    },
    {
        id: 2,
        text: 'about',
        url: '/about'
    },
    {
        id: 3,
        text: 'products',
        url: '/products'
    },
]

export const bannerUrls = [
    'https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_3000x1200._CB431281466_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/WLA/Feb/NC/D21052619_WLA_BAU_GW-heroes_Headsets_FPF_FEB_DesktopTallHero_3000x1200._CB660350658_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Audio/MI/Final/MI_Gw_3000x1200._CB659658858_.jpg',
]

export const services = [
        {
        id: 1,
        icon: <GiCompass />,
        title: 'mission',
        text:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
        },
        {
        id: 2,
        icon: <GiDiamondHard />,
        title: 'vision',
        text:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
        },
        {
        id: 3,
        icon: <GiStabbedNote />,
        title: 'history',
        text:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
        },
]

export const products_url = 'https://course-api.com/react-store-products'
export const single_product_url = `https://course-api.com/react-store-single-product?id=`