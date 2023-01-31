import React from 'react'
import "./MainAddBanner.css"
const MainAddBanner = () => {
  return (
    <div className='main-add-banner'>
        <div className="sponserd-text">
            <span>Sponsored</span>
        </div>

        <div className="main-img">
            <img src="https://4.bp.blogspot.com/-bKMN7c-niPY/XMqUfI7X7hI/AAAAAAAABT4/5Nk9c1rHZYQVQkLLUHHmBSq9UkxqiQTpwCLcBGAs/s400/Gajaman%2BMovie%2BPoster.jpg" alt="" className='main-img-container'/>
                <div className="img-desc-box">
                    <span className='image-desc'>
                Sri Lanka's first 3D movie "Gajaman" premiere was held on 17th January in PVR Cinemas One Galle Face Colombo
                </span>

                <span className='image-desc'>
                The Gajaman, gets a new job from the Magodisthuma, the local politician whom he works for.
                But things get complicated when he sees the daughter of his boss. Will Gajaman control the consequences?
                </span>
                </div>
        </div>

        <div className="add-info">
            <span>for more info <span className='desc-link'>www.studio101.com</span></span>
        </div>
    </div>
  )
}

export default MainAddBanner