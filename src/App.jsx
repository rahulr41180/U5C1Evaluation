
import { useState } from "react";

import "./App.css"
function App() {

  const [Cricket, setCricket] = useState({
    Score : 76,
    Wicket : 2,
    Ball : 50
  })



  const handleScore = (value) =>
  {
    Cricket["Score"] += value;
    setCricket({Score : Cricket.Score, Wicket : Cricket.Wicket, Ball : Cricket.Ball});
  }
  const handleWicket = (value) =>
  {
    Cricket["Wicket"] += value;

    setCricket({Score : Cricket.Score, Wicket : Cricket.Wicket, Ball : Cricket.Ball});
  }
  const handleBall = (value) =>
  {
    Cricket["Ball"] += value;
    setCricket({Score : Cricket.Score, Wicket : Cricket.Wicket, Ball : Cricket.Ball});
  }
  var over = Cricket.Ball;
  over = (over%6).toFixed(1);
  return (
    <div className="App">
      <h3>India has:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              // show "score" here
              Cricket.Score
            }
          </h1>
        </div>
        <div>
          India Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
              Cricket.Wicket
            }
          </h1>
        </div>

        <div>
         India Over:{" "}
          <h1 className="overCount">
            {
              over
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={() =>{
          if(Cricket.Score > 100)
          {
            return;
          }
          handleScore(1)
        }}>Add 1</button>
        <button className="addScore4" onClick={() =>{
          if(Cricket.Score > 100)
          {
            return;
          }
          handleScore(4)
        }}>Add 4</button>
        <button className="addScore6" onClick={() =>{
          if(Cricket.Score > 100)
          {
            return;
          }
          handleScore(6)
        }}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={() =>{
          if(Cricket.Wicket >= 12 || Cricket.Score >= 100)
          {
            return;
          }
          handleWicket(1);
        }}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={() =>{
          if(Cricket.Score >= 100)
          {
            
            return;
          }
          handleBall(1);
        }}>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
        <h1 className = "status">{Cricket.Score >= 100 ? `India Won ${Cricket.Score}` : null}</h1>
    </div>
  );
}

export default App;