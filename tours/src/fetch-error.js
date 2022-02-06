import React from "react";

const FetchError = () => {
        return(
            <div className="title">
              <h2>Error fetching data. please refresh!</h2>
              <button className="btn">refresh</button>
           </div>
        )
}

export default FetchError