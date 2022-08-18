import React, { useState } from "react";

import "./usercards.css";

const Usercards = (props) => {
    const { avatar, firstName, lastName, userName, email, uid, birth, gender, phone, insurance, creditCard } = props;
    const [flag, setFlag] = useState(false);

    const handleEnter = () => {
        setTimeout(() => {
            setFlag(true);
        }, 700);
    };
    const handleLeave = () => {
        setTimeout(() => {
            setFlag(false);
        }, 700);
    };
    return (
        <div className="cards" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            {flag ? (
                <>
                    <div className="content">
                        <p>FirstName: </p>
                        <p>{firstName}</p>
                        <p>LastName: </p>
                        <p>{lastName}</p>
                        <p>UserName: </p>
                        <p>{userName}</p>
                        <p>Email: </p>
                        <p>{email}</p>
                        <p>Birth: </p>
                        <p>{birth}</p>
                        <p>Gender: </p>
                        <p>{gender}</p>
                        <p>Phone Number: </p>
                        <p>{phone}</p>
                        <p>Insurance Number: </p>
                        <p>{insurance}</p>
                        <p>Credit Card:</p>
                        <p>{creditCard}</p>
                    </div>
                </>
            ) : (
                <>
                    <div>
                        <img src={avatar} alt={uid} />
                    </div>
                    <div className="content">
                        <p>FirstName: </p>
                        <p>{firstName}</p>
                        <p>LastName: </p>
                        <p>{lastName}</p>
                        <p>UserName: </p>
                        <p>{userName}</p>
                        <p>Email: </p>
                        <p>{email}</p>
                    </div>
                </>
            )}
        </div>
    );
};
export default Usercards;
