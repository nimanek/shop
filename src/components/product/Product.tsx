import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from '../container/Container'
import Button from '../button/Button'
import { getProduct } from '../../services/api'
import { IProduct } from '../../types/server'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'

function Product() {
    const param = useParams<{ id: string }>();
    const [product, setProduct] = useState<IProduct>();

    const { handleIncreaseProductQty, handleDecreaseProductQty, getProductQty, handleRemoveProduct, cartItems } = useContext(ShoppingCartContext)

    useEffect(() => {
        getProduct(param.id as string).then(data => {
            setProduct(data)
        });
    }, [])



    return (
        <div>
            <Container>
                <div className='h-96 shadow mt-4 grid grid-cols-12'>
                    <div className='bg-blue-200 col-span-2 p-4'>
                        <img className='roudned' src={product?.image} alt="" />


                        {
                            getProductQty(parseInt(param.id as string)) === 0 ?
                                <Button onClick={() => handleIncreaseProductQty(parseInt(param.id as string))} className='rounded p-2 mt-2 w-full' variant='primary'>
                                    Add to cart
                                </Button>
                                :
                                <>
                                    <div className='grid grid-cols-3'>
                                        <Button onClick={() => handleIncreaseProductQty(parseInt(param.id as string))} className='rounded mt-2 w-full' variant='primary'>
                                            +
                                        </Button>

                                        <span className='flex justify-center items-center text-xl'>{getProductQty(parseInt(param.id as string))}</span>

                                        <Button onClick={() => handleDecreaseProductQty(parseInt(param.id as string))} className='rounded mt-2 w-full' variant='primary'>
                                            -
                                        </Button>
                                    </div>

                                    <Button onClick={() => handleRemoveProduct(parseInt(param.id as string))} className='rounded p-2 mt-2 w-full' variant='danger'>
                                        Remove
                                    </Button>
                                </>

                        }



                    </div>



                    <div className=' col-span-10 p-4'>
                        <h1 className='font-semibold text-2xl'>{product?.title}</h1>
                        <div>
                            <p className='font-semibold text-xl my-2'>
                                {product?.price}$
                            </p>
                            <p className='mt-10'>
                                {product?.description}
                            </p>
                        </div>
                    </div>


                </div>
            </Container >
        </div >
    )
}

export default Product
