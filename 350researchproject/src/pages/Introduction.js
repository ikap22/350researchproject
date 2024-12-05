import React from "react";
<<<<<<< HEAD
import ads from '../image/ad.png'
import Ad from '../components/Ad'
function Home(){
    return(
    <div className="parent">
        <div className="ads">
            <img src={ads}
            width={200}
            height={500}
            alt="ads"/>
=======
import ad from "../image/ad.png";

function Home(){
    return(
    <div className="super-container">
        <div className="img-l">
            <img src={ad} className="img"></img>
>>>>>>> d7cfa21f2aeb5b058111b6717638e71d3c6ac865
        </div>
        <div className="container">
            <h1>Introduction</h1>
            <hr />
            <p className="page-text"> This research project's primary purpose is to identify commonalities in management styles among successful and unsuccessful tech companies. An analysis of eight different companies—four that did well financially, and four that failed—will be conducted, exploring their histories, management styles, company culture, and organizational choices. To determine a company's success, factors such as growth, revenue, employee satisfaction, and product performance will be measured and documented.</p>
            <p className="page-text"> Each company will have their own individual page dedicated to their respective analysis. At the end, a final analysis of these companies will be compiled. This page will be dedicated to identifying common traits among those successful and those unsuccessful, and their management styles will subsequently be compared and contrasted.</p>
        </div>
<<<<<<< HEAD
=======
        <div className="img-r">
            <img src={ad} className="img"></img>
        </div>
>>>>>>> d7cfa21f2aeb5b058111b6717638e71d3c6ac865
    </div>
    )
}

export default Home;