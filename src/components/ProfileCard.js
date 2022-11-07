import React from "react";
import '../App.css'


//ProfileCard component destructuring ES6 with the image, 
//name, title and description as parameters
const ProfileCard = ({ image, name, title, description }) => {
    return(
        <div className="card" style={{
            backgroundColor: "white",
            margin: 15,
            padding: 5,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <div style={{ display: 'flex', backgroundColor: "white"}}>
                <img src={image} alt='card-img' height='75px' style={{borderRadius: '10px'}} />
                <div style={{backgroundColor: "white"}}>
                    <h2 style={{backgroundColor: "white", marginLeft: '10px'}}> {name} </h2>
                    <h6 style={{backgroundColor: "white", marginLeft: '10px'}}> {title} </h6>
                </div>
            </div>
            <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", alignItems: 'center'}}>
                <p style={{ backgroundColor: "white", fontSize: "12px", padding: 5}}>
                    Description: {description}
                </p>
            </div>
    </div>

    )
}

export default ProfileCard;