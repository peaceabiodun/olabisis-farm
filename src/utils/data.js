import CatFish from "assets/images/catfish.jpg";
import Broiler from "assets/images/broiler.jpg";
import RhodeIsland from "assets/images/rhodeIsland.jpg";
import Turkey from "assets/images/turkey.jpg";
import Goat from "assets/images/goat.jpg";
import Cattle from "assets/images/cattle.jpg";
import Spinach from "assets/images/spinach.jpg";
import FishFeed  from "assets/images/fishFeed.jpg";


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