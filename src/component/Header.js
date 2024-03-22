import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {

  console.log("header called")
  
  console.log("Rendered")
  const[btnName,setBtnName] = useState("Login");
 let onlineStatus= useOnlineStatus()
  // alert(onlineStatus)

  useEffect(()=>{
    console.log("called")
  },[btnName])
  
  
    return (
      <div className="flex justify-between bg-pink-100 shadow-lg">
        <div className="logo-container">
          <img
            className="w-40"
            src={LOGO_URL}
          />
        </div>
        <div className="flex items-center ">
          <ul className="flex m-4 p-4 ">
            <li className="m-2 ">Online Status: {onlineStatus?"✅":"❌"}</li>
            <li className="m-2 "><Link to="/">Home</Link></li>
            <li className="m-2"><a href="/about">About Us</a></li>
            <li className="m-2"><Link to="/contact">Contact Us</Link></li>
            <li className="m-2">Cart</li>
            <li className="m-2"><Link to="/grocery">Grocery</Link></li>
            <button className="login" onClick={()=>{btnName==="Login"?setBtnName("Logout"):setBtnName("Login")}}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };
  export default Header