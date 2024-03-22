import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({ resData = {} }) => {


  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } = resData

  return (
    <div className="m-4 p-4 w-[300px] min-h-[459px] rounded-lg bg-gray-50 hover:bg-gray-200 shadow-md hover:scale-x-95 hover:scale-y-95"
    // style={{ backgroundColor: "#f0f0f0" }}
    >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL
          +
          cloudinaryImageId
        }
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 className="py-1 text-lg">{cuisines.join(", ")}</h4>
      <h4 className="py-1 text-lg ">{avgRating} stars</h4>
      <h4 className="py-1 text-lg">{costForTwo}</h4>
      <h4 className="py-1 text-lg">{sla?.deliveryTime} minutes</h4>
    </div>
  );
};

export const withPromtedLabel = (RestaurantCard)=>{
  return(props)=>{
    console.log(props.resData.aggregatedDiscountInfoV3.header + props.resData.aggregatedDiscountInfoV3.subHeader)
    return(
      <div className="relative ">
        <label className="absolute top-[35%] left-[29%] text-white bg-black rounded-md font-bold ">{props.resData.aggregatedDiscountInfoV3.header + props.resData.aggregatedDiscountInfoV3.subHeader}</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}
export default RestaurantCard