import Header from "../components/Header";
import Footer from '../components/Footer';
import LowerHeader from "../components/LowerHeader";
// import { Link } from "react-router-dom";


function Services() {
    return(
        <div>
            <Header />
            <LowerHeader text='SERVICES'/>
            {/* <section className="services-intro">
                <div className="services-intro-text">
                    <h5>SERVICES</h5>
                    <h1>Our Capabilities</h1>
                    <hr></hr>
                    <p>I consult with organizations to improve their organizational
                    effectiveness to reach their organizational and business goals.</p>
                </div>
            </section> */}
            <section className="services-container container">
                <div className="service">
                    <div className="service-image">
                        <img src='./assets/images/alexander-grey-eMP4sYPJ9x0-unsplash.jpg' alt="" width={'500'} height={'500'}/>
                    </div>
                    <div className="service-content">
                        <div className="service-title">
                            <h2>HIGHER EDUCATION ACCREDITATION</h2>
                        </div>
                        <p>Higher education institutions have a variety of needs accreditation needs. <i>Moore Advanced Solutions</i> can assist your institution with the following:</p>
                        <br></br>
                            <ul>
                                <li>Academic Program Development and Assessment</li>
                                <li>Annual Reports</li>
                                <li>Institutional and Programmatic Readiness Analysis against Selected Standards</li>
                                <li>Institutional Policy Development</li>
                                <li>Ongoing Accreditation Compliance Monitoring</li>
                                <li>Organizational Leadership and Management Coaching</li>
                                <li>Professional Development and Training</li>
                                <li>Quality Assurance and Management System Development</li>
                                <li>Initial or Re-Evaluation Self-Study Development</li>
                                <li>Site Visit Preparation</li>
                                <li>Site visit Responses</li>

                            </ul>
                            {/* <div className='cta-box'>
                                <Link to='/contact-us'>Contact us</Link>
                            </div> */}
                            {/* <div>
                              <button type="button" name="" id="" class="btn btn-primary"><Link to='/contact-us'>Reach out</Link></button>
                            </div> */}
                    </div>

                </div>

                <div className="service primary">
                    <div className="service-content">
                        <div className="service-title">
                            <h2>ORGANIZATIONAL EFFECTIVENESS</h2>
                        </div>
                        <p>Organizational effectiveness refers to how effectively an organization achieves its desired goals. As organizations experience growth and expansion, unique
                            challenges and complexities may occur. <i>Moore Advanced Solutions</i> can provide support to manage such challenge by assisting your organizations with the
                            following:</p>
                            <br></br>
                            <ul>
                                <li>Capacity Building</li>
                                <li>Goal setting</li>
                                <li>Organizational Leadership and Management Coaching</li>
                                <li>Professional Development and Training</li>
                                <li>Quality Management System Development and Implementation</li>
                                <li>Strategic Planning and Implementation</li>
                            </ul>
                            {/* <div>
                              <button type="button" name="" id="" class="btn btn-primary"><Link to='/contact-us'>Reach out</Link></button>
                            </div> */}
                    </div>
                    <div className="service-image">
                        <img src='./assets/images/christina-wocintechchat-com-jzonFmreWok-unsplash.jpg' alt="" width={'600'} height={'400'}/>
                    </div>


                </div>

            </section>
            <Footer />
        </div>
    );
}

export default Services;