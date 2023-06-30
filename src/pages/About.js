import { Link } from 'react-router-dom';
// import Header from '../components/Header';
import LowerHeader from '../components/LowerHeader';
import Footer from '../components/Footer';
import NewHeader from "../components/NewHeader";


const ENGAGEMENTS = [
  {
    title: 'Co-Presenter',
    content: `, “Evaluation of Challenges for the
        Accreditation and Oversight of Third-Party Ed-Tech Providers.”
        International Network for Quality Assurance Agencies in Higher Education
        Annual Convention, June, 2023 Astana, Kazakhstan`,
  },
  {
    title: 'Contributing Expert Consultant',
    content: `, “Project A457: Measures and mechanisms for addressing racism and
          racial discrimination in United Nations system organization” Joint
          Inspection Unit of the United Nations System, March, 2023`,
  },
  {
    title: 'Co-Presenter',
    content: `, “An Integrated Approach to People
        Development across the QA Organization.” International Network for
        Quality Assurance Agencies in Higher Education Annual Forum, June, 2022
        Mexico City, Mexico`,
  },
  {
    title: 'External Reviewer',
    content: ` for the Health and Medicine Division
        of the National Academies of Sciences, Engineering, and Medicine’s
        publication- Exploring a Culture of Fairness, Respect, and Anti-Racism
        in Health Professions Education: Educational Product of a Workshop
        Series. May 2022`,
  },

  {
    title: 'Panelist',
    content: `, “The Role of Accreditation in Advancing
        Diversity, Equity, and Inclusion.” Association of Schools and Programs
        of Public Health Annual Meeting, March 2022`,
  },
  {
    title: 'Presenter',
    content: `, “Exploring a Culture of Fairness, Respect,
        and Anti-racism Through Diversity, Equity, and Inclusion in Health
        Professions Education: A workshop on leveraging accreditation to improve
        DEI and eliminate racism in health professions education.” Global Forum
        on Innovation in Health Professional Education, National Academies of
        Sciences, Engineering, and Medicine, February 2022, Virtual`,
  },
  {
    title: 'Board of Directors',
    content: `, Spooky Action Theater, Washington, DC, 2020-2022`,
  },
  {
    title: 'Leadership Council Member',
    content: `, Open Society Institute-Baltimore, Baltimore, MD, 2014-2022`,
  },
  {
    title: 'Keynote Presenter',
    content: `, “Moving toward a more socially
        conscious oversight of quality: social justice and quality assurance,”
        Commission on Sport Management Annual Accreditation Conference, February
        2021, Virtual`,
  },
  {
    title: 'Appeal Board Member (Volunteer)',
    content: `, Accreditation
        Review Commission on Education for the Physician Assistant`,
  },
  {
    title: 'Panel Facilitator',
    content: `, “Data, Accreditation & Equity”,
        Council for Higher Education Accreditation Conference, January 2020,
        Washington, DC, USA`,
  },
  {
    title: 'Co-Presenter',
    content: `, Assessing and Ensuring Board
        Accountability, Association for Specialized and Professional Accreditors
        Conference, September 2019, Arlington, VA, USA`,
  },
  {
    title: 'Guest Speaker',
    content: `, “Public/Private Partnership in
        International Education”, American University Graduate Seminar, November
        2014, Washington, DC, USA`,
  },
  {
    title: 'Panelist',
    content: `, Overview of Higher Education Quality
        Assurance and Accreditation, Morgan State University Graduate Seminar,
        October 2012, Baltimore, MD, USA`,
  },
];

function ListItem({ title, content }) {
  return (
    <li>
      <p>
        <strong>{title}</strong>
        {content}
      </p>
    </li>
  );
}

const About = () => {
  return (
    <>
      <NewHeader />
      <LowerHeader text='About' />
      <main className='container'>
        <section className='founder-section mb-section '>
          <div className='founder-section-header'>
            <div className='text-box'>
              {/* <h4>Principal Consultant</h4> */}
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
              qualitative improvements in their educational, organizational, and
              quality assurance practices. She most recently served as the Chief
              Accreditation Officer for the American Speech-Language-Hearing
              Association and has held leadership positions overseeing and/or
              supporting quality assurance activities for higher education
              institutions in the US, Ecuador, Italy, New Zealand, and Turkey.
              Additionally, she has served in advisory leadership roles for
              non-profit and private sector organizations.
            </p>
            <p>
              Ms. Moore is currently completing a Doctorate of Education from
              the University of the Liverpool, Liverpool, UK. She holds a Master
              of Public Policy degree from the University of Maryland, College
              Park, MD, USA; a Postgraduate Certificate in Business
              Administration from the Georgetown University School of Continuing
              Studies, Washington, DC, USA; and a Bachelor of Arts degree from
              the University of Georgia, Athens, GA, USA. In addition to Ms.
              Moore, clients benefit from additional resources via an extensive
              professional network that she has developed over her career
              consisting of experienced professionals from a variety of
              disciplines. These resources can be leveraged as part of a
              collaborative team when required by client needs.
            </p>
          </div>
        </section>
        <section className='prof-engagements-section mb-section'>
          <h4>Professional Engagements and Service</h4>
          <ul>
            {ENGAGEMENTS.map((engagement) => {
              let { logoName, title, content } = engagement;
              return (
                <ListItem logoName={logoName} title={title} content={content} />
              );
            })}
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
                {/* <img src='./assets/icons/check.svg' alt='check icon' /> */}
                <div>
                  <h3>Trustworthy</h3>
                  <p>Reliable, dependable, and honest</p>
                </div>
              </li>
              <li>
                {/* <img src='./assets/icons/check.svg' alt='check icon' /> */}
                <div>
                  <h3>Proven Track record</h3>
                  <p>
                    Proven record with various types of accreditations and
                    quality initiatives
                  </p>
                </div>
              </li>
              <li>
                {/* <img src='./assets/icons/check.svg' alt='check icon' /> */}
                <div>
                  <h3>Experiences</h3>
                  <ul className='nested'>
                    <li>
                      <img src='./assets/icons/check.svg' alt='check icon' />
                      <p>
                        US and international quality assurance and accreditation
                        at higher education institutions, quality agencies, and
                        for profit and non-profit organizations
                      </p>
                    </li>
                    <li>
                      <img src='./assets/icons/check.svg' alt='check icon' />
                      <p>
                        Organizational effectiveness initiatives at non-profit
                        and for-profit organizations
                      </p>
                    </li>
                  </ul>
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
