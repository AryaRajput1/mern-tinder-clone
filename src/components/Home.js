import React from 'react'
import PersonIcon from '@material-ui/icons/Person'
import ForumIcon from '@material-ui/icons/Forum'
import './css/home.css'
import TinderCards from './TinderCards'
import ReplayIcon from '@material-ui/icons/Replay';
import ClearIcon from '@material-ui/icons/Clear';
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { IconButton } from '@material-ui/core'

function Home() {
    return (
        <div className='Home'>
     <div className='header'>
     <IconButton> <PersonIcon/></IconButton>
        <img src='https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/tinder.png'/>
         
        <IconButton><ForumIcon/></IconButton>
         </div> 
         <div className='main'>
             <TinderCards/>
             </div>   
             <div className='footer'>
            <IconButton><ReplayIcon/></IconButton>
            <IconButton><ClearIcon/></IconButton>
            <IconButton><StarIcon/></IconButton>
            <IconButton><FavoriteIcon/></IconButton>
            <IconButton><FlashOnIcon/></IconButton>

                 </div>    
        </div>
    )
}

export default Home
