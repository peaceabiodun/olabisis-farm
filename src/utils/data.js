import CatFish from "assets/images/catfish.jpg";
import Broiler from "assets/images/broiler.jpg";
import RhodeIsland from "assets/images/rhodeIsland.jpg";
import Turkey from "assets/images/turkey.jpg";
import Goat from "assets/images/goat.jpg";
import Cattle from "assets/images/cattle.jpg";
import Spinach from "assets/images/spinach.jpg";
import FishFeed  from "assets/images/fishFeed.jpg";
import Man1  from "assets/images/man1.jpg";
import Man2  from "assets/images/man2.jpg";
import Woman1  from "assets/images/woman1.jpg";
import Eggs  from "assets/images/egg.jpg";
import Tomato  from "assets/images/tomato.jpg";
import Banana  from "assets/images/banana.jpg";
import Broccoli  from "assets/images/Broccoli.jpg";
import Corn  from "assets/images/corn.jpg";



export const navLinks = [
    {id:1, title: "Home", link: "/"},
    {id:2, title: "Shop", link: "/shop"},
    {id:3, title: "Projects", link: "/projects"},
    {id:4, title: "Contact", link: "/contact"},

];

export const productCard =[
    {id:"1" , category: 'Sea Food', image: CatFish, name: "Cat Fish", amount: "2,000/kg", description: 'live cat fish vary in sizes, please pick the size and quantity that you want.'},
    {id:"2" , category: 'Poultry', image: Broiler , name: "Broiler", amount: "5,000/chk", description: 'Broilers vary in size and weight, please pick the size and quantity that you want. '}, 
    {id:"3" , category: 'Poultry', image: RhodeIsland, name: "Rhode Island Red", amount: "4,000/chk", description: 'Broilers vary in size and weight, please pick the size and quantity that you want. '}, 
    {id:"4" , category: 'Poultry', image: Turkey, name: "Turkey", amount: "6,000/trk", description: 'Broilers vary in size and weight, please pick the size and quantity that you want. '}, 
    {id:"5" , category: 'Livestock', image: Goat, name: "Goats", amount: "70,000/goat", description: 'Broilers vary in size and weight, please pick the size and quantity that you want. '}, 
    {id:"6" , category: 'Livestock', image: Cattle, name: "Cattles", amount: "260,000/catl", description: 'Broilers vary in size and weight, please pick the size and quantity that you want. '},
    {id:"7" , category: 'vegetables', image: Spinach, name: "spinach", amount: "500/bag", description: 'Broilers vary in size and weight, please pick the size and quantity that you want. '}, 
    {id:"8" , category: 'Diary', image: Eggs , name: "Eggs", amount: "2,000/crt", description: 'Broilers vary in size and weight, please pick the size and quantity that you want. '},
    {id:"9" , category: 'Vegetables', image: Tomato , name: "Tomato", amount: "2,000/kg", description: 'Broilers vary in size and weight, please pick the size and quantity that you want. '},
    {id:"10" , category: 'Fruits', image: Banana , name: "Banana", amount: "1,000/1"},
    {id:"11" , category: 'Vegetables', image: Broccoli , name: "Broccoli", amount: "900/1", description: 'Broilers vary in size and weight, please pick the size and quantity that you want. '}, 
    {id:"12" , category: 'Vegetables', image: Corn , name: "Fresh Corn", amount: "200/1", description: 'Broilers vary in size and weight, please pick the size and quantity that you want. '}, 
    {id:"13" , category: 'Fish Feed', image: FishFeed , name: "Feed", amount: "16,000/bg", description: 'Broilers vary in size and weight, please pick the size and quantity that you want. '}, 
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