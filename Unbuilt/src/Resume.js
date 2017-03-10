import React from 'react';
import { Link } from 'react-router';
import Footer from './Footer'



class Resume extends React.Component {
    componentDidMount() {
        document.title = "Resume"
    }
    render() {
        return (
            <div className='container'>
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container1">
                        <ul className="topnav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/About">About</Link></li>
                            <li><Link to="/Portfolio">Portfolio</Link></li>                       
                            <li><a className='contact' href="mailto:alexanderbaxterhall@gmail.com?Subject=Hello" target="_top">Contact Me</a></li>
                            <li><a href="/BaxterHallResume2017.pdf" download="BaxterHallResume2017.pdf">Download Resume</a></li>
                        </ul>
                    </div>
                </nav>
                <div className='row'>
                    <div className='col-xs-12 col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-3'>
                        <div className='containerheader'>
                            <h2 className="resume">Resume</h2>
                        </div>
                        <div className="Education">
                            <h4 className='educate'>Education</h4>
                            <ul className='school'>
                                <li>BrainStation: Web Development - 2017 - Toronto, ON</li>
                                <li>George Brown College: Culinary Management - 2014/2015  - Toronto, ON</li>
                                <li>Langara College: Arts/Arts Studies - 2009/2011 - Vancouver,BC </li>
                            </ul>
                        </div>
                        <div className='Work'>
                            <h4 className='workin'>Prior Employment</h4>                            
                            <div className="Sanagans">
                                <ul className='sanagan'>
                                    <li>Sanagans' Meat Locker - Butcher - March 2016/January 2017 - Toronto, ON
                                        <ul>
                                            <li>Maintained high quality standards and safety through the execution of company policies and guidelines</li>
                                            <li>Effectively communicated expectations to team members, increasing efficiency</li>
                                            <li>Responsible for maintaining the presentation of the meat department</li>
                                            <li>Weighing and labeling meat according to proper protocol</li>
                                            <li>Reducing Waste</li>
                                            <li>Maintaining supplies</li>
                                            <li>Serviced customers requesting special meat orders, assisted customers with recipes and suggested cooking methods</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className='Isabel'>
                                <ul className='barisabel'>
                                    <li>Bar Isabel - Chef de Partie - June 2015/March 2016 Toronto, ON
                                        <ul>
                                            <li><a className="issylink" target="_blank" href="http://canadas100best.com/no-8-bar-isabel/">Voted 8th Best Restaurant in Canada during time of employment</a></li>
                                            <li>Maintained high quality standards and safety through the execution of company policies and guidelines</li>
                                            <li>Effectively communicated expectations to team members, increasing efficiency</li>
                                            <li>Butchery and portioning of various proteinst</li>
                                            <li>Preparation of daily items for service</li>
                                            <li>Butchery for in-house made sausages and cured meats</li>
                                            <li>Opening and closing of different stations</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className='Luksus'>
                                <ul className='torst'>
                                    <li>Tørst & Luksus – Stagaire - May 2015 - New York, NY, USA
                                        <ul>
                                            <li>Preparing a variety of items for daily service</li>
                                            <li>Preparing food for a variety of menus</li>
                                            <li>Working closely with chef Daniel Burns to maintain standards at a Michelin Starred level</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className='dbar'>
                                <ul className="Boulud">
                                    <li>dBar & Cafe Boulud – Chef de Partie - September 2014/February 2015 - Toronto, ON
                                        <ul>
                                            <li>Preparing a variety of items for daily service</li>
                                            <li>Opening and closing of the station</li>
                                            <li>Teaching other stagieres to produce at a high standard</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className='Lazy'>
                                <ul className='gourmet'>
                                    <li>The Lazy Gourmet - Chef de Partie & Event Chef - May 2012/January 2013  - Vancouver, BC
                                        <ul>
                                            <li>Preparing daily produce orders</li>
                                            <li>Preparing a variety of items for daily service</li>
                                            <li>Controlling stock levels</li>
                                            <li>Recording monthly inventory levels</li>
                                            <li>Reducing Waste</li>
                                            <li>Maintaining supplies</li>
                                            <li>Working on-site events from plated dinners to hot and cold appetizers to barbecues</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className='noodles'>
                                <ul className='noodlebox'>
                                    <li>The Noodle Box - Dishwasher Promoted to Shift Manager - February 2008/October 2012 - Vancouver, BC
                                        <ul>
                                            <li>Preparing daily produce orders</li>
                                            <li>Preparing a variety of items for daily service</li>
                                            <li>Controlling stock levels</li>
                                            <li>Recording monthly inventory levels</li>
                                            <li>Reducing Waste</li>
                                            <li>Opening and closing the restaurant</li>
                                            <li>Making a variety of marinades</li>
                                            <li>Preparing daily specials</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className='Jazz'>
                                <ul className='jazzfest'>
                                    <li>Vancouver International Jazz Festival - Volunteer Event Chef - June 2011 - Vancouver, BC 
                                        <ul> 
                                            <li>Menu design for party of 200x guests</li>
                                            <li>Chef for the volunteer party</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className='joey'>
                                    <ul className='joeys'>
                                        <li>Joey’s Restaurant - Dishwasher then promoted to Chef de Partie - July 2006/August 2007 - Vancouver, Bc
                                            <ul>
                                                <li>Prepping and preparing a variety of pasta, appetizers and vegetables for daily service</li>
                                                <li>Controlling stock levels</li>                            
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div> {/*closes work*/}
                        </div> {/*closes column*/} 
                 </div> {/*close row */}
                 <Footer />
            </div> 
                 
        )
    }
}
export default Resume;