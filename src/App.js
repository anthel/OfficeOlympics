import React from 'react';
import './app.css';

function App() {
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
                <p className="content-text">
                  John Doe
                </p>
                <p className="content-text">
                  John Doe
                </p>
                <p className="content-text">
                  John Doe
                </p>
                <p className="content-text">
                  John Doe
                </p>
                <p className="content-text">
                  John Doe
                </p>
                <p className="content-text">
                  John Doe
                </p>
                <p className="content-text">
                  John Doe
                </p>
                <p className="content-text">
                  John Doe
                </p>
                <p className="content-text">
                  John Doe
                </p>
                <p className="content-text">
                  John Doe
                </p>
                <p className="content-text">
                  John Doe
                </p>
                <p className="content-text">
                  John Doe
                </p>
                <p className="content-text">
                  John Doe
                </p>
                <p className="content-text">
                  John Doe
                </p>
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
                  <p className="content-text">
                    John Doe
                  </p>
                  <p className="content-text">
                    John Doe
                  </p>
                  <p className="content-text">
                    John Doe
                  </p>
                  <p className="content-text">
                    John Doe
                  </p>
                </div>
                <div>
                  <p className="content-text">
                    John Doe
                  </p>
                  <p className="content-text">
                    John Doe
                  </p>
                  <p className="content-text">
                    John Doe
                  </p>
                  <p className="content-text">
                    John Doe
                  </p>
                </div>
                <div>
                  <p className="content-text">
                    John Doe
                  </p>
                  <p className="content-text">
                    John Doe
                  </p>
                  <p className="content-text">
                    John Doe
                  </p>
                  <p className="content-text">
                    John Doe
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="formgroup">
          <form>
            <div className="formgroup-content">
              <label for="firstname" className="content-text">Firstname: </label>
              <input  label="Firstname" id="firstname" name="firstname"/>
            </div>
            <div className="formgroup-content">
              <label for="lastname" className="content-text">Lastname: </label>
              <input  label="lastname" id="lastname" name="lastname"/>
            </div>
            <button type="submit" className="formgroup-content-submit">Submit</button>
          </form>
        </div>
        
      </div>
    </div>
  );
}

export default App;
