import React from 'react';
import { Link } from 'react-router';
import Footer from './Footer'
import './index.css';


class Portfolio2 extends React.Component {
    componentDidMount() {
        document.title = "Portfolio"
    }
    render() {
        return (
         
                <div className='container-fluid'>
                    <nav className="navbar navbar  navbar-fixed-top">
                        <ul className="topnav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/About">About</Link></li>
                            <li><Link to="/Resume">Resume</Link></li>
                            <li><a className='contact' href="mailto:alexanderbaxterhall@gmail.com?Subject=Hello" target="_top">Contact Me</a></li>
                        </ul>
                    </nav>
                    <div>
                        <div className="container">
                            <h1 className="portfolio-header">Previous Projects</h1>
                        </div>
                    </div>
                    <div className='container-fluid bg-3 thumbs'>
                        <div className='row'>
                            <div className='col-sm-4'>
                                <a href="https://github.com/BaxterHall/Record-Api" target="_blank"> <img src="image/Homepage.png" className='img-responsive mock-record' alt='Mock Record Homepage' /></a>
                               <p>I created a website using a server-side templating engine: ejs, where i was able to retrieve dynamic data from an API called Discogs to display information about Musicians, Labels and Releases based upon an input by the user.</p>

                            </div>
                            <div className='col-sm-4'>
                                <a href="https://github.com/BaxterHall/ExpressJournal" target="_blank"><img src="image/journal.png" className='img-responsive mock-journal' alt='Mock Journal Homepage' /></a>
                                <p>I created an Express server and set a directory to serve static files. When a user submits a posting it is saved by searchable tags.</p>

                            </div>

                            <div className='col-sm-4'>
                               <a href="https://github.com/BaxterHall/IMDBNode" target="_blank">  <img src="image/Moviedatabase.png" className='img-responsive' alt='Mock IMDB Homepage' /></a>
                               <p>I built a minimal version of the Internet Movie Database (aka IMDb), allowing users to view a list movies and their related details. You can search for more movies if you don't like the ones on the first page.</p>

                            </div>
                        </div>
                    </div>
                </div>
        


        )
    }
};
export default Portfolio2
