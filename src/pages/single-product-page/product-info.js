import { ReactComponent as StarIcon} from 'assets/icons/Star.svg';
import "react-widgets/styles.css";
import NumberPicker from "react-widgets/NumberPicker";
import Select from 'react-dropdown-select';
import {productSizeOptions } from 'utils/data';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";

const ProductInfo = ({productDetails}) => {
    const [quantity, setQuantity] = useState('')
    const [selectedSize, setSelectedSize] = useState('')
    return ( 
        <div className='px-11 py-5'>
            <Link to='/shop'>
                <BiArrowBack size={24} className='text-current' />
            </Link>
            <div className=" grid grid-cols-2 gap-4">

                <div className='m-4 flex justify-end items-center'>
                    <div className="bg-[#F9F8F8] rounded-lg px-6 pb-6 pt-4 max-w-[400px] max-h-[400px]">
                        <button className='bg-current text-[#EFF6F1]  py-1 px-2 rounded-md text-[10px] my-2'>{productDetails.category}</button>
                        <div className='flex justify-center items-center' >
                            <img src={productDetails.image} alt='item' className='rounded-lg shadow-md max-h-[220px]' />
                        </div>
                    </div> 
                </div>

                <div className='m-4 flex flex-col justify-center space-y-3'>
                    <div className='text-current'>
                        <h2 className='text-lg'>{productDetails.name}</h2>
                        <StarIcon className='w-[50px]' />
                        <p className='text-sm'>{productDetails.amount}</p>
                    </div>
                    
                    <p className='text-[#525C60] text-xs'>{productDetails.description}</p>

                    <div className='flex gap-3'>
                        <div className='text-current text-sm'>
                            <p>Quantity:</p>
                            <NumberPicker 
                                defaultValue={1}
                                min={0}
                                quantity={quantity}
                                onChange={()=>setQuantity(quantity)}
                                className='mt-1 w-[90px]'
                             />
                        </div>
                        <div  className='text-current text-sm'>
                            <p>Size:</p>
                            <Select 
                                options={productSizeOptions}
                                multi={true}
                                className='mt-1 w-[90px] h-[38px]'
                            />
                        </div>
                    </div>

                    <button className='bg-current text-white w-[204px] h-[38px] rounded-[4px] text-sm'>
                        Add To cart
                    </button>
                   
                </div>
            </div>

            <div className='p-10 flex flex-col items-center space-y-3'>
                <h2 className='text-current text-sm'>Product Description</h2>

                <div className='flex gap-3 '>
                    {productDetails.descriptive_images.map((item) =>(
                    <div key={item.id}  >
                        <img src={item.image} alt='descriptive' className='rounded-[10px] h-[200px] w-[300px]'/>
                    </div>
                    ))}
                </div>

                <h2 className='text-current text-sm'>Specifications</h2>
                <div className='text-[#B8B8B8] text-xs'>
                    <p>Color: </p>
                    <p>Weight: </p>
                    <p>Location: </p>
                </div>
                
            </div>

            <div  className='p-10 flex flex-col items-center space-y-3 '>
                <h2>Related Products</h2>

                <div className='flex '>
                    {productDetails.category === productDetails.category ?
                    <Link
                        to={`/single-product/${productDetails.id}`}
                        className='bg-[#F9F8F8] rounded-[12px] p-2 md:p-3 '>
                        <button className='bg-current py-1 px-2 text-[9px] xs:text-[10px] text-white rounded-md'>{productDetails.category}</button>
                        <div className='p-1 sm:p-3'>
                            <img src={productDetails.image} alt="items" className='rounded-lg shadow-lg w-[150px] sm:w-[200px] h-[100px] sm:h-[160px]' />
                        </div>
                        <p className='text-xs text-current mb-2'>{productDetails.name}</p>
                        <div className='flex justify-between border-t pt-2'>
                            <p className='text-[10px] xs:text-xs text-current'>{productDetails.amount}</p>
                            <div className='pl-2'>
                                <StarIcon className='w-[40px] xs:w-[55px]' />
                            </div>
                        </div>
                    </Link>
                    : 
                    <div>No Related Products Available</div>}
                </div>
            </div>
        </div>
     );
}
 
export default ProductInfo;