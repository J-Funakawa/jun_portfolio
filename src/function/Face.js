import React, { useState, useEffect } from 'react';
import '../css/HomeNav.css';
import '../css/Face.css';


const Face = ({ addEvent, isMousemoveActive }) => {
  const [isEyesOpen, setIsEyesOpen] = useState(false);
  const [isEyesClosed, setIsEyesClosed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [blushVisible, setBlushVisible] = useState(false);

  const openEyes = () => {
    setIsEyesOpen(true);

    // Simulate animation delay
    setTimeout(() => {
      setIsEyesOpen(false);
      // Add mousemove events after eyes open
      addMousemoveEvents();
    }, 1000);
  };

  const eyeRolling = (e) => {
    const { clientX, clientY } = e;

    const eyes = document.querySelectorAll('.eye'); // Select all eyes
    eyes.forEach((eye) => {
      const eyeRect = eye.getBoundingClientRect();

      const pageCenterX = window.innerWidth / 2;
      const pageCenterY = window.innerHeight / 2;

      const XdOfpCmP = (pageCenterX - clientX) * -1;
      const YdOfpCmP = pageCenterY - clientY;
      const dOfEye = (eyeRect.width / 2) - (eyeRect.width / 4); // Adjusted for eye size

      const x = (XdOfpCmP / pageCenterX) * dOfEye * 2;
      const y = (YdOfpCmP / pageCenterY) * dOfEye * 2 * -1;

      // Apply eye movement styles
      eye.querySelector('.eyeball').style.transform = `translate(${x/5}px, ${y/5}px)`;
    });
  };

  const randomEyeClose = () => {
    // Randomly close eyes
    const randomNum = Math.floor(Math.random() * 1000);
    if (randomNum < 10) {
      const eyes = document.querySelectorAll('.eye');
      eyes.forEach((eye) => {
        const eyeball = eye.querySelector('.eyeball');
        eyeball.style.animation = 'eyeclose 0.5s 1';
        eyeball.style.animationTimingFunction = 'ease-in-out';
        eyeball.addEventListener('animationend', () => {
          eyeball.style.animation = 'none';
        });
      });
    }
  };

  const addMousemoveEvents = () => {
    if (isMousemoveActive) {
      document.getElementById('entireScreen').addEventListener('mousemove', eyeRolling);
      document.getElementById('entireScreen').addEventListener('mousemove', randomEyeClose);
    } else {
      document.getElementById('entireScreen').removeEventListener('mousemove', eyeRolling);
      document.getElementById('entireScreen').removeEventListener('mousemove', randomEyeClose);
    }
  };

  const blushFace = () => {
    // Implementation for blushFace
    var style = (function () {
      var style = document.createElement('style');
      style.appendChild(document.createTextNode(''));
      document.head.appendChild(style);
      return style;
    })();
    style.sheet.insertRule(`.eyeball {animation: none;}`, 0);

    // Display blushRedLines
    let blush = document.querySelectorAll('.blushRedLine');
    for (let i = 0; i < blush.length; i++) {
      changePosition(blush[i]);
      function changePosition(content) {
        content.style.animation = 'redBlushLineOn 0.5s 1';
        content.style.opacity = '1';
      }
    }

    // Set blushVisible to true
    setBlushVisible(true);
  };

  const leanFace = () => {
    // Deactivate mousemove event
    document.getElementById('entireScreen').removeEventListener('mousemove', eyeRolling);

    // Centerize .eyeball
    let eyeballShape = document.querySelectorAll('.eyeball');
    for (let i = 0; i < eyeballShape.length; i++) {
      changePosition(eyeballShape[i]);
      function changePosition(eyeball) {
        eyeball.style.right = 0;
        eyeball.style.top = 0;
      }
    }

    // Reset animation
    var style = (function () {
      var style = document.createElement('style');
      style.appendChild(document.createTextNode(''));
      document.head.appendChild(style);
      return style;
    })();
    style.sheet.insertRule(`.eyeball {animation: none;}`, 0);

    // Display leanedMouse
    let leanedMouse = document.querySelectorAll('#leanedMouse');
    for (let i = 0; i < leanedMouse.length; i++) {
      leanedMouseAppear(leanedMouse[i]);
      function leanedMouseAppear(content) {
        content.style.animation = 'leanedMouseOn 0.5s 1';
        content.style.opacity = '1';
      }
    }

    // Reset the eyeside scale
    let eyeleft = document.querySelector('.eyeleft');
    let eyeright = document.querySelector('.eyeright');
    resetEyesideScale(eyeleft);
    resetEyesideScale(eyeright);
  };

  const leanedMouseAppear = (content) => {
    // Implement the leanedMouseAppear functionality
    // ...
  };

  const resetEyesideScale = (content) => {
    // Implement the resetEyesideScale functionality
    // ...
  };

  const changePosition = (content) => {
    // Implement the changePosition functionality
    // ...
  };

  useEffect(() => {
    // Initial setup
    openEyes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main id="entireScreen">
      <div className="HomeWrapper">
        {/* <a className="navigation" id="name" href="index.html">
          Jun Funakawa
        </a>
        <a
          className="navigation"
          id="about"
          onMouseOver={blushFace}
          onMouseOut={addEvent}
          href="./about"
        >
          <h1>About</h1>
        </a>
        <a
          className="navigation"
          id="work"
          onMouseOver={leanFace}
          onMouseOut={addEvent}
          href="./workhome"
        >
          <h1>Work</h1>
        </a>
        <a
          className="navigation"
          id="contact"
          // onMouseOver={surpriseFace}
          onMouseOut={addEvent}
          href="./contact"
        >
          <h1>Contact</h1>
        </a> */}
        <div className="maincontentsFace" id="face">
          <div className="faceContainer">
<div className="eyeleftSpace eye">
  <div className={`eyeleft ${isEyesOpen ? 'open' : ''}`}>
    <div className="eyeball" style={{ /* Apply eye movement styles based on mousePosition */ }}></div>
  </div>
</div>
<div className="eyerightSpace eye">
  <div className={`eyeright ${isEyesOpen ? 'open' : ''}`}>
    <div className="eyeball" style={{ /* Apply eye movement styles based on mousePosition */ }}></div>
  </div>
</div>

            <div className="blushSpace">
              {blushVisible && (
                <>
                  <img
                    src="./image/blushRedLine.svg"
                    className="blushRedLine"
                    id="blushRedLineLeft"
                    alt="blushRedLineLeft"
                  />
                  <img
                    src="./image/blushRedLine.svg"
                    className="blushRedLine"
                    id="blushRedLineRight"
                    alt="blushRedLineRight"
                  />
                </>
              )}
              <img src="../image/leanedMouse.svg" id="leanedMouse" alt="leanedMouse" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Face;
