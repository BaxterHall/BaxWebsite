import React from 'react'
import Footer from './Footer'
import NavBar from './Navbar'

class About extends React.Component {
    componentDidMount() {
        document.title = "About Me"
    }
    render() {
        return (
            <div className='container'>
                <NavBar/>
                <div className='row'>
                    <div className='col-xs-12 col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-3'>
                        <div className='containerheader'>
                            <h2 className="aboutme">Who Am I?</h2>
                        </div>
                        <img className="cooking" src="image/cooking.jpg" alt="cookingwithjamieoliver" />
                        <div className="about">
                            <p className="about-me">
                                Born and raised in Vancouver, I moved to Toronto in 2014. With the goal of working in the best restaurants Canada had to offer. As my life and priorites changed I put down my knives and picked up my laptop.
                    </p>
                            <p className="about-me">
                                In Winter 2017, I enrolled in the Web Development Bootcamp at Brainstation to transition into my next phase. While attending I found a passion that touches upon the same drive that the kitchen did. Motivating me to continue learning and creating.
                    </p>
                            <p className="about-me">
                                When I'm not behind my laptop screen I can be found making music in a variety of genres, reading a great book, <a className='photo' target="_blank" href='https://www.abaxterhallphoto.wordpress.com'>taking photos</a> or browsing the many record stores Toronto has to offer.
                    </p>
                            <img className='music' src="image/music.jpg" alt="holdingasweetguitar" />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default About;