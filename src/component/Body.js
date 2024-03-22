import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import axios from "axios";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromtedLabel } from "./RestaurantCard";

const Body = () => {

  //Local State Variable - Super powerful Variable
  const [searchText, setSearchText] = useState("");

  //Whenever state variable update, react triggers a reconciliation cycle(re-renders the component)
  console.log("Body Rerendered")

  useEffect(() => {
    fetchData();
  }, [])
  const [listofdata, setListofdata] = useState([])
  const [filterlistofdata, setFilterlistofdata] = useState([])
  const RestaurantCardPromoted = withPromtedLabel(RestaurantCard)
  
  const fetchData = async () => {
    // const res = await axios.get('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING',{

    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //   },

    // })
    // const json =await res.data
    const result = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
    const json = await result.json()
    console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)

    setListofdata(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    setFilterlistofdata(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
  }

  //Conditional Rendering
  // if(listofdata.length === 0)
  // {
  //   return (
  //     <Shimmer />
  //   )
  // }
  console.log(listofdata[4]?.info?.aggregatedDiscountInfoV3?.header)
  const onlineStatus = useOnlineStatus();
  // alert(onlineStatus)
  if (onlineStatus === false) {
    return (
      <h1>
        Looks Like you are offline!! Please check your Internet Connection
      </h1>
    )
  }

  return listofdata.length === 0 ? (<Shimmer />) : (
    <div className="body shadow-md">
      <div className="filter flex justify-center ">
        <div className="search my-4 p-4">
          <input type="text"   placeholder="   Search for restaurant, cuisine or a dish" className="border border-solid border-black rounded-md h-10 w-[600px] mr-[60px]" value={searchText} onChange={(e) => { setSearchText(e.target.value) 
          let arr = listofdata?.filter((result) => result.info.name.toLowerCase().includes(searchText.toLowerCase()))
          console.log(arr)
          setFilterlistofdata(arr)
          }}></input>
          <button className="my-5 px-4 py-2 rounded-md bg-green-100 " onClick={(e) => {
            // e.preventDefault()
            console.log("hii " + searchText)
            console.log(listofdata)
            // console.log(listofdata[0].info.name.toLowerCase().includes(searchText.toLocaleLowerCase()))
            let arr = listofdata?.filter((result) => result.info.name.toLowerCase().includes(searchText.toLowerCase()))
            console.log(arr)
            setFilterlistofdata(arr)
            // const filteredlist = listofdata.filter(
            //   // (rest)=>{rest.info.name.toLowerCase().includes(searchText.toLocaleLowerCase())}
            // )
            // console.log(filteredlist)
            // const filteredlist = listofdata.filter((r) => { r.info.name.toLowerCase().includes(searchText.toLowerCase()) });
            // setListofdata(filteredlist)
          }}>Search</button>
        </div>
        <div className="flex items-center ">
        <button className="p-2.5  bg-gray-100 rounded-lg"
          onClick={() => {
            console.log("usestate called")
            setFilterlistofdata(listofdata.filter((res) => (res.info.avgRating >= 4.5)))
          }

          }
        >
          Top Rated Restaurants</button>
          </div>
      </div>
      <div className="flex flex-wrap justify-center shadow-lg">
        {/* {resList.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))} */}
        {
          filterlistofdata.map((res, index) => <Link to={'restaurants/' + res.info.id}>
            {res?.info?.aggregatedDiscountInfoV3?.header ? <RestaurantCardPromoted key={res.info.id} resData={res.info}/>:
          <RestaurantCard key={res.info.id} resData={res.info} />}</Link>)
        }
      </div>
    </div>
  );
};
export default Body