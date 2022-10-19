import { Button } from '@chakra-ui/react'
import { CartItem, ProductItem } from '@my-webshop/shared'
import axios from 'axios'
import React from 'react'
import {useParams} from 'react-router-dom'

export default function BuyButton(props: {product: ProductItem}) {
  const [cartItems, setCartItems] = React.useState<CartItem[]>([])
  const [error, setError] = React.useState<string | undefined>()

  const { id } = useParams<{ id: string }>();

  const cartURL: string = `${process.env.REACT_APP_BASE_URL}/order/${id}` || `http://localhost:3002/order/${id}`

  const handleAddToCart = async (product: ProductItem) : Promise<void> => {
    console.log(`adding ${product.title} to cart`);
    
/*      const cartItem: CartItem = { 
      user: '634a838cee3d87d39de76e34',
      products: [{productId: product._id || '', title: product.title, price: product.price, quantity: 1}],
      bill: 0,
      isCheckedOut: false
    }
 */
   /*  const payload = {...product} */
    const payload = [{productId: product._id || '', title: product.title, price: product.price, quantity: 1}]


    try {
      await axios.post(cartURL, payload)
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
