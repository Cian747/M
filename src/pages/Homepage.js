import Header from "../components/Header"; 
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

function Homepage() {
    return (
        <div>
            <Header />
            <div className='Homepage-container'>
                <div className='welcome-section'>
                    <div className='Homepage-content'>
                        <h1><span className='Homepage-content-title'>Strategic Organizational Development Solutions</span></h1>
                        <p className='Homepage-content-text'> <strong>Moore Advanced Solutions</strong> is a provider of tailored consulting services to higher education institutions, for-profit and non-profit organizations.</p>
                        <div className='target-box'>
                            <button type="button" className="btn btn-primary "><Link to='/contact-us'>Contact Us</Link></button>
                        </div>
                    </div>
                    <div className='Homepage-image'>
                        <img src="./assets/images/kevin-matos-Nl_FMFpXo2g-unsplash.jpg" alt="" width={'500'}height={'600'}/>
                    </div>
                </div>
                

                {/* What we do */}
                <section className="what-we-do">
                    <div className="punchline">
                        <p> The goal at <strong><i className="tagline">Moore Advanced Solutions</i></strong> is to create a positive consulting experience for all clients. The foundation of clients relationships
                            in grounded in listening and collaborating with clients to develop realistic recommendations and solutions to meet their organizational needs.</p>
                    </div>
                    <div className="step-exp">
                       <h2>A simple and streamlined process</h2>
                    </div>
                    <div className="steps">
                        <div className="step">
                        <img src="./assets/images/pexels-christina-morillo-1181605.jpg" alt=""/>
                            <h2>Discovery</h2>
                            <p>Diagnosis and assessment of needs</p>
                        </div>
                        <div className="step">
                            <img src="./assets/images/pexels-christina-morillo-1181605.jpg" alt=""/>
                            <h2>Goal setting</h2>
                            <p>Identification of objectives and goals</p>
                        </div>
                        <div className="step">
                            <img src="./assets/images/glenn-carstens-peters-RLw-UC03Gwc-unsplash.jpg" alt=""/>
                            <h2>Planning</h2>
                            <p>Development of plans and strategic recommentations</p>
                        </div>
                        <div className="step">
                            <img src="./assets/images/charles-forerunner-3fPXt37X6UQ-unsplash.jpg" alt=""/>
                            <h2>Evaluation</h2>
                            <p>Evalution of project and implementation of improvement efforts</p>
                        </div>
                    </div>
                </section>

                {/* About us */}
                <section className="about-us">
                    <div className="about-us-image">
                    <img src="./assets/images/ian-schneider-TamMbr4okv4-unsplash.jpg" alt="" width={'600'}height={'500'}/>
                    </div>
                    <div className="about-us-content">
                        <h3>WHAT WE DO</h3>
                        <p><strong><i>Moore Advanced Solutions</i></strong> provides consulting services to higher education institutions and for-profit and non-profit organization to create and improve
                        their organizational effectiveness. Primary areas of focus include: academic accreditation and regulatory affairs; board governance and development; organizational
                        capacity building; and strategic planning, development, implementation, and assessment.</p>
                    </div>
                </section>

                {/* Services section */}
                <section className="services-offered">
                    <div className="services-offered-content">
                        <h1 className="services-offered-title">Services</h1>
                        <p>Moore Advanced Solutions: Tailored consulting for education, for-profit, and non-profit organizations to optimize effectiveness and drive sustainable success.</p>
                    </div>
                    <div className="services-offered-list">
                        <div className="card main-service">
                            <div className="card__image">
                                <img src="./assets/icons/graduation.png" alt="S" height={'80'} width={'80'} />
                            </div>
                            <div className="card__copy">
                                <h1>HIGHER EDUCATION ACCREDITATION</h1>
                                <br></br>
                                <p>Moore Advanced Solutions provides strategic support for organizations related to the initiation, planning, implementation, and ongoing maintenance of accreditation.</p>

                                <div className="btn-link">
                                    <Link to='/services'>Click here to learn more about services offered</Link>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card__image">
                                <img src="./assets/icons/team.png" alt="S" height={'80'} width={'80'}/>
                            </div>
                            <div className="card__copy">
                                <h1>ORGANIZATIONAL EFFECTIVENESS</h1>
                                <br></br>
                                <p>Moore Advanced Solutions provides support and guidance to organizations in managing such challenges. Specifically, Moore Advanced Solutions provides overall assistance with various elements of organizational effectiveness from strategic planning or organizational capacity building.</p>

                                <div className="btn-link">
                                    <Link to='/services'>Click here to learn more about services offered</Link>
                                </div>

                            </div>
                        </div>
                        {/* <div className="card">
                            <div className="card__image">
                                <img src="./assets/icons/corporation.png" alt="non profit and corporate" height={'80'} width={'80'}/>
                            </div>
                            <div className="card__copy">
                                <h1>UNFAIR AND COMPETITIVE ADVANTAGE</h1>
                                <br></br>

                                <ul>
                                    <li>Personality- ability to work vertically and horizontally</li>
                                    <li>Track record with various types of accreditations and and quality initiatives</li>
                                    <li>Education- Research Area Quality Assurance and Social Justice</li>
                                </ul>

                            </div>
                        </div> */}
                    </div>
                </section>


                {/* Photo reference */}
                {/* <section className='photo-reference'>
                    <div className="photos">
                        <div className="photo">
                            <img src="https://images.unsplash.com/photo-1521139869420-edaae1bc7b9a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt=""/>
                        </div>
                        <div className="photo">
                            <img src="https://images.unsplash.com/photo-1521139869420-edaae1bc7b9a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt=""/>
                        </div>
                        <div className="photo">
                            <img src="https://images.unsplash.com/photo-1521139869420-edaae1bc7b9a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt=""/>
                        </div>
                    </div>
                    <div className="call-to-action">
                        <h1>The results are satisfying</h1>
                        <p>There so many companies that have benefited from working with us </p>
                        <button type="button" class="btn -primary">See more photos</button>
                        
                    </div>
                </section> */}

                                {/* testimonial */}
                {/* this section should come after the services section */}
                {/* <div className="testimonial">
                    <div className="text-wrapper">
                        <h2>Placeholder</h2>
                        <p className="test-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed lorem sed sapien ultrices ultrices sed sed sapien ultrices ultrices sed</p>
                    </div>

                    <div className="text-wrapper">
                        <h2>Placeholder</h2>
                        <p className="test-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed lorem sed sapien ultrices ultrices sed sed sapien ultrices ultrices sed</p>
                    </div>

                    <div className="text-wrapper">
                        <h2>Placeholder</h2>
                        <p className="test-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed lorem sed sapien ultrices ultrices sed sed sapien ultrices ultrices sed</p>
                    </div>

                    <div className="text-wrapper">
                        <h2>Placeholder</h2>
                        <p className="test-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed lorem sed sapien ultrices ultrices sed sed sapien ultrices ultrices sed</p>
                    </div>


                </div> */}


                {/* CTA */}
                <section className='cta-section'>
                    <div className='text-box'>
                        <h2>Let's work together</h2>
                        {/* <p>
                        Towards better organizational quality assurance and management.
                        </p> */}
                    </div>

                    <div className='link-box'>
                        <Link to='/contact-us'>Contact us</Link>
                    </div>
                </section>
                <Footer />
            </div>
        </div>
    );
}

export default Homepage;