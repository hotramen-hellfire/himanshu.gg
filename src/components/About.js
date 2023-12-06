import React, { useState } from "react";
import "./About.css";

const About = () => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  const captionText = hovered ? "Thanks!!" : "Color it pls :/"; // Change this text as needed

  return (
    <body class="aboutbody">
      <div class="space">
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="flower">
          <div class="f-wrapper">
            <div class="flower__line"></div>
            <div class="f">
              <div class="flower__leaf flower__leaf--1"></div>
              <div class="flower__leaf flower__leaf--2"></div>
              <div class="flower__leaf flower__leaf--3"></div>
              <div class="flower__leaf flower__leaf--4"></div>
              <div class="flower__leaf flower__leaf--5"></div>
              <div class="flower__leaf flower__leaf--6"></div>
              <div class="flower__leaf flower__leaf--7"></div>
              <div class="flower__leaf flower__leaf--8 flower__fall-down--yellow"></div>
            </div>
          </div>

          <div class="f-wrapper f-wrapper--2">
            <div class="flower__line"></div>
            <div class="f">
              <div class="flower__leaf flower__leaf--1"></div>
              <div class="flower__leaf flower__leaf--2"></div>
              <div class="flower__leaf flower__leaf--3"></div>
              <div class="flower__leaf flower__leaf--4"></div>
              <div class="flower__leaf flower__leaf--5"></div>
              <div class="flower__leaf flower__leaf--6"></div>
              <div class="flower__leaf flower__leaf--7"></div>
              <div class="flower__leaf flower__leaf--8 flower__fall-down--pink"></div>
            </div>
          </div>

          <div class="f-wrapper f-wrapper--3">
            <div class="flower__line"></div>
            <div class="f">
              <div class="flower__leaf flower__leaf--1"></div>
              <div class="flower__leaf flower__leaf--2"></div>
              <div class="flower__leaf flower__leaf--3"></div>
              <div class="flower__leaf flower__leaf--4"></div>
              <div class="flower__leaf flower__leaf--5"></div>
              <div class="flower__leaf flower__leaf--6"></div>
              <div class="flower__leaf flower__leaf--7"></div>
              <div class="flower__leaf flower__leaf--8 flower__fall-down--purple"></div>
            </div>
          </div>
          <div class="flower__glass"></div>
        </div>
        <div class="main">
          <div class="Acard">
            <div class="Acard_content">
              <h2 class="Acard_title">About me :)</h2>
              <div class="Acard_text">
                <br />
                Hello visitor, my name is Himanshu Gangwal and I hail from Jaipur, Rajasthan.
                <p>
                  As of December 2023, I am a sophomore at the Department of Computer Science and Engineering at Indian Institute of Technology, Bombay. I love creating cool stuff with things I learn; I prefer to have a more creative approach towards what I learn and how the same can be used to create something of utility or any significant value.
                </p>
                <p>
                  I have spent a lot of time with computers since I was a child, thanks to my Uncle who taught me how to assemble a computer from nothing, installing OSs, and handling software-related bugs at a very young age, and I still love doing the same. Then, like any other kid with a computer at home, I used to play a ton of video games on my computer, each of which sometimes took even 2-3 days to download on my 2G internet dongle. I am not a big fan of games now; I don't like series or anime stuff either; it's a bit hard to keep myself entertained.
                </p>
                <p>
                  I find a lot of stuff that I am taught at college quite engaging and fun to know and learn.
                  Apart from studying, I like to run, and a lot of it, feels really good, doesn't it?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="main2">
        <div class="Acard2">
          <div class="Acard_content">
            <h2 class="Acard_title">About this website +_+ </h2>
            <div class="Acard_text">
              <br />
              <p>
                I started working on this website after my first year at college, during the sem-breaks, and due to complete lack of imagination and ability, ofc, I completed this website in the next semster break, i.e. December 2023.
              </p>
              <p>
                I am yet to figure out what all I am going to put here, but it was indeed a nice thing to do.
                Also as you might have guessed the animations are not something that I did by myself, most of these may have taken people even weeks to complete, I took the path that matched my skill, get them from codepen.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="imagewrap1">
        <div class="item">
          <div class="polaroid" onMouseEnter={handleHover} onMouseLeave={handleLeave}><img src='https://raw.githubusercontent.com/hotramen-hellfire/themedWebsite/main/pf2.jpeg' alt="didn't load the image maybe next time" />
            <div class="caption">{captionText}</div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default About;
