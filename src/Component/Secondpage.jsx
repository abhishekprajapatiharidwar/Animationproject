import { useState } from "react";
import "./Secondpage.css";
import CloseIcon from "@mui/icons-material/Close";

export default function SecondPage() {
  const [count, setcount] = useState(1);
  const decress = () => {
    if (count === 1) {
      return;
    }
    setcount((prev) => prev - 1);
  };

  const incress = () => {
    if (count === 6) {
      return;
    }
    setcount((prev) => prev + 1);
  };
  console.log(count);
  return (
    <>
      <div className="SecondPage">
        <div className="SecondpageContainer">
          <div className="nav">
            <CloseIcon style={{ color: "white" }} />
          </div>
          <section className="textinterface">
            <h2>Digital Interface</h2>
            <p>
              {" "}
              Choreograph every element of your shower experience with built-in
              Wi-Fi, Bluetooth, and voice-activated technology when paired with
              Google Home" or Amazon Alexa Plus, use the HDFC@Home™ app to craft
              up to twelve shower presets with spa options, remotely warm your
              steam shower and customize the interface.
            </p>
          </section>
          <div className="alllogos">
            <div className="logos1" id="log1"></div>
            <div className="logos1" id="log2"></div>
            <div className="logos1" id="log3"></div>
            <div className="logos1" id="log4"></div>
            <div className="logos1" id="log5"></div>
            <div className="logos1" id="log6"></div>
          </div>

          <div className="crosers">
            <div className="btn" onClick={decress}>
              <img src="src/assets/leftarrow.png"></img>
            </div>
            <img src="src/assets/corousel.png" />

            <div className="btn" onClick={incress}>
              <img src="src/assets/rightarrow.png"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
