export interface PriceOption {
  quantity: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  teluguName: string;
  category: 'oils' | 'ghee' | 'flours' | 'others';
  prices: PriceOption[];
  description?: string;
}

export const products: Product[] = [
  // OILS
  { id: 'groundnut-oil', name: 'Groundnut Oil', teluguName: 'వేరుశెనగ నూనె', category: 'oils', prices: [{ quantity: '1L', price: 370 }, { quantity: '500ml', price: 190 }] },
  { id: 'white-sesame-oil', name: 'White Sesame Oil', teluguName: 'తెల్ల నువ్వుల నూనె', category: 'oils', prices: [{ quantity: '1L', price: 490 }, { quantity: '500ml', price: 250 }, { quantity: '250ml', price: 130 }] },
  { id: 'coconut-oil', name: 'Coconut Oil', teluguName: 'కొబ్బరి నూనె', category: 'oils', prices: [{ quantity: '1L', price: 700 }, { quantity: '500ml', price: 350 }, { quantity: '250ml', price: 180 }] },
  { id: 'safflower-oil', name: 'Safflower Oil', teluguName: 'కుసుమ నూనె', category: 'oils', prices: [{ quantity: '1L', price: 490 }, { quantity: '500ml', price: 250 }] },
  { id: 'black-sesame-oil', name: 'Black Sesame Oil', teluguName: 'నల్ల నువ్వుల నూనె', category: 'oils', prices: [{ quantity: '1L', price: 450 }, { quantity: '500ml', price: 230 }, { quantity: '250ml', price: 120 }] },
  { id: 'mustard-oil', name: 'Mustard Oil', teluguName: 'ఆవ నూనె', category: 'oils', prices: [{ quantity: '1L', price: 450 }, { quantity: '500ml', price: 230 }, { quantity: '250ml', price: 120 }] },
  { id: 'castor-oil', name: 'Castor Oil', teluguName: 'ఆముదం నూనె', category: 'oils', prices: [{ quantity: '1L', price: 500 }, { quantity: '500ml', price: 250 }, { quantity: '200ml', price: 120 }] },
  { id: 'neem-oil', name: 'Neem Oil', teluguName: 'వేప నూనె', category: 'oils', prices: [{ quantity: '1L', price: 500 }, { quantity: '500ml', price: 250 }, { quantity: '200ml', price: 120 }] },
  // GHEE
  { id: 'buffalo-ghee', name: 'Buffalo Ghee', teluguName: 'గేదె నెయ్యి', category: 'ghee', prices: [{ quantity: '1kg', price: 850 }, { quantity: '500g', price: 440 }, { quantity: '250g', price: 220 }] },
  { id: 'cow-ghee', name: 'Cow Ghee', teluguName: 'ఆవు నెయ్యి', category: 'ghee', prices: [{ quantity: '1kg', price: 850 }, { quantity: '500g', price: 440 }, { quantity: '250g', price: 220 }] },
  // FLOURS
  { id: 'ragi-flour', name: 'Ragi Flour', teluguName: 'రాగి పిండి', category: 'flours', prices: [{ quantity: '1kg', price: 80 }] },
  { id: 'white-jowar', name: 'White Jowar Flour', teluguName: 'తెల్ల జొన్న పిండి', category: 'flours', prices: [{ quantity: '1kg', price: 80 }] },
  { id: 'yellow-jowar', name: 'Yellow Jowar Flour', teluguName: 'పసుపు జొన్న పిండి', category: 'flours', prices: [{ quantity: '1kg', price: 100 }] },
  { id: 'wheat-flour', name: 'Wheat Flour', teluguName: 'గోధుమ పిండి', category: 'flours', prices: [{ quantity: '1kg', price: 80 }] },
  { id: 'bajra-flour', name: 'Bajra Flour', teluguName: 'సజ్జ పిండి', category: 'flours', prices: [{ quantity: '1kg', price: 80 }] },
  // OTHERS
  { id: 'jaggery-powder', name: 'Jaggery Powder', teluguName: 'బెల్లం పొడి', category: 'others', prices: [{ quantity: '1kg', price: 120 }] },
  { id: 'mirchi-powder', name: 'Mirchi Powder', teluguName: 'మిర్చి పొడి', category: 'others', prices: [{ quantity: '250g', price: 100 }] },
  { id: 'turmeric-powder', name: 'Turmeric Powder', teluguName: 'పసుపు పొడి', category: 'others', prices: [{ quantity: '250g', price: 100 }] },
  { id: 'rock-salt', name: 'Rock Salt', teluguName: 'రాతి ఉప్పు', category: 'others', prices: [{ quantity: '1kg', price: 65 }] },
  { id: 'sea-salt', name: 'Sea Salt', teluguName: 'సముద్ర ఉప్పు', category: 'others', prices: [{ quantity: '1kg', price: 50 }] },
  { id: 'pure-honey', name: 'Pure Honey', teluguName: 'స్వచ్ఛమైన తేనె', category: 'others', prices: [{ quantity: '500g', price: 250 }, { quantity: '250g', price: 130 }] },
];

export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'oils', name: 'Cold Pressed Oils' },
  { id: 'ghee', name: 'Pure Ghee' },
  { id: 'flours', name: 'Natural Flours' },
  { id: 'others', name: 'Others' },
];
