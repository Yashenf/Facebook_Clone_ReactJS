import React from 'react'
import "./NewPost.css"
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SendIcon from '@mui/icons-material/Send';
const NewPost = () => {
  return (
    <div className='newPostContainer'>
        <div className="writePost">
            <div className="profilePic">
            <img src="https://1fid.com/wp-content/uploads/2022/06/girl-profile-picture-1024x1024.jpg" alt="profile picture"  className='profile-picture'/>
            </div>
            <div className="postText">
                <input type="text"  placeholder='Whats Your mind in , Lio ?'/>
            </div>
        </div>
        <div className="divider"></div>
        <div className="postOptions">
          <div className="optionInner">

            <div className="option">
              <div className="option-image">
                <AddToPhotosIcon className='icon photo-icon'/>
              </div>
              <div className="option-title">photos/videos</div>
            </div>

            <div className="option">
              <div className="option-image">
                <GroupAddIcon className='icon tag-icon'/>
              </div>
              <div className="option-title">tag friends</div>
            </div>

            <div className="option">
              <div className="option-image">
                <EmojiEmotionsIcon className='icon feeling-icon'/>
              </div>
              <div className="option-title">feeling</div>
            </div>

            <div className="sent-option">
                <SendIcon className='send-icon'/>
            </div>

          </div>
        </div>
    </div>
  )
}

export default NewPost