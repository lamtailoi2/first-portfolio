import React from "react";


function Home() {
    return (
        <section className="flex justify-center">
            <div className="gretting container my-24 ml-48 text-7xl" >
                <span className="canHover ">H</span>
                <span className="canHover ">E</span>
                <span className="canHover ">L</span>
                <span className="canHover ">L</span>
                <span className="canHover ">O</span>

                <br />
                <h2 className="canHover">I'm</h2>
                <h1 ><strong ><span>Loi</span></strong></h1>
                <h2>Web Developer</h2>
            </div>
            <div className="home-img my-24">
            <img src="img/logo.png" alt="" />
        </div>


        </section >
    )
}

export default Home