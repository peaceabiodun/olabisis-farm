import Footer from "components/pageFooter/footer";
import NavbarHeader from "../../components/navbarHeader/navbarHeader";
import Body from "./body";



const LandingPage = () => {
    return ( 
        <div>
            <NavbarHeader />
            <Body />
            <Footer />
        </div>
     );
}
 
export default LandingPage;




// import React, { useEffect, useState } from 'react';
// import PageHeaderText from '../base/page-header-text';
// import { Button, Multiselect } from '@cokitchen/cokitchen-components';
// import { MultiselectItem } from '@cokitchen/cokitchen-components/dist/form/multiselect/types';
// import { Link } from 'react-router-dom';
// import { ReactComponent as ArrowBackIcon } from '../../assets/icons/arrow-back.svg';


// const DuplicateAddOn = () => {

//     const [brands, setBrands] = useState([] as MultiselectItem[]);
//     const [mealCategory, setMealCategory] = useState([] as MultiselectItem[]);
//     const [meal, setMeal] = useState([] as MultiselectItem[]);
//     const [selectedBrand, setSelectedBrand] = useState([] as string[]);
//     const [selectedMealCategory, setSelectedMealCategory] = useState([] as string[]);
//     const [selectedMeal, setSelectedMeal] = useState([] as string[]);

//     return ( 
//         <div className='space-y-7 w-[75%] max-w-[800px]'>
//             <PageHeaderText title='Duplicate stewed goat meat' description='This lets you add an add-on to various meals' />

//             <div className='space-y-5 text-[14px]'>
//                 <div>
//                     <p className=' font-medium'>Select brand</p>
//                     <Multiselect 
//                         placeholder='Select Brand'
//                         options={brands}
//                         values={selectedBrand}
//                         onChange={setSelectedBrand}
//                     />
//                 </div>

//                 <div>
//                     <p className=' font-medium'>Select meal category</p>
//                     <Multiselect 
//                         placeholder='Category'
//                         options={mealCategory}
//                         values={selectedMealCategory}
//                         onChange={setSelectedMealCategory}
//                     />
//                 </div>

//                 <div>
//                     <p className=' font-medium'>Select meal</p>
//                     <Multiselect 
//                         placeholder='Select meal'
//                         options={meal}
//                         values={selectedMeal}
//                         onChange={setSelectedMeal}
//                     />
//                 </div>

//                 <div>
//                     <p  className=' font-medium'>Select add-on category (you may select multiple options)</p>
//                 </div>

//                 <div className='flex flex-row justify-between' >
//                     <Link to='.'>
//                     <div className='bg-[#F5F4F4] rounded-full p-4'>
//                         <ArrowBackIcon className='cursor-pointer' />
//                     </div>
//                     </Link>

//                     <Button 
//                         color='primary' 
//                         variant='block'
//                         small
//                         className='text-sm w-[150px] h-[46px]'
//                     >
//                     Confirm
//                     </Button>
//                 </div>
//             </div>

//         </div>
//      );
// }
 
// export default DuplicateAddOn;




