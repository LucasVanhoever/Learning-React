import axios from 'axios';
import React from 'react'

const DataGrabButton = () => {

    const fetchMessage = async () => 
    {
        try {
          const response = await axios.get('http://localhost:5030/api/BasicTest/message');
          console.log('Data from the backend:', response.data);
        } catch (error) {
          console.error('Error fetching message:', error);
        }
    };


    return (
        <button className="btn btn-primary" onClick={fetchMessage}>
        Get message from backend
        </button>
    )
}

export default DataGrabButton