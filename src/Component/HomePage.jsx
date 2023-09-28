// HomePage.js

import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [text, setText] = useState("Inhale");
  const [texttime, settime] = useState("3 Sec");
  const nevigate = useNavigate();
  const [timing, settiming] = useState(1);

  const breatheAnimation = () => {
    setText("Inhale");

    setTimeout(() => {
      setText("Hold");
      settime("2 Sec");
  
      setTimeout(() => {
        setText("Exhale");
        settime("3 Sec");
        setInterval(() => {
          settiming((prev) => prev - 1);
          nevigate("/secondpage");
        }, 1000);

      }, 2000);
    }, 3000);
  };

  useEffect(() => {
    breatheAnimation();
  
    return () => {

    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      settiming(1);
    }, 1000);
    setTimeout(() => {
      settiming(2);
    }, 2000);
    setTimeout(() => {
      settiming(3);
    }, 3000);
  }, []);

  return (
    <div className="FirstPage">
      <video id="background-video" autoPlay loop muted>
        <source src="src/assets/loadingsteam.mp4" type="video/mp4" />
      </video>
      <div className="SubjectinFirstPage">
        <div className="container">
          {timing >= 3 && <div className="circle3"></div>}

          {timing >= 1 && (
            <div className="circle1">
              <div className="text">{text}</div>
              <div className="text">{texttime}</div>
            </div>
          )}
          {timing >= 2 && <div className="circle2"></div>}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
