import { ReactComponent as StarIcon} from 'assets/icons/Star.svg';
import "react-widgets/styles.css";
import NumberPicker from "react-widgets/NumberPicker";
import Select from 'react-dropdown-select';
import { productSizeOptions } from 'utils/data';
import { useState } from 'react';


const ProductInfo = ({productDetails}) => {
    const [selectedSize, setSelectedSize] = useState([])
    return ( 
        <div className='p-10'>
            <div className=" grid grid-cols-2">

                <div className='m-4 flex justify-center items-center'>
                    <div className="bg-[#EFF6F1] rounded-lg px-6 pb-6 pt-4 max-w-[400px] max-h-[400px]">
                        <button className='bg-current text-[#EFF6F1]  py-1 px-2 rounded-md text-[10px] my-2'>{productDetails.category}</button>
                        <div className='flex justify-center items-center' >
                            <img src={productDetails.image} alt='item' className='rounded-lg shadow-md' />
                        </div>
                    </div> 
                </div>

                <div className='m-4 flex flex-col justify-center'>
                    <h2>{productDetails.name}</h2>
                    <StarIcon />
                    <p>{productDetails.amount}</p>
                    <p>{productDetails.description}</p>
                    <div className='flex'>
                        <div>
                            <p>Quantity:</p>
                            <NumberPicker />
                        </div>
                        <div>
                            <p>Size:</p>
                            <Select 
                                options={productSizeOptions}
                                onChange={(values) => this.setSelectedSize(values)}
                                values={selectedSize}
                                multi={true}
                            />
                        </div>
                    </div>

                    <button>
                        Add To cart
                    </button>
                   
                </div>
            </div>
        </div>
     );
}
 
export default ProductInfo;