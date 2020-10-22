import React, { useState } from 'react';
import './app.css';

function generateTeams(list, teamSize) {
  shuffle(list);

  let counter = 0, 
  teamList = [],
  tempList = [];

  for(let i = 0; i < list.length; i++) {
    if(counter < teamSize) {
      tempList.push(list[i]);
      counter++;
    }
    if(counter === teamSize) {
      teamList.push(tempList);
      tempList = [];
      counter = 0;
    }
  }
  console.log(teamList)
  return teamList;
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function App() {

  const [currentValue, setCurrentValue] = useState({name: ''});
  const [participants, setParticipants] = useState([]);
  const [teamlist, setTeamlist] = useState([]);

  let teamSize = 3;

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentValue({[name]: value})
  }
  const handleSubmit = (e) => {
    setParticipants([...participants, currentValue.name]);
    e.preventDefault();
    setCurrentValue({name: ''})
  }
  const handleGenerate = (e) => {
    const teams = generateTeams(participants.slice(), teamSize)
    setTeamlist(teams);
    console.log(teamlist)
    e.preventDefault();
  }
  const renderTeams = () => {
    
  }
  return (
    <div className="layout">
      <div className="navbar">
        <div className="olympics-logo-container">
          <div className="olympics-logo-image-container">
            <img src={require('./images/Office-Olympics-logo.jpg')}
              className="olympics-logo-image"
            />
          </div>
          <div className="olympics-logo-text-container">
            <p className="olympics-logo-text">
              OFFICE OLYMPICS 2020
            </p>
          </div>
        </div>
        <div className="softhouse-logo-container">
        <img src={require('./images/softhouse-logo.jpg')}
          className="softhouse-logo-image"
        />
        </div>
      </div>
      <hr className="divider"/>
      <div className="content">
        <div className="content-container">
          <div className="participants-container">
            <div className="participants-header-container">
              <p className="header-text">
                Participants
              </p>
            </div>
            <hr className="content-divider"/>
            <div className="participants-content-container">
              <div className="participants-content-wrapper">
                {participants.map((item, i) => 
                  <p className="content-text" key={i}>
                    {item}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="teams-container">
            <div className="teams-header-container">
              <p className="header-text">
                Teams
              </p>
            </div>
            <hr className="content-divider"/>
            <div className="teams-content-container">
              <div className="teams-content-wrapper">
                
                <div>
                  {teamlist.map(team => 
                    <div>
                      {team.map(member => 
                        <p>
                          {member}
                        </p>
                      )}
                      <hr className="divider"/>
                    </div>
                    
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-container">
          <div className="formgroup">
            <h3>Add new participant</h3>
            <div className="formgroup-content">
            <form>
              <div className="formgroup-item">
                <label for="name" className="content-text">Name: </label>
                <input 
                  label="Name" 
                  id="name" 
                  name="name"
                  value={currentValue.name}
                  onChange={handleChange}
                />
              </div>
              
              <button type="submit" 
                className="formgroup-content-submit"
                onClick={handleSubmit}
                >Submit
              </button>
              <button 
                className="generator-button"
                onClick={handleGenerate}
                >Generate
              </button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
