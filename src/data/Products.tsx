import jordan1 from '../assets/products-img/jordan-01.png'
import jordan4 from '../assets/products-img/jordan.png'
import nikeAirBranco from '../assets/products-img/nike-air-branco.png'
import nikeAirAmarelo from '../assets/products-img/nike-air-amarelo.png'
import yeezy700 from '../assets/products-img/Yeezy-700.png'
import chunkyDunky from '../assets/products-img/chunky-dunky.png'

export const products: {
  img: string;
  name: string;
  color: string;
  price: number;
  size: number[];
  id: string;
}[] = [
    {
      'img': jordan1,
      'name': 'Air Jordan 1',
      'color': 'Red/Black',
      'price': 4500,
      'size': [43, 44, 46,48],
      'id': '1'
    },
    {
      'img': jordan4,
      'name': 'Air jordan 4',
      'color': 'Red/Black',
      'price': 2500,
      'size': [44, 45, 46],
      'id': '2'
    },
    {
      'img': nikeAirAmarelo,
      'name': 'Nike air',
      'color': 'White/Yellow',
      'price': 1800,
      'size': [42, 43, 44],
      'id': '3'
    },
    {
      'img': nikeAirBranco,
      'name': 'Nike air',
      'color': 'white/Ocean blue',
      'price': 2000,
      'size': [41, 43, 44],
      'id': '4'
    },
    {
      'img': yeezy700,
      'name': 'Yeezy 700',
      'color': 'Gray/White',
      'price': 6000,
      'size': [42, 43, 45],
      'id': '5'
    },
    {
      'img': chunkyDunky,
      'name': 'chunky Dunky',
      'color': 'Multicolor',
      'price': 6800,
      'size': [42, 43, 45],
      'id': '6'
    },
  ];