import Restaurantcard from "./Restaurantcard";
import { objList } from "../utilies/mockData"
import { useState } from "react";

const Body = () => {

    const [resList, setResList] = useState(objList)

    return (
        <div className="body">
            <div className="filter">
                <button 
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = resList.filter((res) => res.card.card.info.avgRating > 4.5);
                        setResList(filteredList)
                    }}>
                    Top Rated Restaurant
                </button>
            </div>
            <div className="search">Search</div>
            <div className="res-container">
            {resList.map((restaurant) => (
              <Restaurantcard key={restaurant.card.card.info.id} resData={restaurant}/> 
            ))}
            </div>
        </div>
    );
};

export default Body