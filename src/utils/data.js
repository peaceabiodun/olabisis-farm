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


export const navLinks = [
    {id:1, title: "Home", link: "/"},
    {id:2, title: "Shop", link: "/shop"},
    {id:3, title: "Farms", link: "/farms"},
    {id:4, title: "Contact", link: "/contact"},

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
        category: 'Diary', 
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
        ],},
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
        description: 'Broilers vary in size and weight, please pick the size and quantity that you want.',
        descriptive_images: [
            {id: "01", image: Corn1}, 
            {id: "02", image: Corn2}, 
        ],
    }, 
    {
        id:"13" , 
        category: 'Fish Feed', 
        image: FishFeed , 
        name: "Feed", 
        amount: "16,000/bg", 
        description: 'Broilers vary in size and weight, please pick the size and quantity that you want.',
        descriptive_images: [
            {id: "01", image: FishFeed1}, 
            {id: "02", image: FishFeed2}, 
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