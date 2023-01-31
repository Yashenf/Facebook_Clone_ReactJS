import React from 'react'
import "./optionPane.css"

import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import GroupsIcon from '@mui/icons-material/Groups';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import FlagIcon from '@mui/icons-material/Flag';
import EventIcon from '@mui/icons-material/Event';
import BuildIcon from '@mui/icons-material/Build';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
const OptionPane = () => {
  return (
    <div className='option-pane'>
      <div className="option-pane-outer">
        <ul className="option-list">
          <li className="option-outer">
            <MarkUnreadChatAltIcon/>
            <span className="option-text">Messages</span>
          </li>

          <li className="option-outer">
            <GroupsIcon/>
            <span className="option-text">Group</span>
          </li>

          <li className="option-outer">
            <RssFeedIcon/>
            <span className="option-text">News</span>
          </li>

          <li className="option-outer">
            <FlagIcon/>
            <span className="option-text">Pages</span>
          </li>

          <li className="option-outer">
            <EventIcon/>
            <span className="option-text">Events</span>
          </li>

          <li className="option-outer">
            <BuildIcon/>
            <span className="option-text">Build</span>
          </li>

          <li className="option-outer">
            <WorkOutlineIcon/>
            <span className="option-text">Jobs</span>
          </li>

          <li className="option-outer">
            <AddShoppingCartSharpIcon/>
            <span className="option-text">Shop</span>
          </li>
        </ul>
      </div>
      <div className="derevid-pane"></div>
      <div className="fb-pages">
        <div className="fb-page-box">
          <img src="https://media.gq-magazine.co.uk/photos/5d1397ac003d75f0b6ae6230/master/w_1280,h_1920,c_limit/Justin-Bieber-2012-GQ-28Feb17_getty_b.jpg" alt="page" className='fb-page-icon' />
          <span>Justin Bieber</span>
        </div>

        <div className="fb-page-box">
          <img src="https://api.time.com/wp-content/uploads/2020/09/time-100-Selena-Gomez.jpg" alt="page" className='fb-page-icon' />
          <span>Selena gomez</span>
        </div>

        <div className="fb-page-box">
          <img src="https://cdn.britannica.com/13/235013-050-18993EB9/Chancellor-of-the-Exchequer-Rishi-Sunak-2022.jpg" alt="page" className='fb-page-icon' />
          <span>Rishi Sunak</span>
        </div>

        <div className="fb-page-box">
          <img src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_2/IMAGE_1662174296.webp" alt="page" className='fb-page-icon' />
          <span>Gotabaya Rajapakse</span>
        </div>

        <div className="fb-page-box">
          <img src="https://media.gq-magazine.co.uk/photos/5d1397ac003d75f0b6ae6230/master/w_1280,h_1920,c_limit/Justin-Bieber-2012-GQ-28Feb17_getty_b.jpg" alt="page" className='fb-page-icon' />
          <span>Justin Bieber</span>
        </div>

        <div className="fb-page-box">
          <img src="https://api.time.com/wp-content/uploads/2020/09/time-100-Selena-Gomez.jpg" alt="page" className='fb-page-icon' />
          <span>Selena gomez</span>
        </div>

        <div className="fb-page-box">
          <img src="https://cdn.britannica.com/13/235013-050-18993EB9/Chancellor-of-the-Exchequer-Rishi-Sunak-2022.jpg" alt="page" className='fb-page-icon' />
          <span>Rishi Sunak</span>
        </div>

        <div className="fb-page-box">
          <img src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_2/IMAGE_1662174296.webp" alt="page" className='fb-page-icon' />
          <span>Gotabaya Rajapakse</span>
        </div>

        <div className="fb-page-box">
          <img src="https://api.time.com/wp-content/uploads/2020/09/time-100-Selena-Gomez.jpg" alt="page" className='fb-page-icon' />
          <span>Selena gomez</span>
        </div>

        <div className="fb-page-box">
          <img src="https://cdn.britannica.com/13/235013-050-18993EB9/Chancellor-of-the-Exchequer-Rishi-Sunak-2022.jpg" alt="page" className='fb-page-icon' />
          <span>Rishi Sunak</span>
        </div>

        <div className="fb-page-box">
          <img src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_2/IMAGE_1662174296.webp" alt="page" className='fb-page-icon' />
          <span>Gotabaya Rajapakse</span>
        </div>

        <div className="fb-page-box">
          <img src="https://media.gq-magazine.co.uk/photos/5d1397ac003d75f0b6ae6230/master/w_1280,h_1920,c_limit/Justin-Bieber-2012-GQ-28Feb17_getty_b.jpg" alt="page" className='fb-page-icon' />
          <span>Justin Bieber</span>
        </div>

        <div className="fb-page-box">
          <img src="https://api.time.com/wp-content/uploads/2020/09/time-100-Selena-Gomez.jpg" alt="page" className='fb-page-icon' />
          <span>Selena gomez</span>
        </div>

        <div className="fb-page-box">
          <img src="https://cdn.britannica.com/13/235013-050-18993EB9/Chancellor-of-the-Exchequer-Rishi-Sunak-2022.jpg" alt="page" className='fb-page-icon' />
          <span>Rishi Sunak</span>
        </div>

        <div className="fb-page-box">
          <img src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_2/IMAGE_1662174296.webp" alt="page" className='fb-page-icon' />
          <span>Gotabaya Rajapakse</span>
        </div>
      </div>

    </div>
  )
}

export default OptionPane