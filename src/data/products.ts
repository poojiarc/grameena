export interface PriceOption {
  quantity: string;
  price: number;
  mrp?: number;
}

export interface Product {
  id: string;
  name: string;
  teluguName: string;
  category: 'oils' | 'ghee' | 'flours' | 'others';
  prices: PriceOption[];
  image: string;
  description?: string;
}

// Product images
import groundnutOil from '@/assets/products/groundnut-oil.jpg';
import whiteSesameOil from '@/assets/products/white-sesame-oil.jpg';
import coconutOil from '@/assets/products/coconut-oil.jpg';
import safflowerOil from '@/assets/products/safflower-oil.jpeg';
import blackSesameOil from '@/assets/products/black-sesame-oil.jpg';
import mustardOil from '@/assets/products/mustard-oil.jpg';
import castorOil from '@/assets/products/castor-oil.jpg';
import neemOil from '@/assets/products/neem-oil.jpeg';
import buffaloGhee from '@/assets/products/buffalo-ghee.jpeg';
import cowGhee from '@/assets/products/cow-ghee.jpeg';
import ragiFlour from '@/assets/products/ragi-flour.jpg';
import whiteJowar from '@/assets/products/white-jowar.jpg';
import yellowJowar from '@/assets/products/yellow-jowar.jpg';
import wheatFlour from '@/assets/products/wheat-flour.jpg';
import bajraFlour from '@/assets/products/bajra-flour.jpg';
import jaggeryPowder from '@/assets/products/jaggery-powder.jpg';
import mirchiPowder from '@/assets/products/mirchi-powder.jpg';
import turmericPowder from '@/assets/products/turmeric-powder.jpg';
import rockSalt from '@/assets/products/rock-salt.jpg';
import seaSalt from '@/assets/products/sea-salt.jpg';
import pureHoney from '@/assets/products/pure-honey.jpg';
import sunflowerOil from '@/assets/products/sunflower-oil.jpeg';

export const products: Product[] = [
  // OILS
  { id: 'groundnut-oil', name: 'Groundnut Oil', teluguName: 'వేరుశెనగ నూనె', category: 'oils', image: groundnutOil, prices: [{ quantity: '1L', price: 370, mrp: 400 }, { quantity: '500ml', price: 190 }] },
  { id: 'white-sesame-oil', name: 'White Sesame Oil', teluguName: 'తెల్ల నువ్వుల నూనె', category: 'oils', image: whiteSesameOil, prices: [{ quantity: '1L', price: 490, mrp: 550 }, { quantity: '500ml', price: 250 }, { quantity: '250ml', price: 130 }] },
  { id: 'coconut-oil', name: 'Coconut Oil', teluguName: 'కొబ్బరి నూనె', category: 'oils', image: coconutOil, prices: [{ quantity: '1L', price: 700, mrp: 750 }, { quantity: '500ml', price: 350 }, { quantity: '250ml', price: 180 }] },
  { id: 'safflower-oil', name: 'Safflower Oil', teluguName: 'కుసుమ నూనె', category: 'oils', image: safflowerOil, prices: [{ quantity: '1L', price: 490, mrp: 520 }, { quantity: '500ml', price: 250 }] },
  { id: 'black-sesame-oil', name: 'Black Sesame Oil', teluguName: 'నల్ల నువ్వుల నూనె', category: 'oils', image: blackSesameOil, prices: [{ quantity: '1L', price: 450, mrp: 500 }, { quantity: '500ml', price: 230 }, { quantity: '250ml', price: 120 }] },
  { id: 'mustard-oil', name: 'Mustard Oil', teluguName: 'ఆవ నూనె', category: 'oils', image: mustardOil, prices: [{ quantity: '1L', price: 450, mrp: 480 }, { quantity: '500ml', price: 230 }, { quantity: '250ml', price: 120 }] },
  { id: 'castor-oil', name: 'Castor Oil', teluguName: 'ఆముదం నూనె', category: 'oils', image: castorOil, prices: [{ quantity: '1L', price: 500 }, { quantity: '500ml', price: 250 }, { quantity: '200ml', price: 120 }] },
  { id: 'neem-oil', name: 'Neem Oil', teluguName: 'వేప నూనె', category: 'oils', image: neemOil, prices: [{ quantity: '1L', price: 500 }, { quantity: '500ml', price: 250 }, { quantity: '200ml', price: 120 }] },
  // GHEE
  { id: 'buffalo-ghee', name: 'Buffalo Ghee', teluguName: 'గేదె నెయ్యి', category: 'ghee', image: buffaloGhee, prices: [{ quantity: '1kg', price: 850 }, { quantity: '500g', price: 440 }, { quantity: '250g', price: 220 }] },
  { id: 'cow-ghee', name: 'Cow Ghee', teluguName: 'ఆవు నెయ్యి', category: 'ghee', image: cowGhee, prices: [{ quantity: '1kg', price: 850 }, { quantity: '500g', price: 440 }, { quantity: '250g', price: 220 }] },
  // FLOURS
  { id: 'ragi-flour', name: 'Ragi Flour', teluguName: 'రాగి పిండి', category: 'flours', image: ragiFlour, prices: [{ quantity: '1kg', price: 80, mrp: 90 }] },
  { id: 'white-jowar', name: 'White Jowar Flour', teluguName: 'తెల్ల జొన్న పిండి', category: 'flours', image: whiteJowar, prices: [{ quantity: '1kg', price: 80, mrp: 90 }] },
  { id: 'yellow-jowar', name: 'Yellow Jowar Flour', teluguName: 'పసుపు జొన్న పిండి', category: 'flours', image: yellowJowar, prices: [{ quantity: '1kg', price: 100, mrp: 120 }] },
  { id: 'wheat-flour', name: 'Wheat Flour', teluguName: 'గోధుమ పిండి', category: 'flours', image: wheatFlour, prices: [{ quantity: '1kg', price: 80, mrp: 90 }] },
  { id: 'bajra-flour', name: 'Bajra Flour', teluguName: 'సజ్జ పిండి', category: 'flours', image: bajraFlour, prices: [{ quantity: '1kg', price: 80, mrp: 90 }] },
  // OTHERS
  { id: 'jaggery-powder', name: 'Jaggery Powder', teluguName: 'బెల్లం పొడి', category: 'others', image: jaggeryPowder, prices: [{ quantity: '1kg', price: 120 }] },
  { id: 'mirchi-powder', name: 'Mirchi Powder', teluguName: 'మిర్చి పొడి', category: 'others', image: mirchiPowder, prices: [{ quantity: '250g', price: 100, mrp: 120 }] },
  { id: 'turmeric-powder', name: 'Turmeric Powder', teluguName: 'పసుపు పొడి', category: 'others', image: turmericPowder, prices: [{ quantity: '250g', price: 100, mrp: 120 }] },
  { id: 'rock-salt', name: 'Rock Salt', teluguName: 'రాతి ఉప్పు', category: 'others', image: rockSalt, prices: [{ quantity: '1kg', price: 65 }] },
  { id: 'sea-salt', name: 'Sea Salt', teluguName: 'సముద్ర ఉప్పు', category: 'others', image: seaSalt, prices: [{ quantity: '1kg', price: 50 }] },
  { id: 'pure-honey', name: 'Pure Honey', teluguName: 'స్వచ్ఛమైన తేనె', category: 'others', image: pureHoney, prices: [{ quantity: '500g', price: 250 }, { quantity: '250g', price: 130 }] },
  {id: "Sunflower Oil", name: "Sunflower Oil", teluguName: "సూర్యకాంతి నూనె", category: "oils", image: sunflowerOil, prices: [{ quantity: '1000ml', price: 480, mrp: 500 }, { quantity: '500ml', price: 250 }] },
];

export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'oils', name: 'Cold Pressed Oils' },
  { id: 'ghee', name: 'Pure Ghee' },
  { id: 'flours', name: 'Natural Flours' },
  { id: 'others', name: 'Others' },
];
