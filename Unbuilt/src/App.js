import React, { Component } from 'react';
import './index.css'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className='row'>
          <div className='col-xs-12 col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-3'>
            <div className="homeheader">
              <h1 classname="baxter">Hello, I'm Baxter</h1>
            </div>
            <img className="headshot" src='image/headshot.jpg' alt="headshot" />
            <div className="briefintro">
              <p className="baxter-intro">
                I'm currently a student in the Web Development Bootcamp at Brainstation.
                I'm available for Full-Time and Freelance Work.
             </p>
             <h3 className='whatIKnow'>What I Know</h3>
             <div className='col-xs-12 col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-3'>
              <p className="baxter-intro">
                HTML, CSS, Node.js, jQuery, Vanilla Javascript, ReactJS, MongoDB, PostgreSQL, and have a keen eye for design.
              </p>
              </div>            
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
