import React from 'react'
import { Router, Route, browserHistory, Link } from 'react-router';
import App from './App'
import Footer from './Footer'


class Home extends React.Component {
    componentDidMount() {
        document.title = "Baxter Hall"
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container1">
                        <ul className="topnav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/About">About</Link></li>
                            <li><Link to="/Portfolio">Portfolio</Link></li>
                            <li><a className='contact' href="mailto:abaxterhall@gmail.com?Subject=Hello" target="_top">Contact Me</a></li>
                        </ul>
                    </div>
                </nav>
                <App />
                <Footer />
            </div>
        )
    }
}
export default Home;