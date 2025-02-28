import React, { useContext, useEffect, useState } from 'react'
import Container from '../../components/container/Container'
import CartItem from '../../components/cartItem/CartItem'
import Button from '../../components/button/Button'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'



function Cart() {


  const { cartItems } = useContext(ShoppingCartContext)

  


  return (
    <div>
      <Container>
        <div>
          {cartItems.map(item => (
            <CartItem {...item} />
          ))}


        </div>

        <div className='bg-gray-200 p-6 rounded'>
          <p>total price: 200000</p>
          <p>dicount price: 200000</p>
          <p>latest price: 200000</p>
        </div>

        <Button className='mt-2 rounded-sm p-1' variant='success'>Check out</Button>
      </Container>
    </div>
  )
}

export default Cart
