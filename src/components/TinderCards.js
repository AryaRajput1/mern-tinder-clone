import React from 'react'
import TinderCard from 'react-tinder-card'
import './css/tindercard.css'

function TinderCards() {
    const swipped=(dir)=>{
        console.log(dir);
    }
    const cardLeft=(name)=>{
console.log(name+'left');
    }
    const data=[{
        name:'Salman',
        url:'https://upload.wikimedia.org/wikipedia/commons/8/86/Salman_Khan_at_Renault_Star_Guild_Awards.jpg'
    },{
        name:'Akshay',
        url:'https://timesofindia.indiatimes.com/thumb/msid-72168734,width-800,height-600,resizemode-4/72168734.jpg?imglength=277599'
    },{
        name:'Tiger',
        url:'https://filmfare.wwmindia.com/content/2020/aug/tigershroff11598695436.jpg'
    },{
        name:'Hritik',
        url:'https://static.toiimg.com/photo/msid-71756742/71756742.jpg?134917'
    }]
    return (
        <div className='tindercard'>
{
    data.map(a=>{
       return <TinderCard key={a.name} onSwipe={swipped} onCardLeftScreen={()=>cardLeft(a.name)} preventSwipe={['up','down']}><div className='card' style={{backgroundImage:`url(${a.url})`}}><h4>{a.name}</h4></div></TinderCard>
    })
}
            
        </div>
    )
}

export default TinderCards
