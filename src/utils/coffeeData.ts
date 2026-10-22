import { Beverage, Benefit, CommunityNote } from '../types/coffee';

import heroCupImg from '../assets/images/hero_coffee_cup_1792663881131.jpg';
import storyRoasterImg from '../assets/images/story_roaster_craft_1792663881546.jpg';
import ritualBrewImg from '../assets/images/ritual_coffee_brew_1792663882511.jpg';
import icedBrewImg from '../assets/images/beverage_iced_brew_1792663882698.jpg';
import dessertTiramisuImg from '../assets/images/dessert_tiramisu_1792663883470.jpg';

export const ASSETS = {
  heroCup: heroCupImg,
  storyRoaster: storyRoasterImg,
  ritualBrew: ritualBrewImg,
  icedBrew: icedBrewImg,
  dessertTiramisu: dessertTiramisuImg,
};

export const BENEFITS: Benefit[] = [
  {
    id: 'b1',
    title: 'Fire-Roasted Daily',
    description: 'Small cast-iron drum batches roasted over hardwood embers.',
    iconName: 'Flame'
  },
  {
    id: 'b2',
    title: 'Curated Micro-Lots',
    description: 'Direct relationships with regenerative high-elevation farms.',
    iconName: 'Sprout'
  },
  {
    id: 'b3',
    title: 'Tactile Gathering Space',
    description: 'Natural oak, hand-cast terracotta, and quiet acoustic corners.',
    iconName: 'Compass'
  },
  {
    id: 'b4',
    title: 'High-Speed Connectivity',
    description: 'Fiber connection and dedicated work tables for thoughtful focus.',
    iconName: 'Wifi'
  }
];

export const SIGNATURE_BEVERAGES: Beverage[] = [
  {
    id: 'bev-1',
    name: 'Velvet Flat White',
    subtitle: 'Microfoam & Double Ristretto',
    tagline: 'Smooth, velvety, and balanced with natural honeycomb sweetness.',
    category: 'espresso',
    price: '$5.75',
    image: heroCupImg,
    flavorNotes: ['Honeycomb', 'Roasted Almond', 'Raw Cacao'],
    roastLevel: 'Medium-Dark',
    origin: 'Antioquia, Colombia',
    altitude: '1,850m',
    process: 'Washed Extended Ferment',
    description: 'Double shot of our signature Ember Blend pulled short, gently folded with velvety micro-textured whole or oat milk.',
    brewSpecs: {
      ratio: '1:2.2',
      temp: '93°C',
      time: '28s'
    }
  },
  {
    id: 'bev-2',
    name: 'Golden Ember Caramel Latte',
    subtitle: 'Smoked Sea Salt & Madagascar Bean',
    tagline: 'A little sweet, touched by fire and bourbon vanilla.',
    category: 'espresso',
    price: '$6.50',
    image: heroCupImg,
    flavorNotes: ['Smoked Caramel', 'Bourbon Vanilla', 'Brown Butter'],
    roastLevel: 'Medium-Dark',
    origin: 'Huehuetenango, Guatemala',
    altitude: '1,900m',
    process: 'Fully Washed',
    description: 'Single-origin espresso layered over house-simmered dark caramel infused with oak smoke and Maldon sea salt flakes.',
    brewSpecs: {
      ratio: '1:2',
      temp: '92°C',
      time: '26s'
    }
  },
  {
    id: 'bev-3',
    name: 'Kyoto Cascara Cold Brew',
    subtitle: '18-Hour Slow Drip Over Ice',
    tagline: 'Bold, deep, refreshing, with silky cascara foam.',
    category: 'cold-brew',
    price: '$6.25',
    image: icedBrewImg,
    flavorNotes: ['Dark Cherry', 'Molasses', 'Candied Citrus'],
    roastLevel: 'Light-Medium',
    origin: 'Sidama, Ethiopia',
    altitude: '2,100m',
    process: 'Natural Sun-Dried',
    description: 'Cold water filtered drop-by-drop through heirloom Ethiopian grounds over 18 hours, served over carved clear ice with cascara froth.',
    brewSpecs: {
      ratio: '1:8.5',
      temp: '4°C',
      time: '18h'
    }
  },
  {
    id: 'bev-4',
    name: 'Smoked Copper Mocha',
    subtitle: 'Oaxacan 72% Cacao & Espresso',
    tagline: 'Chocolate meets coffee bliss with subtle warm spice.',
    category: 'espresso',
    price: '$6.75',
    image: heroCupImg,
    flavorNotes: ['Oaxacan Cacao', 'Ceylon Cinnamon', 'Nutmeg Ember'],
    roastLevel: 'Dark Fire-Roasted',
    origin: 'Chiapas, Mexico',
    altitude: '1,650m',
    process: 'Honey Process',
    description: 'Stone-ground 72% dark Oaxacan stone-milled chocolate melted into double espresso, steamed milk, and dusted ember spices.',
    brewSpecs: {
      ratio: '1:2',
      temp: '94°C',
      time: '30s'
    }
  }
];

export const FULL_COLLECTION: Beverage[] = [
  ...SIGNATURE_BEVERAGES,
  {
    id: 'col-1',
    name: 'Lungo Arabica Reserva',
    subtitle: 'Extended Extraction Single Origin',
    tagline: 'An espresso style crafted with longer extraction time for profound aromatics.',
    category: 'espresso',
    price: '$5.25',
    image: heroCupImg,
    flavorNotes: ['Bergamot', 'Dried Fig', 'Toasted Cedar'],
    roastLevel: 'Light-Medium',
    origin: 'Yirgacheffe, Ethiopia',
    altitude: '2,200m',
    process: 'Washed Heirloom',
    description: 'A pulled single origin with higher water contact time yielding delicate floral aromatics and lingering sweetness.',
  },
  {
    id: 'col-2',
    name: 'Spiced Dalgona Cloud',
    subtitle: 'Whipped Espresso Foam & Chilled Milk',
    tagline: 'Aerated whipped coffee crown floating on iced spiced whole milk.',
    category: 'specialty' as any,
    price: '$6.50',
    image: icedBrewImg,
    flavorNotes: ['Cardamom', 'Caramelized Sugar', 'Sweet Cream'],
    roastLevel: 'Medium-Dark',
    origin: 'Coorg, India',
    altitude: '1,300m',
    process: 'Monsooned Malabar',
    description: 'Hand-whipped coffee froth over iced velvety oat milk infused with crushed green cardamom pods.',
  },
  {
    id: 'col-3',
    name: 'Wood-Fired Pour-Over',
    subtitle: 'Manual V60 Single-Cup Ritual',
    tagline: 'Pure, nuanced cup brewed fresh table-side with gooseneck kettle.',
    category: 'filter',
    price: '$6.00',
    image: ritualBrewImg,
    flavorNotes: ['Jasmine', 'White Peach', 'Meyer Lemon'],
    roastLevel: 'Light-Medium',
    origin: 'Tarrazú, Costa Rica',
    altitude: '1,950m',
    process: 'White Honey',
    description: 'Slow manual extraction through ceramic dripper using mineralized 93°C spring water.',
  },
  {
    id: 'col-4',
    name: 'Deconstructed Espresso Tiramisu',
    subtitle: 'Mascarpone, Single-Origin Espresso, Savoiardi',
    tagline: 'Whipped Italian mascarpone layered with espresso-soaked ladyfingers.',
    category: 'dessert',
    price: '$8.50',
    image: dessertTiramisuImg,
    flavorNotes: ['Dark Espresso', 'Sweet Mascarpone', 'Valrhona Cocoa'],
    roastLevel: 'Medium-Dark',
    origin: 'House Pastry Kitchen',
    altitude: 'Sea Level',
    process: 'Daily Artisan Bake',
    description: 'Delicate crisp ladyfinger biscuits steeped in fresh hot double ristretto, folded with zabaglione mascarpone cream and dusted with 100% cacao.',
  },
  {
    id: 'col-5',
    name: 'Cinnamon Ember Churros',
    subtitle: 'Spiced Dulce de Leche & Espresso Dip',
    tagline: 'Golden crisp churros rolled in ember sugar with warm espresso ganache.',
    category: 'dessert',
    price: '$7.50',
    image: dessertTiramisuImg,
    flavorNotes: ['Cinnamon Bark', 'Espresso Fudge', 'Golden Dough'],
    roastLevel: 'Medium-Dark',
    origin: 'House Pastry Kitchen',
    altitude: 'Sea Level',
    process: 'Fried to Order',
    description: 'Extruded choux pastry fried crisp to order, rolled in smoked Ceylon cinnamon sugar, served with molten espresso chocolate ganache.',
  },
  {
    id: 'col-6',
    name: 'Cardamom Gulab Jamun in Coffee Syrup',
    subtitle: 'Warm Milk Dumplings & Espresso Infusion',
    tagline: 'Traditional sweet milk dumplings steeped in spiced coffee blossom syrup.',
    category: 'dessert',
    price: '$7.00',
    image: dessertTiramisuImg,
    flavorNotes: ['Green Cardamom', 'Coffee Blossom', 'Pistachio Flakes'],
    roastLevel: 'Light-Medium',
    origin: 'House Pastry Kitchen',
    altitude: 'Sea Level',
    process: 'Hand Rolled',
    description: 'Tender caramelized milk solids simmered in organic cane syrup steeped with freshly ground single-origin espresso and saffron threads.',
  }
];

export const COMMUNITY_NOTES: CommunityNote[] = [
  {
    id: 'rev-1',
    author: 'Clara Montgomery',
    role: 'Architect & Daily Guest',
    location: 'Design Quarter',
    content: 'The wood-fired roaster creates a depth of crema I simply haven\'t tasted elsewhere. Their Velvet Flat White with house oat milk has become my morning non-negotiable.',
    favoriteItem: 'Velvet Flat White',
    rating: 5,
    date: '3 days ago'
  },
  {
    id: 'rev-2',
    author: 'Marcus Vance',
    role: 'Editorial Director',
    location: 'Riverside Walk',
    content: 'The 3D ceramic aesthetic reflects exactly what you feel stepping into the room—warm oak, slow unhurried conversation, and honest roasting craft. The Kyoto Cascara is phenomenal.',
    favoriteItem: 'Kyoto Cascara Cold Brew',
    rating: 5,
    date: '1 week ago'
  },
  {
    id: 'rev-3',
    author: 'Elena Rostova',
    role: 'Coffee Roaster & Sensory Judge',
    location: 'Old Foundry District',
    content: 'They do not hide bean terroir behind dark roasts. The ember wood finish enhances the natural berry sugars without acrid bite. A genuine craft sanctuary.',
    favoriteItem: 'Wood-Fired Pour-Over',
    rating: 5,
    date: '2 weeks ago'
  }
];
