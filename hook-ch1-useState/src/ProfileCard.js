//////////     Hook-Based     \\\\\\\\\\

import React, {useState} from 'react';
import './App.css'
 
const ProfileCard = (props) => {
    const [likes, setLikes] = useState(0)
    const handleClick = () => {setLikes(likes+1)}
    return (
        <div className="profile-card">
            <div className="profile-card-pic">
                <img src={props.image} alt="profile"/>
            </div>
            <div className="profile-card-info">
                <div className="profile-card-text">
                    <h3>{props.name}</h3>
                    <p>Likes: {likes}</p>
                </div>
                <button onClick={handleClick} id="like-button">Like</button>
            </div>
        </div>
    );
}
 
export default ProfileCard;

//////////     Class-Based     \\\\\\\\\\

// import React, { Component } from 'react';
 
// class ProfileCard extends Component {
    
//     state={
//         likes: 0
//     }

//     handleClick=()=>{
//         this.setState(prevState=>({
//             likes: prevState.likes + 1
//         }))
//     }

//     render() { 
//         return (
//             <div className="profile-card">
//                 <div className="profile-card-pic">
//                     <img src={this.props.image} alt="profile"/>
//                 </div>
//                 <div className="profile-card-info">
//                     <div className="profile-card-text">
//                         <h3>{this.props.name}</h3>
//                         <p>Likes: {this.state.likes}</p>
//                     </div>
//                     <button onClick={this.handleClick} id="like-button">Like</button>
//                 </div>
//          </div>
//         );
//     }
// }
 
// export default ProfileCard;