import React from 'react'
import "./Post.css"
import PublicIcon from '@mui/icons-material/Public';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';
const Post = () => {
  return (
    <div className='post-outer'>
        <div className="post-inner">
            <div className="top-area">

                <div className="profile-pic">
                    <div className="pic-container">
                        <img src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=" alt="profile" className='profile-image' />
                    </div>
                </div>
                <div className="post-info">
                    <div className="profile-name"><span className='name'>Yashen Fernando</span></div>
                    <div className="time-and-icon">
                        <div className="time"><span className='time-span'>2h ago</span></div>
                        <div className="icon">
                            <PublicIcon className='world-icon' htmlColor="#7f8fa6"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="center-area">
                <div className="post-content">
                    <div className="caption">
                        <span className='caption-text'>
                        Your hard work and perseverance have paid off. Congratulations!
                        </span>
                    </div>
                    <div className="image">
                        <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/888C/production/_128065943_gettyimages-1450389057.jpg" alt="" className='post-img' />
                    </div>
                </div>
            </div>


            <div className="comment-area">
                <div className="latest-reactions">
                    <div className="reacttion-icon">
                        <FavoriteIcon htmlColor='#e84118'/>
                    </div>
                    <div className="reacttion-icon">
                        <ThumbUpIcon htmlColor='#4834d4'/>
                    </div>
                    <div className="reacttion-icon">
                        <EmojiEmotionsIcon htmlColor='#f9ca24'/>
                    </div>
                    <div className="reacttion-count">100K</div>
                </div>
                <div className="comments">
                    <span>45K Comments</span>
                    <span>65K Shears</span>
                </div>
            </div>
            <div className="option-area">
                <div className="rect-types">
                    <div className="react-type">
                        <div className="react-icon">
                        <ThumbUpIcon/>
                        </div>
                        <div className="react-text"></div>
                    </div>

                    <div className="react-type">
                        <div className="react-icon">
                            <MessageIcon/>
                        </div>
                        <div className="react-text">Comment</div>
                    </div>

                    <div className="react-type">
                        <div className="react-icon">
                            <ShareIcon/>
                        </div>
                        <div className="react-text">Share</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post