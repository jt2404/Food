import { useEffect, useState } from "react";
 const useOnlineStatus = () =>{
    const [onlineStatus,setOnlineStatus] = useState(true);

    useEffect(()=>{
        console.log("on-off status called")
        window.addEventListener('offline',()=>{
            console.log("off status called")
            setOnlineStatus(false);
            alert("on"+onlineStatus)
        });
        window.addEventListener('online',()=>{
            console.log("on status called")
            setOnlineStatus(true);
            alert("off"+onlineStatus)
        })
    },[])
    return onlineStatus;
 }
 export default useOnlineStatus;