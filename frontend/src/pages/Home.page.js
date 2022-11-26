import React, {useContext, useState} from 'react';
import './Home.css';
//import {UserContext} from "./contexts/user.context";

function Home() {

    //refrence from How TO - JavaScript Countdown Timer w3schools
    // Set the date we're counting down to
    var countDownDate = new Date("Jan 5, 2023 15:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="Timer"
        document.getElementById("Timer").innerHTML = days + " Days " + hours + " Hours "
            + minutes + " Minutes " + seconds + " Seconds ";

        // If the count down is over, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("Timer").innerHTML = "EXPIRED";
        }
    }, 1000);


    return (
        <body>
        <img src = "http://127.0.0.1:8887/timer.jpg" alt={""}></img>
        <article>
            <h2>Countdown to the Bahrain GP: </h2><p id="Timer"></p>
            <p id="Timer"></p>
        </article>

        <div className="bodycontainer">


            <div className="row">
                <h1>Top stories from the formula 1 world</h1>
                <div className="column">
                    <img src="http://127.0.0.1:8887/article1.png" alt={""}></img>
                    <div className="bottom-left">'Next year , were back' delares Wolff, as Mercedes aim to recover from
                        'character-building' season
                    </div>

                    <img src="http://127.0.0.1:8887/article2.jpg" alt={""}></img>
                    <div className="bottom-left">Ocon basks in 'very satisfying' season after P7 finish at season-ending
                        Abu Dhabi GP
                    </div>
                </div>

                    <div className="column">


                        <img src="http://127.0.0.1:8887/article3.jpg" alt={""}></img>
                        <div className="bottom-left">Red Bull confirm Ricciardo return as a third driver in 2023</div>

                        <img src="http://127.0.0.1:8887/article4.jpg" alt={""}></img>
                        <div className="bottom-left">
                            'Hes one of the most promising talents we've seen in years' Lewis Hamilton praises Latifi after
                            dissapointing final race in Formula 1
                        </div>

                    </div>

            </div>
        </div>


        </body>
    );
}

export default Home;