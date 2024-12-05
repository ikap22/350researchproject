import React from "react";
import ads from '../image/ad.png'

function Ad() {
     return (
          <div>
               <div className="container">
                    <div className="top">
                         <h1>Hot BOYS in your area Looking for Affection!</h1>
                    </div>
                    <div className="bottom">
                         <div className="description">
                              <h2>Timmy Huynhh</h2>
                              <h2>20 yo, 3 miles away</h2>
                         </div>
                         <div className="img">
                              <img
                              src={ads}
                              alt="ads"/>
                         </div>
                    </div>
               </div>
               <div className="container">
                    <div className="top">
                         <h1>Hot BOYS in your area Looking for Affection!</h1>
                    </div>
                    <div className="bottom">
                         <div className="description">
                              <h2>Timmy Huynhh</h2>
                              <h2>20 yo, 3 miles away</h2>
                         </div>
                         <div className="img">
                              <img
                              src={ads}
                              alt="ads"/>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default Ad;