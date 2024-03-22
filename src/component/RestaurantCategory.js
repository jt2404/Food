import React from 'react'
import ItemList from './ItemList'
import { FaAngleDown } from "react-icons/fa6";

const RestaurantCategory = ({data}) => {
    // console.log(data)
  return (
    <div className='w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4'>
      {/* {   Header } */}
      <div className=' flex justify-between'>
        <span className='font-bold text-lg'>{data.title} ({data.itemCards.length})</span>
        <span><FaAngleDown /></span>
      </div>
      <ItemList items={data.itemCards} />
    </div>
  )
}

export default RestaurantCategory
