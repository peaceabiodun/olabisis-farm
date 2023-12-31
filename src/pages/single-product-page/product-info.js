import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { ReactComponent as StarIcon} from 'assets/icons/Star.svg';
import Select from 'react-select';
import {productCard, productSizeOptions } from 'utils/data';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";
import Man1  from "assets/images/man1.jpg";
import { CartContext } from "context/cart-context";
import { BsArrowRight } from "react-icons/bs";


const ProductInfo = ({productDetails}) => {
    const [quantity, setQuantity] = useState("");
    const [selectedSize, setSelectedSize] = useState(null);
    const {addToCart} = useContext(CartContext);
    const navigate = useNavigate();
    const relatedProducts = productCard.filter((product) => product.category === productDetails.category);

    const handleAddToCart = () => {
        navigate("/cart")
        const productToAdd = {
            id: productDetails.id,
            image: productDetails.image,
            amount: productDetails.amount,
            name: productDetails.name,
            quantity:quantity,
            size: selectedSize,
        };
        addToCart(productToAdd);
       
    };

    const handleQuantity =(e)=>{
        setQuantity(e.target.value)
    }
    return ( 
        <div>
        <div className='mx-5 md:mx-11 my-5'>
            <Link to='/shop'>
                <BiArrowBack size={24} className='text-current' />
            </Link>
            <div className="flex flex-col items-center sm:grid sm:grid-cols-2 gap-4">

                <div className='m-4 flex justify-end items-center'>
                    <div className="border rounded-lg px-6 pb-6 pt-3 max-w-[400px] max-h-[400px]">
                        <button className='bg-current text-[#EFF6F1]  py-1 px-2 rounded-md text-[10px] my-2'>{productDetails.category}</button>
                        <div className='flex justify-center items-center' >
                            <img src={productDetails.image} alt='item' className='rounded-lg shadow-md h-[180px] sm:h-[220px]' />
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

                    <div className='flex  gap-3'>
                        <div className='text-current text-sm'>
                            <p>Quantity:</p>
                            <input 
                                type="number"
                                min={1}
                                defaultValue={1}
                                value={quantity}
                                onChange={handleQuantity}
                                className="mt-1 p-2 rounded-[4px] w-[80px] h-[38px] outline-none border border-[#c9cac9]"
                             />
                        </div>
                        <div  className='text-current text-sm'>
                            <p>Size:</p>
                            <Select 
                                options={productSizeOptions} 
                                defaultValue={selectedSize} 
                                onChange={setSelectedSize}   
                                className='mt-1 text-[12px] ' 
                            />
                        </div>
                    </div>

                    <button 
                        disabled ={!selectedSize || !quantity}
                        onClick={ handleAddToCart}
                        className={` w-[210px] h-[38px] rounded-[4px] text-sm ${!selectedSize || !quantity ? 'bg-[#c2d8e2] cursor-not-allowed': 'bg-current text-white'} `}>
                        Add To cart
                    </button>
                   
                </div>
            </div>

            <div className='py-5 sm:py-10 flex flex-col items-center space-y-3 '>
                <h2 className='text-current text-sm'>Product Description</h2>

                <Carousel showArrows={false} showThumbs={false} className=" max-w-[300px] h-[300px] rounded-[10px]" >
                    {productDetails.descriptive_images.map((item) =>(
                    <div key={item.id} >
                        <img src={item.image} alt='descriptive' className='rounded-[10px] w-[300px] h-[220px] ' />
                    </div>
                    ))}
                </Carousel>

                <h2 className='text-current text-sm '>Specifications</h2>
                <div className='text-[#B8B8B8] text-xs'>
                    <p>Color: </p>
                    <p>Weight: </p>
                    <p>Special features: </p>
                    <p>Location: </p>
                </div>
                
            </div>

            <div className="py-5 sm:py-10 flex flex-col items-center ">
                <div className="text-current flex ">
                    <h2  className="text-current text-sm text-center mb-3">Related Products</h2>
                    <BsArrowRight className="ml-2 md:hidden "/>
                </div>
                <div id="scroll" className='overflow-x-auto scroll-smooth flex gap-2 w-full mdLg:justify-center' >
                
                    {relatedProducts.length > 0 ? (
                        relatedProducts.map((product) => (
                            <Link
                                to={`/single-product/${product.id}`}
                                className='border rounded-[12px] p-2 md:p-3 min-w-[265px] '>
                                <button className='bg-current py-1 px-2 text-[9px] xs:text-[10px] text-white rounded-md'>{product.category}</button>
                                <div className='p-1 sm:p-3 flex justify-center'>
                                    <img src={product.image} alt="items" className='rounded-lg shadow-lg w-[200px] h-[160px]' />
                                </div>
                                <p className='text-xs text-current mb-2'>{product.name}</p>
                                <div className='flex justify-between border-t pt-2'>
                                    <p className='text-[10px] xs:text-xs text-current'>{product.amount}</p>
                                    <div className='pl-2'>
                                        <StarIcon className='w-[40px] xs:w-[55px]' />
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="text-sm text-current text-center">No Related Products Available</div>
                    )}
                
                </div>
            </div>

            <div className='py-5 sm:py-10 space-y-3 '>
                <h2 className="text-current text-sm">Customer Reviews (0)</h2>
                <div className="text-xs">
                    <div className="flex gap-2 items-center">
                        <img src={Man1} alt="/" className="w-9 h-9 rounded-full" />
                        <p className="text-current ">Ola Davis</p>
                    </div>
                    <StarIcon className="my-1" />
                    <p className=" text-current">03/05/2023</p>
                    <div className="flex my-1 gap-1">
                        <p className="text-current">Size:</p>
                        <p className="text-[#8a999e]">Medium</p>
                    </div>

                    <div className="flex gap-1">
                        <p className="text-current">Purchase:</p>
                        <p className="text-[#8a999e]">Verified</p>
                    </div>
                    <p className="text-[#8a999e] my-1 font-[350]">I bought the medium one, it was clean, fresh and bigger than what i expected </p>
                </div>
            </div>

        </div>

        </div>
     );
}
 
export default ProductInfo;