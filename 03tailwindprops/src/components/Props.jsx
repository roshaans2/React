import React from "react";

const Props = (user) => {
    return(
        <div>
            <h1>{user.name}</h1>
            <h2>{user.age}</h2>
        </div>
    )
}

export default Props