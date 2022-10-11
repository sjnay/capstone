import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'




function App() {
const [feed,setFeed]=useState(null)

const connectDB = ()=>{

  fetch("http://localhost:8000/api/posts/?format=json")
  .then((res)=>(res.json()))
  .then((json)=>{
    setFeed(json)
    console.log(json)
  })
}

useEffect(connectDB,[])

console.log(feed[0].place_name)




  return (
    <div className="App">
   <p>{feed[0].place_name}</p>
   <img src={feed[0].food_img} alt={feed[0].id}></img>
    </div>
  );
}


export default App;
