import React from 'react';
import Footer from './Footer'
import NavBar from './Navbar'



class Resume2 extends React.Component {
    componentDidMount() {
        document.title = "Resume"
    }
    render() {
        return (
            <div className='container'>
                <NavBar />

                <div className='row'>
                    <div className='col-xs-12 col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-3'>
                        <div className='containerheader'>
                            <h1 className="resume">A. Baxter Hall</h1>
                        </div>
                        <div className='skill'>
                            <h3 className='skills'>Skills:</h3>
                            <h4 className='techincal'>Technical:</h4>
                            <p>HTML/CSS, SASS, LESS, JavaScript, jQuery, Reactjs, Node.js, MongoDB, PostgreSQL, Express, Git.</p>
                            <h4 className='web'>Web/UI Design:</h4>
                            <p>I'm proficient at Wordpress. I'm skilled at writing well-designed, testable and efficient code using current practices in web design and development.</p>
                            <h4 className='inter'>Interpersonal:</h4>
                            <p>I'm highly motivated with a keen eye for design, excellent at time management and find that I enjoy working in fast paced environments. I'm able to work as an individual or as a team member.</p>
                        </div>
                        <div className="Education">
                            <h3 className='educate'>Education:</h3>
                            <ul className='school'>
                                <li><strong>BrainStation:</strong> Full Stack Web Development - 2017 - Toronto, ON, Diploma</li>
                                <li><strong>George Brown College:</strong> Culinary Management - 2014/2015  - Toronto, ON, Diploma</li>
                                <li><strong>Langara College:</strong> Arts/Arts Studies - 2008/2011 - Vancouver,BC, Bachelors</li>
                            </ul>
                        </div>
                        <div className='Work'>
                            <h3 className='workin'>Profesional Experience:</h3>
                            <div className='development'>
                                <ul className='webdev'>
                                    <li><strong>Freelance Web Developer</strong> - January 2017/Present - Toronto, ON</li>
                                    <ul>
                                        <li>Able to build a Web presence from the ground up – from concepts to models, navigation, layout and programming</li>
                                        <li>Develop and research project concepts and maintain optimal work-flow </li>
                                        <li>Complete detailed programming and development tasks for the front-end of websites as well as back-end server code to ensure easy to use and retrieve information</li>
                                        <li>Carry out quality assurance tests to isolate and remove any errors and optimize performance</li>
                                    </ul>
                                </ul>

                            </div>
                            <div className="Sanagans">
                                <ul className='sanagan'>
                                    <li><strong>Sanagans' Meat Locker</strong> - <em>Butcher</em> - March 2016/January 2017 - Toronto, ON
                                        <ul>
                                            <li>Maintaining high quality standards and safety through the execution of company policies and guidelines</li>
                                            <li>Effectively communicated expectations of standards and procedure to team members, increasing efficiency in work and sales</li>
                                            <li>Responsible for maintaining the presentation of the display cases in-store</li>
                                            <li>Meeting specific customer requests for special orders, and assisting customers with suggested cooking recipes and methods</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className='Isabel'>
                                <ul className='barisabel'>
                                    <li><strong>Bar Isabel</strong> - <em>Chef de Partie</em> - June 2015/March 2016 Toronto, ON
                                        <ul>
                                            <li><a className="issylink" target="_blank" href="http://canadas100best.com/no-8-bar-isabel/">Voted 8th Best Restaurant in Canada during time of employment</a></li>
                                            <li>Developed new menu items and specials</li>
                                            <li>Opening and closing of multiple cooking stations</li>
                                            <li>Lead a team to meet daily production deadlines for food preparation, service and nightly menu items</li>
                                            <li>Carried out a variety of tasks that changed daily to meet service standards</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className='Luksus'>
                                <ul className='torst'>
                                    <li><strong>Tørst & Luksus</strong> – <em>Stagaire</em> - May 2015 - New York, NY, USA
                                        <ul>
                                            <li>Preparing a variety of items for daily service</li>
                                            <li>Preparing food for a variety of menus</li>
                                            <li>Working closely with chef Daniel Burns to maintain standards at a Michelin Starred level</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div> {/*closes work*/}
                        <div classname='personal'>
                            <h4 className='interests'>Personal Interests</h4>
                            <ul className='pI'>
                                <li>Professional Musician</li>
                                <ul>
                                    <li>Passionate about growing my skill set on a variety of instruments. Regularly   playing in a variety of bands ranging from Jazz & Funk to Garage Rock. I played the Vancouver International Jazz Festival in 2009
                                    </li>
                                </ul>
                                <li>Avid Record Collector</li>
                                <ul>
                                    <li>I love to spend my free time digging through crates at local record shops searching for hidden gems</li>
                                </ul>
                            </ul>
                        </div>
                    </div> {/*closes column*/}
                </div> {/*close row */}
                <Footer />
            </div>

        )
    }
}
export default Resume2;