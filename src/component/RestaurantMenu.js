import React from 'react'
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
// import useRestaurantMenu from '../utils/useRestaurantMenu';
import useResMenu from '../utils/useResMenu';
import { MENU_API } from '../utils/constants';
import RestaurantCategory from './RestaurantCategory';


const RestaurantMenu = () => {

  // const [resInfo, setResInfo] = useState(null)
  const { resId } = useParams();
  // const [listofMenu, setListofMenu] = useRestaurantMenu(resId)
  // console.log(listofMenu)
  const listofMenu = useResMenu(resId)
  const [activeIndex, setActiveIndex] = useState(0);
  
  // console.log(listofMenu?.cards[0].card.card.info.name)

  // console.log("in if")
  // listofMenu?.cards[0]?.card.card.info
  // console.log(listofMenu?.cards[0]);


  //  console.log(item)l?.cards[0]?
  // useEffect(() => {
  //   fetchMenu();
  // }, [])

  //  console.log(listofMenu)

  // const fetchMenu = async () => {

  //   const result = await fetch(MENU_API+resId)
  //   const json = await result.json()
  //   // console.log(json.data)

  //   setListofMenu(json.data)

  // }0
  if (listofMenu === null) return <Shimmer />
  // const {name} =listofMenu?.cards[0]?.card?.card?.info
  console.log(listofMenu)

  const { name, cuisines, costForTwoMessage } = listofMenu?.cards[2]?.card?.card?.info;
  console.log(listofMenu)
  const item = listofMenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards
  console.log(item)
  const categories = listofMenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
    (c) => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  )
  // console.log(categories)
  
  return (

    // <>Hii</>
    <div className='text-center'>

      {/* <label class="inline-flex items-center cursor-pointer my-3">
      <span class="mx-2 ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Veg only</span>
        <input type="checkbox" value="" class="sr-only peer" />
          <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          
      </label> */}

      <h1 className='font-bold my-6 text-2xl'>{name}</h1>
      <p className='font-bold text-lg'>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* {item.map((l) =>
        <li>{l.card.info.name} -{" Rs."} {l?.card?.info?.price / 100}
        </li>)} */}

        { /* categories accordions */
            categories.map((category,index)=>(
              <RestaurantCategory data={category?.card?.card} isActive={activeIndex === index  ? true : false} onShow={() => {setActiveIndex(index)} } />
            ))
        }
    </div>
  )
}

export default RestaurantMenu

