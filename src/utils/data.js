import CatFish from "assets/images/catfish.jpg";
import CatFish1 from "assets/images/catfish1.jpg";
import CatFish2 from "assets/images/catfish2.jpg";
import CatFish3 from "assets/images/catfish3.jpg";
import Broiler from "assets/images/broiler.jpg";
import Broiler1 from "assets/images/broiler1.jpg";
import Broiler2 from "assets/images/broiler2.jpg";
import RhodeIsland from "assets/images/rhodeIsland.jpg";
import RhodeIsland1 from "assets/images/rhodeIsland1.jpg";
import RhodeIsland2 from "assets/images/rhodeIsland2.jpg";
import RhodeIsland3 from "assets/images/rhodeIsland3.jpg";
import Turkey from "assets/images/turkey.jpg";
import Turkey1 from "assets/images/turkey1.jpg";
import Turkey2 from "assets/images/turkey2.jpg";
import Turkey3 from "assets/images/turkey3.jpg";
import Goat from "assets/images/goat.jpg";
import Goat1 from "assets/images/goat1.jpg";
import Goat2 from "assets/images/goat2.jpg";
import Goat3 from "assets/images/goat3.jpg";
import Cattle from "assets/images/cattle.jpg";
import Cattle1 from "assets/images/cattle1.jpg";
import Cattle2 from "assets/images/cattle2.jpg";
import Spinach from "assets/images/spinach.jpg";
import Spinach1 from "assets/images/spinach1.jpg";
import Spinach2 from "assets/images/spinach2.jpg";
import FishFeed  from "assets/images/fishFeed.jpg";
import FishFeed1  from "assets/images/fishFeed1.jpg";
import FishFeed2  from "assets/images/fishFeed2.jpg";
import Man1  from "assets/images/man1.jpg";
import Man2  from "assets/images/man2.jpg";
import Woman1  from "assets/images/woman1.jpg";
import Eggs  from "assets/images/egg.jpg";
import Eggs1  from "assets/images/egg1.jpg";
import Eggs2  from "assets/images/egg2.jpg";
import Tomato  from "assets/images/tomato.jpg";
import Tomato1  from "assets/images/tomato1.jpg";
import Tomato2  from "assets/images/tomato2.jpg";
import Banana  from "assets/images/banana.jpg";
import Banana1  from "assets/images/banana1.jpg";
import Banana2  from "assets/images/banana2.jpg";
import Broccoli  from "assets/images/Broccoli.jpg";
import Broccoli1  from "assets/images/broccoli1.jpg";
import Broccoli2  from "assets/images/broccoli2.jpg";
import Corn  from "assets/images/corn.jpg";
import Corn1  from "assets/images/corn1.jpg";
import Corn2  from "assets/images/corn2.jpg";
import GoatOutline from "assets/images/goat-outline.png";
import VegeOutline from "assets/images/vegetable-outline.png";
import EggOutline from "assets/images/egg-outline.png";
import FishOutline from "assets/images/fish-outline.png";
import FruitOutline from "assets/images/fruit-outline.png";
import HenOutline from "assets/images/hen-outline.png";
import sackOutline from "assets/images/sack-outline.png";
import Img10 from "assets/images/img10.jpg";
import Img11 from "assets/images/img11.jpg";
import Img12 from "assets/images/img12.jpg";
import Img13 from "assets/images/img13.jpg";
import SmokedFish from "assets/images/smokedFish.jpg";
import SmokedFish1 from "assets/images/smokedFish1.jpg";
import SmokedFish2 from "assets/images/smokedFish2.jpg";
import Orange from "assets/images/orange.jpg";
import Orange1 from "assets/images/orange1.jpg";
import Orange2 from "assets/images/orange2.jpg";
import Milk from "assets/images/milk.jpg";
import Milk1 from "assets/images/milk1.jpg";
import Cheese from "assets/images/cheese.jpg";
import Cheese1 from "assets/images/cheese1.jpg";
import ChickenFeed from "assets/images/chickenFeed.jpg";
import ChickenFeed1 from "assets/images/chickenFeed1.jpg";

export const navLinks = [
    {id:1, title: "Home", link: "/"},
    {id:2, title: "Shop", link: "/shop"},
    {id:3, title: "Farms", link: "/farms"},
    {id:4, title: "Contact", link: "/contact"},

];

export const categories = [
    {id: 1, image: GoatOutline, name: "Livestock"},
    {id: 2, image: FishOutline, name: "Sea Food" },
    {id: 3, image: FruitOutline, name: "Fruits" },
    {id: 4, image: VegeOutline, name: "Vegetables" },
    {id: 5, image: HenOutline, name: "Poultry" },
    {id: 6, image: EggOutline, name: "Dairy" },
    {id: 7, image: sackOutline, name: "Feed" },
];

export const farmDetails = [
    {
        id:1, 
        title:'Best prices & offers', 
        description:'We provide you with the best prices for all farm produce. You get to buy fresh and affordable products'
    },
    {
        id:2, 
        title:'100% Natural Product Sales', 
        description:'We grow and sell diffrent kinds of fresh vegetables, crops, fish feeds and delivery to all states in Nigeria.'
    },
    {
        id:3, 
        title:'seafood / livestock / Poultry', 
        description:'We breed and sell and deliver diffrent species and sizes of Cat fish, livestock and Poultry birds such as Goats, Cattles, sheeps buffalos, chickens and turkeys .'
    },
    {
        id:4, 
        title:'Constructions', 
        description:'We help individuals, small businesses and big companies construct well structured fish ponds, livestock cages an structures.'
    }
]
export const hotDeals = [
    {
        id:1, 
        image:Img10, 
        time:'5 days left', 
        description:'Medium sized catfish for as low as 1000 naira per kilo', 
        newPrice: '1000', 
        oldPrice: '2000',
    },
    {
        id:2, 
        image:Img11, 
        time:'5 days left', 
        description:'Big basket of Tomato for 7,000', 
        newPrice: '7,000', 
        oldPrice: '10,000',
    },
    {
        id:3, 
        image:Img12, 
        time:'5 days left', 
        description:'Get Discounts on small - medium sized Cattles', 
        newPrice: '76,000', 
        oldPrice: '100,000',
    },
    {
        id:4, 
        image:Img13, 
        time:'5 days left', 
        description:'Vegetables are on discount now, click to find out more', 
        newPrice: '50% discount', 
        oldPrice: '100%',
    },

];

export const productCard =[
    {
        id:"1" , 
        category: 'Sea Food', 
        image: CatFish, 
        name: "Cat Fish", 
        amount: "2,000/kg", 
        description: 'live cat fish vary in sizes, please pick the size and quantity that you want.', descriptive_images: [
            {id: "01", image: CatFish1}, 
            {id: "02", image: CatFish2}, 
            {id: "03", image: CatFish3},
        ]
    },
    {
        id:"2" , 
        category: 'Poultry', 
        image: Broiler , 
        name: "Broiler", 
        amount: "5,000/chk", 
        description: 'Broilers vary in size and weight, please pick the size and quantity that you want.',
        descriptive_images: [
            {id: "01", image: Broiler1}, 
            {id: "02", image: Broiler2}, 
        ],
    }, 
    {
        id:"3" ,
        category: 'Poultry', 
        image: RhodeIsland, 
        name: "Rhode Island Red", 
        amount: "4,000/chk", 
        description: 'Broilers vary in size and weight, please pick the size and quantity that you want.',
        descriptive_images: [
            {id: "01", image: RhodeIsland1}, 
            {id: "02", image: RhodeIsland2}, 
            {id: "03", image: RhodeIsland3}, 
        ],
    }, 
    {
        id:"4" , 
        category: 'Poultry', 
        image: Turkey, 
        name: "Turkey", 
        amount: "6,000/trk", 
        description: 'Broilers vary in size and weight, please pick the size and quantity that you want.',
        descriptive_images: [
            {id: "01", image: Turkey1}, 
            {id: "02", image: Turkey2}, 
            {id: "03", image: Turkey3}, 
        ],
    }, 
    {
        id:"5", 
        category: 'Livestock',
        image: Goat, 
        name: "Goats", 
        amount: "70,000/goat", 
        description: 'Broilers vary in size and weight, please pick the size and quantity that you want.',
        descriptive_images: [
            {id: "01", image: Goat1}, 
            {id: "02", image: Goat2}, 
            {id: "03", image: Goat3}, 
        ],
    },

    {
        id:"6" , 
        category: 'Livestock', 
        image: Cattle, 
        name: "Cattles", 
        amount: "260,000/catl", 
        description: 'Broilers vary in size and weight, please pick the size and quantity that you want.',
        descriptive_images: [
            {id: "01", image: Cattle1}, 
            {id: "02", image: Cattle2}, 
        ],
    },
    {
        id:"7" , 
        category: 'Vegetables', 
        image: Spinach, 
        name: "spinach", 
        amount: "500/bag", 
        description: 'Broilers vary in size and weight, please pick the size and quantity that you want.',
        descriptive_images: [
            {id: "01", image: Spinach1}, 
            {id: "02", image: Spinach2}, 
        ],
    }, 
    {
        id:"8" , 
        category: 'Poultry', 
        image: Eggs , 
        name: "Eggs", 
        amount: "2,000/crt", 
        description: 'Broilers vary in size and weight, please pick the size and quantity that you want.',
        descriptive_images: [
            {id: "01", image: Eggs1}, 
            {id: "02", image: Eggs2}, 
        ],
    },
    {
        id:"9", 
        category: 'Vegetables', 
        image: Tomato , 
        name: "Tomato", 
        amount: "2,000/kg", 
        description: 'Broilers vary in size and weight, please pick the size and quantity that you want.',
        descriptive_images: [
            {id: "01", image: Tomato1}, 
            {id: "02", image: Tomato2}, 
        ],
    },
    {
        id:"10" , 
        category: 'Fruits', 
        image: Banana , 
        name: "Banana", 
        amount: "1,000/1",
        description: 'Broilers vary in size and weight, please pick the size and quantity that you want.',
        descriptive_images: [
            {id: "01", image: Banana1}, 
            {id: "02", image: Banana2}, 
        ],
    },
    {
        id:"11" ,
        category: 'Vegetables', 
        image: Broccoli , 
        name: "Broccoli", 
        amount: "900/1", 
        description: 'Broilers vary in size and weight, please pick the size and quantity that you want.',
        descriptive_images: [
            {id: "01", image: Broccoli1}, 
            {id: "02", image: Broccoli2}, 
        ],
    }, 
    {
        id:"12" , 
        category: 'Vegetables', 
        image: Corn , 
        name: "Fresh Corn", 
        amount: "200/1", 
        description: 'Corn vary in size and weight, please pick the size and quantity that you want.',
        descriptive_images: [
            {id: "01", image: Corn1}, 
            {id: "02", image: Corn2}, 
            {id: "03", image: Corn}, 
        ],
    }, 
    {
        id:"13" , 
        category: 'Feed', 
        image: FishFeed , 
        name: "Fish Feed", 
        amount: "16,000/bg", 
        description: 'Fish Feed vary in size and weight, please pick the size and quantity that you want.',
        descriptive_images: [
            {id: "01", image: FishFeed1}, 
            {id: "02", image: FishFeed2},
            {id: "03", image: FishFeed}, 
        ],
    }, 
    {
        id:"14" , 
        category: 'Sea Food', 
        image: SmokedFish, 
        name: "Smoked Fish", 
        amount: "2,000/pack", 
        description: 'Smoked fish vary in sizes, please pick the size and quantity of packs that you want. we have 6 in one pack', 
        descriptive_images: [
            {id: "01", image: SmokedFish1}, 
            {id: "02", image: SmokedFish}, 
            {id: "03", image: SmokedFish2},
        ]
    },
    {
        id:"15" , 
        category: 'Fruits', 
        image: Orange , 
        name: "Orange", 
        amount: "100/1",
        description: 'Oranges vary in size and weight, please pick the size and quantity that you want.',
        descriptive_images: [
            {id: "01", image: Orange1}, 
            {id: "02", image: Orange2}, 
            {id: "02", image: Orange}
        ],
    },
    {
        id:"16" , 
        category: 'Dairy', 
        image: Milk , 
        name: "Milk", 
        amount: "3000/pack",
        description: 'Our Milk vary in size and weight, please pick the size and quantity that you want.',
        descriptive_images: [
            {id: "01", image: Milk1}, 
            {id: "02", image: Milk}, 
        ],
    },
    {
        id:"17" , 
        category: 'Dairy', 
        image: Cheese , 
        name: "Local Cheese", 
        amount: "500/pack",
        description: 'Our Cheese vary in size and weight, please pick the size and quantity that you want. we have 5 pieces in a pack',
        descriptive_images: [
            {id: "01", image: Cheese1}, 
            {id: "02", image: Cheese}, 
        ],
    },
    {
        id:"18" , 
        category: 'Feed', 
        image: ChickenFeed , 
        name: "Chiken Feed", 
        amount: "5,000/bg", 
        description: 'Chicken Feed vary in size and weight, please pick the size and quantity that you want.',
        descriptive_images: [
            {id: "01", image: ChickenFeed1}, 
            {id: "02", image: ChickenFeed}, 
        ],
    }, 
];

export const testimonialDetails = [
    {id: 1, pic:Man1, comments: "I bought 5 chickens from Olabisi's last week, the biggest chicken i have bought in awhile for real. i highly recommend them. ", name: "Ola Adebayo"},  
    {id: 2, pic:Woman1, comments: "I always buy my fresh vegetables from them, they deliver swiftly", name: "RIta Ajayi"},
    {id: 3, pic:Man2, comments: "I bought two Cows from Olabisi's farm for my Dad's burial, they deliverd it to my village without stress.", name: "Wole Okiki"},  
];

export const stats = [
    {id:1, stat: '100%', text: "Organic"},
    {id:2, stat: '50', text: "Active Product"},
    {id:3, stat: '10', text: "Years of Farming"},
];

export const productSizeOptions = [
    {value: 1,label: "Extra-Small"},
    {value: 2,label: "Small"},
    {value: 3,label: "Medium"},
    {value: 4,label: "Large"},
    {value: 5,label: "Extar-Large"},
];