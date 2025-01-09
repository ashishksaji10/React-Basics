import { CDN_URL } from "../utilies/constants"


const Restaurantcard = ({ resData }) => {
    const { name, cuisines, areaName, avgRating, cloudinaryImageId } = resData.card.card.info || {}
    return (
        <div className="res-card">
            <img 
            className="res-logo"
            alt="res-logo"
            src= {CDN_URL + cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{avgRating + ' Stars'}</h3> 
            <h4>{resData.card.card.info.sla.slaString}</h4>
            <h3>{cuisines.join(', ')}</h3>
            <h3>{areaName}</h3>
        </div>
    )
}

export default Restaurantcard