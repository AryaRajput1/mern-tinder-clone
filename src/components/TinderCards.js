import React ,{useState,useEffect}from 'react'
import TinderCard from 'react-tinder-card'
import './css/tindercard.css'
import axios from 'axios'
function TinderCards() {
    const [data, setdata] = useState(null)
   
   useEffect(() => {
//    async function fetchdata(){ 
//       const xios= axios.create({
//            baseURL:'http://localhost:8001'
//        });
       axios.get('http://localhost:8001/tinder/card').then(data=>{
           setdata(data.data);
       })
       
       
   }, [])
   
    const swipped=(dir)=>{
        console.log(dir);
    }
    const cardLeft=(name)=>{
console.log(name+'left');
    }
    
    return (
        <div className='tindercard'>
{ !data?<h1>loading</h1>:
    data.map(a=>{
       return <TinderCard key={a.name} onSwipe={swipped} onCardLeftScreen={()=>cardLeft(a.name)} preventSwipe={['up','down']}><div className='card' style={{backgroundImage:`url(${a.url})`}}><h4>{a.name}</h4></div></TinderCard>
    })
}
            
        </div>
    )
}

export default TinderCards
