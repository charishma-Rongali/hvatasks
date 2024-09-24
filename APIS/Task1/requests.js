// By default, JavaScript doesn't provide a get method for making HTTP requests, but Axios does.
// Steps:
// 1>npm install axios 
// 2>import axios from 'axios';
//No need to parse JSON-axios automatically parses the response data for you
//Axios stores the data in the 'data' property

import axios from 'axios';
const fun= async ()=>{
    try{
        const response=await axios.get(' https://jsonplaceholder.typicode.com/posts');
        console.log(response.data);
    }
    catch(err){
        console.log(err);
    }
}

fun();