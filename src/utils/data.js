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



export const navLinks = [
    {id:1, title: "Home", link: "/"},
    {id:2, title: "About", link: "/about"},
    {id:3, title: "Pages", link: "/"},
    {id:4, title: "Shop", link: "/shop"},
    {id:5, title: "Projects", link: "/projects"},
    {id:6, title: "Contact", link: "/contact"},

];

export const productCard =[
    {id:1 , category: 'Sea Food', image: CatFish, name: "Cat Fish", amount: "2,000/kg"},
    {id:2 , category: 'Poultry', image: Broiler , name: "broiler", amount: "5,000/chk"}, 
    {id:3 , category: 'Poultry', image: RhodeIsland, name: "Rhode Island Red", amount: "4,000/chk"}, 
    {id:4 , category: 'Poultry', image: Turkey, name: "Turkey", amount: "6,000/trk"}, 
    {id:5 , category: 'Livestock', image: Goat, name: "Goats", amount: "70,000/goat"}, 
    {id:6 , category: 'Livestock', image: Cattle, name: "Cattles", amount: "260,000/catl"},
    {id:7 , category: 'vegetables', image: Spinach, name: "spinach", amount: "500/bag"}, 
    {id:8 , category: 'Feed', image: FishFeed , name: "Fish Feed", amount: "16,000/bag"}, 
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
]