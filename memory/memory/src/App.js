/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import Box from './components/Box'
import './App.css';
import uniqid from "uniqid"
import fubuki from './pictures/fubuki.jpg'
import miko from './pictures/miko.jpg'
import korone from './pictures/korone.jpg'
import okayu from './pictures/okayu.jpg'
import pekora from './pictures/pekora.jpg'
import rushia from './pictures/rushia.jpg'
import noel from './pictures/noel.jpg'
import marine from './pictures/marine.jpg'
import coco from './pictures/coco.jpg'
import watame from './pictures/watame.jpg'
import botan from './pictures/botan.jpg'
import polka from './pictures/polka.jpg'

const App = () => {
  const [score, setScore] = useState(0);
  const [high, setHigh] = useState(0);
  const [tracker, setTracker] = useState([]);
  const [finalHolder, setFinalHolder] = useState([]);


  // The boxes before they are randomized
  let tempHolder = [
    {
      name:"Inugami Korone",
      id:"1",
      pic: <img className="picture" src={korone} />,
    },
    {
      name:"Nekomata Okayu",
      id:"2",
      pic: <img className="picture" src={okayu} />,
    },
    {
      name:"Sakura Miko",
      id:"3",
      pic: <img className="picture" src={miko} />,
    },
    {
      name:"Shirakami Fubuki",
      id:"4",
      pic: <img className="picture" src={fubuki} />,
    },
    {
      name: "Usada Pekora",
      id: "5",
      pic: <img className="picture" src={pekora} />,
    },
    {
      name: "Uruha Rushia",
      id: "6",
      pic: <img className="picture" src={rushia} />,
    },
    {
      name: "Shirogane Noel",
      id: "7",
      pic: <img className="picture" src={noel} />,
    },
    {
      name: "Houshou Marine",
      id: "8",
      pic: <img className="picture" src={marine} />,
    },
    {
      name: "Kiryu Coco",
      id: "9",
      pic: <img className="picture" src={coco} />,
    },
    {
      name: "Tsunomaki Watame",
      id: "10",
      pic: <img className="picture" src={watame} />,
    },
    {
      name: "Omaru Polka",
      id: "11",
      pic: <img className="picture" src={polka} />,
    },
    {
      name: "Shishiro Botan",
      id: "12",
      pic: <img className="picture" src={botan} />,
    },
  ];

  // Keeps track of which boxes you clicked
  const addTracker = (id) => {
    if (tracker.includes(id)){
      resetScore();
      resetTracker();
    } else {
      setTracker(tracker => [...tracker, id]);
      incrementScore();
    }
    resetTemp();
    randomize();
  };


    // Increases the score
    const incrementScore = () => {
      setScore(score + 1);
      if (score >= high) {
        newHigh();
      }
    };

    // Resets the score
    const resetScore = () => {
      setScore(0);
    };

    // Resets the tracker
    const resetTracker = () => {
      setTracker([]);
    };

    // Sets the high score
    const newHigh = () => {
      setHigh(score + 1);
    };

    // Resets both the initial boxes and the randomized results
    const resetTemp = () => {
      tempHolder = [
        {
          name: "Inugami Korone",
          id: "1",
          pic: <img className="picture" src={korone} />,
        },
        {
          name: "Nekomata Okayu",
          id: "2",
          pic: <img className="picture" src={okayu} />,
        },
        {
          name: "Sakura Miko",
          id: "3",
          pic: <img className="picture" src={miko} />,
        },
        {
          name: "Shirakami Fubuki",
          id: "4",
          pic: <img className="picture" src={fubuki} />,
        },
        {
          name: "Usada Pekora",
          id: "5",
          pic: <img className="picture" src={pekora} />,
        },
        {
          name: "Uruha Rushia",
          id: "6",
          pic: <img className="picture" src={rushia} />,
        },
        {
          name: "Shirogane Noel",
          id: "7",
          pic: <img className="picture" src={noel} />,
        },
        {
          name: "Houshou Marine",
          id: "8",
          pic: <img className="picture" src={marine} />,
        },
        {
          name: "Kiryu Coco",
          id: "9",
          pic: <img className="picture" src={coco} />,
        },
        {
          name: "Tsunomaki Watame",
          id: "10",
          pic: <img className="picture" src={watame} />,
        },
        {
          name: "Omaru Polka",
          id: "11",
          pic: <img className="picture" src={polka} />,
        },
        {
          name: "Shishiro Botan",
          id: "12",
          pic: <img className="picture" src={botan} />,
        },
      ];
      setFinalHolder([]);
    };

    // Makes the box order random
  const randomize = () => {
    let sampleHolder = []
    while (tempHolder.length) {
      let chosenOne = Math.floor(Math.random() * tempHolder.length)
      sampleHolder.push(tempHolder[chosenOne])
      tempHolder.splice(chosenOne, 1);
    }
    setFinalHolder(finalHolder => [...finalHolder, ...sampleHolder]);
  };

  // Hopefully starts the game
  useEffect(() => {
    randomize();
  }, []);

  return (
    <div>
      <h1>Hololive Memory</h1>
      <div className="scoreboard">
        <p>Your current score: {score} </p>
        <p>Your highscore: {high} </p>
      </div>
      <div className="boxGrid">
        {finalHolder.map((box) => <div key={uniqid()} onClick={function() {addTracker(box.id)}} value={box.id}>
          < Box 
          name={box.name}
          pic={box.pic} 
          />
          </div>)}
      </div>
      
    </div>
  );
}

export default App;
