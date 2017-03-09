import React from 'react';
import { Link } from 'react-router';
import './index.css';


class Portfolio extends React.Component {
    componentDidMount() {
        document.title = "Portfolio"
    }
    render() {
        return (
            <div className='container-fluid'>
                <nav className="navbar navbar-default navbar-fixed-top">
                    <ul className="topnav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Resume">Resume</Link></li>
                        <li><a className='contact' href="mailto:alexanderbaxterhall@gmail.com?Subject=Hello" target="_top">Contact Me</a></li>
                    </ul>
                </nav>
                <div className='row'>
                    <div className='col-xs-12 col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1 project'>
                        <div className='portfolioheader'>
                            <h2 className="portfolio">Previous Projects</h2>
                        </div>
                        <div className='recordapi'>
                            <div className="col-sm-6">
                                <h3 className='align-api'>Music Catalog API</h3>
                                <div className='mockhomecontainer'>
                                    <img className='mockhome' src="image/Homepage.png" alt="Mock Homepage" />
                                </div>
                            </div>
                            <div className="col-sm-6 record-text">
                                <p>I created a website using a server-side templating engine: ejs, where i was able to retrieve dynamic data from an API called Discogs to display information about Musicians, Labels and Releases based upon an input by the user.</p>
                            </div>

                        </div>
                        <div className='journal'>
                            <div className="col-sm-6 journal-text">
                                <p>I created an Express server and set a directory to serve static files. Using the static files the blog posts entrys which can have tags and are searchable by those tags.
                                </p>
                            </div>
                            <div className="col-sm-6 journal-image">
                                <h3 className='align-blog'>Express Blog</h3>
                                <div className='mockjournalcontainer'>
                                    <img className='mockjournal' src="image/journal.png" alt="Mock Journal" />
                                </div>
                            </div>

                        </div>
                        <div className='movieapi'>
                            <div className="col-sm-6">
                                <h3 className='align-movie'>IMDB Node Project</h3>
                                <div className='mockmoviecontainer'>
                                    <img className='mockmovie' src="image/Moviedatabase.png" alt="Mock Moviedatabse" />
                                </div>
                            </div>
                            <div className="col-sm-6 movie-text">
                                <p>I built a minimal version of the Internet Movie Database (aka IMDb), allowing users to view a list movies and click for details. You can search for more movies if you dont like the ones on the first page.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Portfolio;