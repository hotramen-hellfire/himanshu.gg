import React from "react";
import "./Home.css";
const Home = () => {
  const greetText = "Hi Sunshine!!";
  return (
    <body class="homebody">
  <section>
  <div class="bgmove">
    <hellfire>{greetText}</hellfire>
  </div>
  <div class="glitch-effect" title="Greetings visitor, welcome to my corner of the internet. Navigate around to see more cool stuff. . .">Greetings visitor, welcome to my corner of the internet. Navigate around to see more cool stuff. . .</div>
  {/* <h1 class='gomachi'>Greetings visitor, welcome to my corner of the internet. Navigate around to see more cool stuff. . .</h1> */}
  <div class='air air1'></div>
  <div class='air air2'></div>
  <div class='air air3'></div>
  <div class='air air4'></div>
</section>
    </body>
  );
};

export default Home;
