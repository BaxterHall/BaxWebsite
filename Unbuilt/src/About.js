import React from 'react'
import { Link } from 'react-router';


class About extends React.Component {
    componentDidMount() {
        document.title = "About Me"
    }
    render() {
        return (
            <div className='container'>
                <nav className="navbar navbar  navbar-fixed-top">
                    <div className="container1">
                        <ul className="topnav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/Portfolio">Portfolio</Link></li>
                            <li><Link to="/Resume">Resume</Link></li>
                            <li><a className='contact' href="mailto:alexanderbaxterhall@gmail.com?Subject=Hello" target="_top">Contact Me</a></li>
                        </ul>
                    </div>
                </nav>
                <div className='row'>
                    <div className='col-xs-12 col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-3'>
                        <div className='containerheader'>
                            <h2 className="aboutme">Who I Am</h2>
                        </div>
                        <img className="cooking" src="image/cooking.jpg" alt="cookingwithjamieoliver" />
                        <div className="about">
                            <p className="about-me">
                                Born in Vancouver, I moved to Toronto in 2014 to continue chasing a dream of working in the best restaurants Canada had to offer. As my life and priorites changed I put down my knives and picked up my laptop.
                    </p>
                            <p className="about-me">
                                In Winter 2017, I enrolled in the Web Development Bootcamp at Brainstation to transition into my next phase. While attending I found a passion that touches upon the same drive that the kitchen did. Motivating me to continue learning and creating.
                    </p>
                            <p className="about-me">
                                When I'm not behind my laptop screen I can be found playing guitar with <a href="https://youtu.be/Jf8dLMdOz-M">Warm Frames</a>, reading a great book, or browsing the many record stores Toronto has to offer.
                    </p>
                            <img className='music' src="image/music.jpg" alt="holdingasweetguitar" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default About;