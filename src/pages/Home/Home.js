import React from 'react'
import AdsPane from '../../components/adsPane/adsPane';
import NavBar from '../../components/navigation/NavBar';
import OptionPane from '../../components/optionPane/optionPane';
import PostPane from '../../components/postPane/postPane';
import "./home.css"
const Home = () => {
  return ( 
    <div className='home'>
      <NavBar/>
      <div className="context">
        <OptionPane/>
        <PostPane/>
        <AdsPane/>
      </div>
    </div>
  )
}

export default Home;