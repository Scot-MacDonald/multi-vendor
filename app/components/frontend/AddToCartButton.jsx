"use client"

import React from 'react'
import { ShoppingCart } from 'lucide-react'
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { addToCart } from '@/redux/slices/cartSlice';

export default function AddToCartButton({product}) {
    const dispatch = useDispatch();
    function handleAddToCart() {
      dispatch(addToCart(product));
      toast.success("item added successfully");
    }
    return(
        <div>
            <button onClick={() => handleAddToCart()} className="flex items-center space-x-2">
              <ShoppingCart />
              <span>Add to cart</span>
            </button>
        </div>
    )
}