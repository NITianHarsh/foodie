import React from 'react'
import FoodItem from './FoodItem'

function FoodSection({foodName}) {
  return (
    <div className='text-white px-10'>
      <h1 className='text-2xl text-gray-400 font-medium pt-3 px-4'>{foodName}</h1>
      <hr className="border-t-3 border-gray-500 my-1" />
      <div id='foodItem' className='mt-3 mx-3 flex gap-3 overflow-x-scroll scrollbar-hide'>
        <FoodItem itemName="Chicken Fried"></FoodItem>
      </div>      
    </div>
  )
}

export default FoodSection