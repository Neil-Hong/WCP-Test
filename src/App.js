import React, { useEffect, useState } from "react";

import Usercards from "./components/Usercards";
import "./App.css";

const App = () => {
    const [users, setUsers] = useState([]);

    const fetchData = async () => {
        try {
            const responses = await fetch("https://random-data-api.com/api/users/random_user?size=10");
            const data = await responses.json();
            setUsers(data);
        } catch (error) {
            alert(error.message);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="App">
            <button onClick={fetchData}>Get random users</button>
            <div className="card-container">
                {users.map((p) => (
                    <Usercards
                        id={p.id}
                        avatar={p.avatar}
                        firstName={p.first_name}
                        lastName={p.last_name}
                        email={p.email}
                        userName={p.username}
                        uid={p.uid}
                        birth={p.date_of_birth}
                        gender={p.gender}
                        phone={p.phone_number}
                        insurance={p.social_insurance_number}
                        creditCard={p.credit_card.cc_number}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
