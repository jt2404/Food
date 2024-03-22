import React, { useEffect, useState } from 'react'
import { MENU_API } from './constants';

const useRestaurantMenu = (resId) => {
    console.log(resId)

    const[resInfo,setResInfo] = useState(null);

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async() =>{
        const data = await fetch(MENU_API+resId)
        // console.log(data)
        const info =await data.json();
        // console.log(info.data)
        // console.log(info)
        setResInfo(info.data)
    }
    return [resInfo,setResInfo];
}

export default useRestaurantMenu
