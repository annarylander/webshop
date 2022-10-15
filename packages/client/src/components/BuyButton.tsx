import { Button } from '@chakra-ui/react'
import { CartItem, ProductItem } from '@my-webshop/shared'
import axios from 'axios'
import React from 'react'

export default function BuyButton(props: {product: ProductItem}) {
  const [cartItems, setCartItems] = React.useState<CartItem[]>([])
  const [error, setError] = React.useState<string | undefined>()

  const cartURL: string = `${process.env.REACT_APP_BASE_URL}/order` || 'http://localhost:3002/order'

  const handleAddToCart = async (product: ProductItem) : Promise<void> => {
    console.log(`adding ${product.title} to cart`);
    
    const cartItem: CartItem = { 
      product: product._id || '',
      user: '634a838cee3d87d39de76e34',
      totalPrice: product.price,
      quantity: 1,
      status: 'cart'
    }
    try {
      await axios.post(cartURL, cartItem)
    } catch (error) {
      setError('Something went wrong adding to cart')
    }
  };

  return (
    <div>
      <Button onClick={(e) => handleAddToCart(props.product)}>Add to cart</Button>
    </div>
  )
}
