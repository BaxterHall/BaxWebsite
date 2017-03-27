import React, { Component } from 'react';
import { Link } from 'react-router';
import './index.css';

class Navbar extends Component {

    render() {

        return (
            <nav className="navbar navbar navbar-fixed-top">
                <div className="container1">
                    <ul className="topnav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Portfolio">Portfolio</Link></li>
                        <li><Link to="/Resume">Resume</Link></li>
                        <li><a className='contact' href="mailto:alexanderbaxterhall@gmail.com?Subject=Hello" target="_top">Contact Me</a></li>

                        <li className='navbar-right'>
                            <a className='twitta' title="follow me on Twitter" href="http://www.twitter.com/hawkbrogen" target="_blank" >
                                <i className="fa fa-twitter-square fa-lg" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li className='navbar-right'>
                            <a className='linked' title="add me on linkedIn" href="http://ca.linkedin.com/pub/baxter-hall/103/265/782" target="_blank" >
                                <i className="fa fa-linkedin-square fa-lg" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li className='navbar-right'>
                            <a className='git' title="check out my github"
                                href="http://github.com/BaxterHall" target="_blank" >
                                <i className="fa fa-github-square fa-lg" aria-hidden="true" ></i>
                            </a>
                        </li>
                        <li className='navbar-right'>
                            <a className='insta' title="follow me on instagram" href="http://www.instagram.com/hawkbrogen" target="_blank" >
                                <i className="fa fa-instagram fa-lg" aria-hidden="true"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

        )
    }
}
export default Navbar;