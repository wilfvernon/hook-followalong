import React from 'react';
import './App.css'
 
const ProfileCard = (props) => {
    return (
        <div className="profile-card">
            <div className="profile-card-pic">
                <img src={props.image} alt="profile"/>
            </div>
            <div className="profile-card-info">
                <div className="profile-card-text">
                    <h3>{props.name}</h3>
                    <p>Likes: 0</p>
                </div>
                <button id="like-button">Like</button>
            </div>
        </div>
    );
}
 
export default ProfileCard;