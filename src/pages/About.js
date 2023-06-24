import { Link } from 'react-router-dom';
import Header from '../components/Header';
import LowerHeader from '../components/LowerHeader';
import Footer from '../components/Footer';

// const ENGAGEMENTS = [
//   {
//     title: 'Co-Presenter',
//     content: `“Evaluation of Challenges for the
//         Accreditation and Oversight of Third-Party Ed-Tech Providers.”
//         International Network for Quality Assurance Agencies in Higher Education
//         Annual Convention, June, 2023 Astana, Kazakhstan`,
//     logoName: 'inqaahe.png',
//   },
//   {
//     title: 'Contributing Expert Consultant',
//     content: `“Project A457: Measures and mechanisms for addressing racism and
//           racial discrimination in United Nations system organization” Joint
//           Inspection Unit of the United Nations System, March, 2023`,
//     logoName: 'un.svg',
//   },
//   {
//     title: 'Co-Presenter',
//     content: `“An Integrated Approach to People
//         Development across the QA Organization.” International Network for
//         Quality Assurance Agencies in Higher Education Annual Forum, June, 2022
//         Mexico City, Mexico`,
//     logoName: 'ASPPH.png',
//   },
//   {
//     title: 'External Reviewer',
//     content: `for the Health and Medicine Division
//         of the National Academies of Sciences, Engineering, and Medicine’s
//         publication- Exploring a Culture of Fairness, Respect, and Anti-Racism
//         in Health Professions Education: Educational Product of a Workshop
//         Series. May 2022`,
//     logoName: '',
//   },

//   {
//     title: 'Panelist',
//     content: `“The Role of Accreditation in Advancing
//         Diversity, Equity, and Inclusion.” Association of Schools and Programs
//         of Public Health Annual Meeting, March 2022`,
//     logoName: '',
//   },
//   {
//     title: 'Presenter',
//     content: `“Exploring a Culture of Fairness, Respect,
//         and Anti-racism Through Diversity, Equity, and Inclusion in Health
//         Professions Education: A workshop on leveraging accreditation to improve
//         DEI and eliminate racism in health professions education.” Global Forum
//         on Innovation in Health Professional Education, National Academies of
//         Sciences, Engineering, and Medicine, February 2022, Virtual`,
//     logoName: '',
//   },
//   {
//     title: 'Keynote Presenter',
//     content: `“Moving toward a more socially
//         conscious oversight of quality: social justice and quality assurance,”
//         Commission on Sport Management Annual Accreditation Conference, February
//         2021, Virtual`,
//     logoName: '',
//   },
//   {
//     title: '2021 Appeal Board Member (Volunteer)',
//     content: `Accreditation
//         Review Commission on Education for the Physician Assistant`,
//     logoName: '',
//   },
//   {
//     title: 'Panel Facilitator',
//     content: `“Data, Accreditation & Equity”,
//         Council for Higher Education Accreditation Conference, January 2020,
//         Washington, DC, USA`,
//     logoName: '',
//   },
//   {
//     title: 'Co-Presenter',
//     content: `Assessing and Ensuring Board
//         Accountability, Association for Specialized and Professional Accreditors
//         Conference, September 2019, Arlington, VA, USA`,
//     logoName: '',
//   },
//   {
//     title: 'Guest Speaker',
//     content: `“Public/Private Partnership in
//         International Education”, American University Graduate Seminar, November
//         2014, Washington, DC, USA`,
//     logoName: '',
//   },
//   {
//     title: 'Panelist',
//     content: `Overview of Higher Education Quality
//         Assurance and Accreditation, Morgan State University Graduate Seminar,
//         October 2012, Baltimore, MD, USA`,
//     logoName: '',
//   },
//   {
//     title: 'Authored article entitled',
//     content: `“Lessons on Civic Education
//         from the Past and the Present.” Around the Circle: Research & Practice.
//         Volume 3, Issue 1. August 2005.`,
//     logoName: '',
//   },
//   {
//     title: 'Co-authored',
//     content: `published research study using regression
//         statistics entitled “Participation in Sports and Civic Engagement.”
//         February 2006. CIRCLE Fact Sheet`,
//     logoName: '',
//   },
// ];

// function ListItem({ logoName = null, title, content }) {
//   return (
//     <li>
//       <img src={`assets/client-logos/${logoName}`} alt='client logo' />

//       <h5>{title}</h5>
//       <p>{content}</p>
//     </li>
//   );
// }

const About = () => {
  return (
    <>
      <Header />
      <LowerHeader text='About' />
      <main className='container'>
        <section className='instructions-section mb-section '>
          <h3>We Support Organizations</h3>
          {/* <p>
            At <em>Moore Advanced Solutions</em> we offer services that support
            organizations with their quality assurance, quality management and
            quality improvement needs to successfully achieve their business
            and/or organizational objectives.
          </p> */}
          <p>
            We offer services that support organizations with their quality
            assurance, quality management and quality improvement needs to
            successfully achieve their business and/or organizational
            objectives.
          </p>
        </section>
        <section className='founder-section mb-section '>
          <div className='founder-section-header'>
            <div className='text-box'>
              <h4>Principal Consultant</h4>
              <h3>Kimberlee Moore</h3>
              <p>Principal Consultant</p>
            </div>
            <div className='img-box'>
              <img
                src='./assets/images/default-user.jpg'
                alt='moore advance solution founder'
              />
            </div>
          </div>
          <div className='founder-section-content'>
            <p>

              Ms. Kimberlee Moore has almost two decades of experience in global
              higher education quality assurance and accreditation. She has
              advised individuals and organizations on developing and sustaining
              qualitative improvements in their educational/organizational and
              quality assurance practices. She most recently served as the Chief
              Accreditation Officer for the American Speech-Language-Hearing
              Association and has held leadership positions overseeing and/or
              supporting quality assurance activities for higher education
              institutions in the US, Ecuador, Italy, New Zealand, and Turkey.
              Additionally, she has served in advisory leadership roles for
              non-profit and private sector organizations.
            </p>
          </div>
        </section>
        <section className='prof-engagements-section mb-section'>
          <h4>Professional Engagements and Service</h4>
          {/* <ul>
            {ENGAGEMENTS.map((engagement) => {
              let { logoName, title, content } = engagement;
              return (
                <ListItem logoName={logoName} title={title} content={content} />
              );
            })}
          </ul> */}
          <ul>
            <li>
              <p>
                <strong>Co-Presenter</strong>, “Evaluation of Challenges for the
                Accreditation and Oversight of Third-Party Ed-Tech Providers.”
                International Network for Quality Assurance Agencies in Higher
                Education Annual Convention, June, 2023 Astana, Kazakhstan
              </p>
            </li>
            <li>
              <img src='assets/client-logos/un.svg' alt='united nations logo' />
              <div>
                <h5>Contributing Expert Consultant</h5>
                <p>
                  “Project A457: Measures and mechanisms for addressing racism
                  and racial discrimination in United Nations system
                  organization” Joint Inspection Unit of the United Nations
                  System, March, 2023
                </p>
              </div>
            </li>
            <li>
              <p>
                <strong>Co-Presenter</strong>, “An Integrated Approach to People
                Development across the QA Organization.” International Network
                for Quality Assurance Agencies in Higher Education Annual Forum,
                June, 2022 Mexico City, Mexico
              </p>
            </li>
            <li>
              <p>
                <strong>External Reviewer</strong> for the Health and Medicine
                Division of the National Academies of Sciences, Engineering, and
                Medicine’s publication- Exploring a Culture of Fairness,
                Respect, and Anti-Racism in Health Professions Education:
                Educational Product of a Workshop Series. May 2022
              </p>
            </li>
            <li>
              <p>
                <strong>Panelist</strong>, “The Role of Accreditation in
                Advancing Diversity, Equity, and Inclusion.” Association of
                Schools and Programs of Public Health Annual Meeting, March 2022
              </p>
            </li>
            <li>
              <p>
                <strong>Presenter</strong>, “Exploring a Culture of Fairness,
                Respect, and Anti-racism Through Diversity, Equity, and
                Inclusion in Health Professions Education: A workshop on
                leveraging accreditation to improve DEI and eliminate racism in
                health professions education.” Global Forum on Innovation in
                Health Professional Education, National Academies of Sciences,
                Engineering, and Medicine, February 2022, Virtual
              </p>
            </li>
            <li>
              <p>
                <strong>Keynote Presenter</strong>, “Moving toward a more
                socially conscious oversight of quality: social justice and
                quality assurance,” Commission on Sport Management Annual
                Accreditation Conference, February 2021, Virtual{' '}
              </p>
            </li>
            <li>
              <p>
                <strong>2021 Appeal Board Member (Volunteer)</strong>,
                Accreditation Review Commission on Education for the Physician
                Assistant
              </p>
            </li>
            <li>
              <p>
                <strong>Panel Facilitator</strong>, “Data, Accreditation &
                Equity”, Council for Higher Education Accreditation Conference,
                January 2020, Washington, DC, USA
              </p>
            </li>
            <li>
              <p>
                <strong>Co-Presenter</strong>, Assessing and Ensuring Board
                Accountability, Association for Specialized and Professional
                Accreditors Conference, September 2019, Arlington, VA, USA
              </p>
            </li>
            <li>
              <p>
                <strong>Guest Speaker</strong>, “Public/Private Partnership in
                International Education”, American University Graduate Seminar,
                November 2014, Washington, DC, USA
              </p>
            </li>
            <li>
              <p>
                <strong>Panelist</strong>, Overview of Higher Education Quality
                Assurance and Accreditation, Morgan State University Graduate
                Seminar, October 2012, Baltimore, MD, USA{' '}
              </p>
            </li>
            <li>
              <p>
                <strong>Authored article entitled</strong>, “Lessons on Civic
                Education from the Past and the Present.” Around the Circle:
                Research & Practice. Volume 3, Issue 1. August 2005.
              </p>
            </li>
            <li>
              <p>
                <strong>Co-authored</strong> published research study using
                regression statistics entitled “Participation in Sports and
                Civic Engagement.” February 2006. CIRCLE Fact Sheet
              </p>
            </li>
          </ul>
        </section>
        {/* <section className='clientel-section mb-section '>
          <h2>Services</h2>
          <div>
            <div>
              <img src='./assets/images/degree.png' alt='check icon' />
              <h3>Higher Education</h3>
              <p>
                Institutions of higher education have a variety of needs
                accreditation needs. MAS provides strategic partnership for
                organizations related to the initiation, planning,
                implementation, and ongoing maintenance of accreditation.
              </p>
            </div>
            <div>
              <img src='./assets/images/corporate.png' alt='check icon' />
              <h3>Organizational Effectiveness</h3>
              <p>
                Organizational effectiveness refers to how effectively an
                organization achieves its desired goals. As organizations
                experience growth and expansion, unique challenges and
                complexities may occur. MAS provides support and guidance to
                organizations in managing such challenges.
              </p>
            </div>
          </div>
        </section> */}

        <section className='why-us-section mb-section '>
          <div className='text-box'>
            <h3>Why Us</h3>
            {/* <h2>Improving Organizational Effectiveness </h2> */}
            <ul>
              <li>
                <img src='./assets/icons/check.svg' alt='check icon' />
                <div>
                  <h3>Trustworthy</h3>
                  <p>Reliable, dependable, and honest</p>
                </div>
              </li>
              <li>
                <img src='./assets/icons/check.svg' alt='check icon' />
                <div>
                  <h3>Proven Track record</h3>
                  <p>
                    Proven record with various types of accreditations and
                    quality initiatives
                  </p>
                </div>
              </li>
              <li>
                <img src='./assets/icons/check.svg' alt='check icon' />
                <div>
                  <h3>Experiences</h3>
                  <p>
                    US and international quality assurance and accreditation at
                    higher education institutions, quality agencies, and
                    non-profit organizations. Organizational effectiveness
                    initiatives at non-profit and for-profit organizations
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className='image-box'>
            <img
              src='./assets/images/laptop.jpg'
              alt='woman working with a laptop'
            />
          </div>
        </section>

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
      </main>
      <Footer />
    </>
  );
};

export default About;
