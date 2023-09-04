// NAME MUST BE THE SAME USED IN ./l2d.json
// IF CHARACTER HAVE BEEN ADDED AFTER OVERZONE (18th may 2023) YOU MUST SAY IT IN l2d.json WITH SPINE VERSION 4.1
// CHECK BLANC, NOIR, OR RUPEE SKIN FOR EXAMPLE
const RELEASED_UNITS = [
    '2B',
    '2B Metamorphic Damage',
    '2B YoRHa Uniform 1',
    '777',
    '9S',
    'A2',
    'A2 Metamorphic Damage',
    'A2 YoRHa Uniform Prototype',
    'Ade',
    'Admi',
    'Aki Hayakawa',
    'Alice',
    'Alice Sweet Home',
    'Anne: Miracle Fairy', 
    'Andersen',
    'Andersen Soaked',
    'Anis',
    'Anis: Sparkling Summer',
    'Anchor',
    'Angelina',
    'Aria', 
    'Beatrice',
    'Belorta',
    'Biscuit',
    'Blanc',
    'Blue Water Island',
    'Bolt',
    'Bolt Junior',
    'Booboo',
    'Bow Wow Paradise',
    'Brid',
    'Brid Model Worker',
    'Brid Black Moon',
    'Bridget', 
    'Burningum',
    'Cecil',
    'Centi',
    'Centi Supreme Holiday',
    'Cherry Blossom',
    'Chime',
    'Cocoa',
    'Collection Robot',
    'Crow',
    'Crown',
    'D',
    'Delta',
    'Denji',
    'Denji Chainsaw Man', 
    'Diesel',
    'Diesel Black Sunday',
    'Doban',
    'Dolla',
    'Dolla Dark Rose',
    'Dorothy',
    'Drake',
    'Drake Villain Racer',
    'E.H.',
    'Ember', 
    'Emma',
    'Emma Color Me Red',
    'Emma Office Therapy',
    'Enikk',
    'Ein',
    'Einkk',
    'Epinel', 
    'Espinel', 
    'Ether', 
    'Eunhwa', 
    'Exia',
    'Exia Join The Nerds',
    'Faceless Man',
    'Faceless NPC 1',
    'Faceless NPC 2',
    'Faceless NPC 3',
    'Faceless NPC 4',
    'Faceless NPC 5',
    'Faceless NPC 6',
    'Faceless NPC 7',
    'Faceless NPC 8',
    'Faceless NPC 9',
    'Faceless Woman',
    'Folkwang',
    'Frima',
    'Frima Sea of Sloth',
    'Golden Ship',
    'Guillotine',
    'Guilty', 
    'Harran',
    'Helm',
    'Helm Chandelier',
    'Helm: Aquamarine',
    'Himeno',
    'Hologram',
    'iDoll Flower', 
    'iDoll Ocean', 
    'iDoll Sun',
    'Indivilia',
    'Ingrid', 
    'Isabel',
    'Jackal',
    'Johan',
    'Joseph',
    'Julia', 
    'Julia Mild Nocturne',
    'K',
    'Katie',
    'Laplace',
    'Leona',
    'Liberalio',
    'Liberty',
    'License to Kill',
    'Liter',
    'Liter Guardfish',
    'Lucilla', 
    'Ludmilla',
    'Maid in Valentine',
    'Maiden',
    'Maiden Covert Nurse',
    'Makima',
    'Makima Coat Off',
    'Mana',
    'Marian',
    'Mary',
    'Mary: Bay Goddess',
    'Mass Produced Blue',
    'Mass Produced Orange',
    'Mass Produced Green',
    'Mass Produced Purple',
    'Mass Produced White',
    'Mast',
    'Mast A Pirate\'s Heart',
    'Mast_old',
    'Max',
    'Maxine', 
    'Maxwell',
    'Maxwell Mechanic White',
    'Mica', 
    'Mihara',
    'Milk',
    'Milk Extreme Fighter',
    'Miranda',
    'Modernia',
    'Modernia First Affection',
    'Moran',
    'Mustang',
    'N102', 
    'Neon',
    'Neon Blind Bullet',
    'Neon: Blue Ocean',
    'Nero',
    'Neve', 
    'Nihilister',
    'Noah', 
    'Noir',
    'Noise',
    'Noise Cherry Blossom Stage',
    'Novel',
    'Novel Penguin Holmes',
    'Nya Nya Paradise',
    'Papillon',
    'Pascal',
    'Pepper',
    'Pepper Ocean Vitamin',
    'Pinne',
    'Poli',
    'Poli Sweet Holic',
    'Power',
    'Privaty',
    'Privaty Government Grunt',
    'Product 08', 
    'Product 12',
    'Product 12: B-0006',
    'Product 12: C-1002',
    'Product 12: 6000-D',
    'Product 23',
    'Queen\'s Order',
    'Quency', 
    'Rapi', 
    'Rapi_old', 
    'Rapi White Promise',
    'Rapi Classic Vacation',
    'Rapunzel',
    'Raven',
    'Red Hood',
    'Rei',
    'Rian',
    'Rosanna',
    'Rouge',
    'Rumani',
    'Rupee', 
    'Rupee Rabbit Deluxe',
    'Rupee: Winter Shopper',
    'Ruru',
    'Sakura',
    'Sakura Midnight Stealth',
    'Scarlet',
    'Sea You Again',
    'Shifty',
    'Shifty_old',
    'Signal',
    'Signal Dramatic Chocolate',
    'Sin', 
    'Snow White', 
    'Soda',
    'Soldier EG', 
    'Soldier FA', 
    'Soldier OW', 
    'Soline', 
    'Sugar',
    'Sugar Hard-Boiled',
    'Syuen',
    'Vesti',
    'Volume', 
    'Viper',
    'Viper Toxic Rabbit',
    'Yan',
    'Yan Sunrise Market',
    'Yin',
    'Yulha', 
    'Yuni',
    'Yuni Pretty In Pink',
    'Zwei',
    'Smol Anchor',
    'Smol Bolt',
    'Smol Frima',
    'Smol Helm',
    'Smol Liter',
    'Smol Mary',
    'Smol Mast',
    'Smol Pepper',
    'Smol Rapi',
    'Smol Yan',
    'Story 00-01',
    'Story 00-01 no filter',
    'Story 00-02',
    'Story 00-02 no filter',
    'Story 00-03',
    'Story 02-01',
    'Story 04-01',
    'Story 04-02',
    'Story 04-05',
    'Story 07-02',
    'Story 12-01',
    'Story 13-02',
    'Story 13-03',
    'Story 14-01',
    'Story 14-03',
    'Story 14-05',
    'Story 15-01',
    'Story 19-01',
    'Story 20-01',
    'Story 21-01',
    'Story 22-01',
    'Story 22-02',
    'Story 22-06'
]
