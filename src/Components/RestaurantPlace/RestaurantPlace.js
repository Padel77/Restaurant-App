import React, {useEffect} from 'react';
import './RestaurantPlace.css';
// import axiosConfig  from "../../axiosConfig/axiosConfig";
import axios from "axios";
function RestaurantPlace() {
    const [restaurant, setRestaurant] = React.useState([]);

    axios.get('https://nextjs-orpin-omega-98.vercel.app/api/restaurants')
        .then(response => {
            // Handle success.
            console.log('Data: ', response.data);
            setRestaurant(response.data);
        })
        .catch(error => {
            // Handle any errors that occurred during the request
            console.error('Error fetching data:', error);
            // Handle the error appropriately, such as showing an error message to the user
        });

// Make a GET request to the API with the configured headers
    return (
        <>
            <div>
                <h1>RestaurantPlace</h1>
                {restaurant.map((item, index) => (
                    <div key={index}>
                        <h1>{item.restaurant_name}</h1>
                        <h1>{item.state}</h1>
                    </div>
                ))}
            </div>
        </>
    );
}
export default RestaurantPlace