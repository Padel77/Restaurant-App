import React, {useEffect} from 'react';
import './RestaurantPlace.css';
// import axiosConfig  from "../../axiosConfig/axiosConfig";
import axios from "axios";
function RestaurantPlace() {
// const [restaurant, setRestaurant] = React.useState([]);

    axios.get('https://nextjs-orpin-omega-98.vercel.app/api/restaurants')
        .then(response => {
            // Handle the successful response
            console.log('Response:', response.data); // Access the response data
            // Perform operations with the response data here
        })
        .catch(error => {
            // Handle any errors that occurred during the request
            console.error('Error fetching data:', error);
            // Handle the error appropriately, such as showing an error message to the user
        });

// Make a GET request to the API with the configured headers


    return (
        <div>
            <h1>RestaurantPlace</h1>

        </div>
    );
}

export default RestaurantPlace;