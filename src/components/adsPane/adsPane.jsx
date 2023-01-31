import React from 'react'
import MainAddBanner from '../mainAddBaner/MainAddBanner'
import SubAdd from '../subAdd/SubAdd'
import "./adsPane.css"
const AdsPane = () => {
  return (
    <div className='ads-pane'>
      <MainAddBanner/>
      <SubAdd/>
      <SubAdd/>
      <SubAdd/>
      <SubAdd/>
    </div>
  )
}

export default AdsPane