import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetchData = () => {
    const [posts, setPosts] = useState([]);
    // const url = "https://jsonplaceholder.typicode.com/posts"
    // const url = "http://localhost:5000/webportfolio-6f985/us-central1/app/api/v1/posts"

    async function fetchData() {
        // You can await here
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

            console.log("response")
            setPosts(response.data)
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        fetchData();
    }, []); // Or [] if effect doesn't need props or state

    return [posts]
}

export default useFetchData

