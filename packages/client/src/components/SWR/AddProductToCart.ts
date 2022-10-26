import React, {useState} from 'react'
import useSWR from 'swr'
import axios from 'axios'
import { ProductItem } from '@my-webshop/shared';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
const token = localStorage.getItem("jwt")

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

const addProduct = async (product: ProductItem) => {
    let response = await axios.post('/order/addtoproducts', product, {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
    return response.data
 }

 const useProducts = () => { 
    const {data, error, mutate} = useSWR('/order/getproducts', fetcher)
    return {
        products: data,
        isLoading: !data,
        isError: !!error,
        mutate
    }
 }

 export {useProducts, addProduct}