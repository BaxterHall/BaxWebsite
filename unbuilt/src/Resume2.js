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
                            <p>HTML/CSS, SASS, LESS, JavaScript, jQuery, Reactjs, Node.js, MongoDB, PostgreSQL, Express, Git, Angular.</p>
                            <h4 className='web'>Web/UI Design:</h4>
                            <p>Wordpress, fine arts background through education. Skilled at writing well-designed, testable and efficient code using current practices in web design and development.</p>
                            <h4 className='inter'>Interpersonal:</h4>
                            <p>Highly motivated with an eye for details. Experienced in working as an individual or as part of a team. Excellent analytical, written and verbal communication skills. Punctual and reliable, with dependable time management skills.</p>
                        </div>
                        <div className="Education">
                            <h3 className='educate'>Education:</h3>
                            <ul className='school'>
                                <li><strong>BrainStation:</strong> Full Stack Web Development - 2017 - Toronto, ON, Diploma - Graduated in Top Percentile of Class</li>
                                <li><strong>George Brown College:</strong> Culinary Management - 2014/2015  - Toronto, ON, Diploma</li>
                                <li><strong>Langara College:</strong> Arts/Arts Studies - 2008/2011 - Vancouver,BC, Bachelors</li>
                            </ul>
                        </div>
                        <div className='Work'>
                            <h3 className='workin'>Profesional Experience:</h3>

                            <div className='NewcomBusiness'>
                                <ul classname='newcom'>
                                    <li><strong>Newcom Business Media</strong> - <em>Front End Web Developer & Email Marketing Specialist</em> - April 2017/Present -  Toronto, ON</li>
                                    <p>Developed and managed websites for interhouse brands using Wordpress and responsive design.</p>
                                    <ul>
                                        <li>Created custom plugins, templates, and functions for Wordpress based sites.</li>
                                        <li>Fixed front end bugs (HTML, CSS, Javascript errors (JQUERY), testing.</li> 
                                        <li>UX tests to test the usability of mobile or websites.</li>
                                        <li>Did on site SEO implementations to increase traffic to client websites.</li>
                                        <li>Analyzed traffic and made necessary changes for a better user experience.</li>
                                        <li>Implemented CASL compliant practices across all email marketing campaigns.</li>
                                        <li>Consulted with clients for email marketing campaign planning.</li>
                                        <li>Designed developed and implemented email marketing campaigns.</li>   
                                    </ul>         
                                </ul>
                            </div>

                            <div className='development'>
                                <ul className='webdev'>
                                    <li><strong>Freelance Web Developer</strong> - January 2017/Present - Toronto, ON</li>
                                    <p>Freelance web designer/developer with accountability for marketing and selling services, managing all client relationships, controlling budgets, and designing/developing websites and web-based applications for clients.</p>
                                    <ul>
                                        <li>Able to build a Web presence from the ground up – from concepts to models, navigation, layout and programming</li>
                                        <li>Develop and research project concepts and maintain optimal work-flow </li>
                                        <li>Complete detailed programming and development tasks for the front-end of websites as well as back-end server code to ensure easy to use and retrieve information</li>
                                        <li>Carry out quality assurance tests to isolate and remove any errors and optimize performance</li>
                                    </ul>
                                </ul>

                            </div>
            
                            <div className='projects'>
                                <h3 className='proj'>Previous Projects:</h3>
                                <div className="cookin">
                                    <a className="whatscook" href="http://www.whatscookin.website" target="_blank">
                                        <h4>Whats Cookin?</h4>
                                    </a>
                                    <ul>
                                        <li>Created a web app using both server-side and client-side technologies that communicates with an API.</li>
                                        <li>Set up authorization protocol for user registration and login.</li>
                                        <li>Once logged in, users are able to browse for recipes based upon an ingredient they search with and save to a custom database.</li>
                                        <li>To accomplish this I used React, Express, MongoDB, HTML, CSS, and Javascript.</li>
                                    </ul>
                                </div>
                                <div className="records">
                                    <h4>Record Database</h4>
                                    <ul>
                                    <li>Built a mock-website using a server-side templating engine.</li>
                                    <li>Allowed users to query an external API to browse by Musician, Release, or Label.</li>
                                    <li>This project used Express, Node.Js, Javascript, HTML, various npm packages and CSS.</li>
                                    </ul>
                                </div>
                                <div className="audio">
                                <h4>Audio Player App</h4>
                                <ul>
                                <li>Designed a minimal version of a web audio player app, allowing users to play songs while browsing music information.</li>
                                <li>To do this I used React, HTML, Javascript and CSS.</li>
                                </ul>
                                </div>

                            </div>
                            <div className="Sanagans">
                                <ul className='sanagan'>
                                    <li><strong>Sanagans' Meat Locker</strong> - <em>Butcher</em> - March 2016/January 2017 - Toronto, ON
                                        <ul>
                                            <li>Maintaining high quality standards and safety through the execution of company policies and guidelines.</li>
                                            <li>Effectively communicated expectations of standards and procedure to team members, increasing efficiency in work and sales.</li>
                                            <li>Responsible for maintaining the presentation of the display cases in-store.</li>
                                            <li>Meeting specific customer requests for special orders, and assisting customers with suggested cooking recipes and methods.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className='Isabel'>
                                <ul className='barisabel'>
                                    <li><strong>Bar Isabel</strong> - <em>Chef de Partie</em> - June 2015/March 2016 Toronto, ON
                                        <ul>
                                            <li><a className="issylink" target="_blank" href="http://canadas100best.com/no-8-bar-isabel/">Voted 8th Best Restaurant in Canada during time of employment.</a></li>
                                            <li>Developed new menu items and specials.</li>
                                            <li>Opening and closing of multiple cooking stations.</li>
                                            <li>Lead a team to meet daily production deadlines for food preparation, service and nightly menu items.</li>
                                            <li>Carried out a variety of tasks that changed daily to meet service standards.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className='Luksus'>
                                <ul className='torst'>
                                    <li><strong>Tørst & Luksus</strong> – <em>Stagaire</em> - May 2015 - New York, NY, USA
                                        <ul>
                                            <li>Working closely with chef Daniel Burns to maintain standards at a Michelin Starred level</li>
                                            <li>Preparing a variety of items for daily service.</li>
                                            <li>Preparing food for a variety of menus.</li>
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
                                    <li>Passionate about growing my skill set on a variety of instruments. Regularly playing in a variety of bands in styles ranging from jazz & funk to garage rock. Featured performer at the 2009 Vancouver International Jazz Festival.
                                    </li>
                                </ul>
                                <li>Avid Record Collector</li>
                                <ul>
                                    <li>I love to spend my free time digging through crates at local record shops searching for rare gems,like an original pressing of Rich Kids Self-Titled 7” on red vinyl.</li>
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