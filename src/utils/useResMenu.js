import React, { useEffect, useState } from 'react'
import { MENU_API } from './constants'

const useResMenu = (resId) => {
    const[res,setRes]=useState(null)
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData = async() =>{
        const data = await fetch(MENU_API+resId);
        const info = await data.json();
        // console.log(info.data) 
        setRes(info.data)
    }
    return res;
}

export default useResMenu
