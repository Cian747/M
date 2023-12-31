// import { useState } from 'react'
// import Header from '../components/Header';
import LowerHeader from "../components/LowerHeader";
import NewHeader from "../components/NewHeader";
import Footer from "../components/Footer";

function Faq() {
  return (
    <>
      <NewHeader />
      <LowerHeader text="Frequently Asked Questions" />
      <div className="accordion-container">
        <div className="Faq">
          <div className="faq-box">
            <div className="faq">
              <input type="checkbox" className="faq-check" id="faq1" />

              <label className="faq-label" htmlFor="faq1">
                What is higher education accreditation?
              </label>

              <div className="faq-content">
                Accreditation is a process whereby an external body, either
                governmental, quasigovernmental, or private body evaluates the
                quality of higher education institutions as a whole or specific
                units within institutions (programs or courses) based on certain
                predetermined standards.
              </div>
            </div>

            <div className="faq">
              <input type="checkbox" className="faq-check" id="faq2" />

              <label className="faq-label" htmlFor="faq2">
                What is the difference between quality assurance and
                accreditation?
              </label>

              <div className="faq-content">
                Quality Assurance (QA) typically used to describe all forms of
                external monitoring and review. A variety of methods are used by
                organizations to assess quality when applying them to different
                units of analysis (institutions, programs, or courses) in higher
                education. Accreditation is method used by QA agencies to assess
                quality.
              </div>
            </div>

            <div className="faq">
              <input type="checkbox" className="faq-check" id="faq3" />

              <label className="faq-label" htmlFor="faq3">
                What is organizational effectiveness?
              </label>

              <div className="faq-content">
                Organizational effectiveness refers to how effectively an
                organization achieves its desired goals.
              </div>
            </div>

            <div className="faq">
              <input type="checkbox" className="faq-check" id="faq4" />

              <label className="faq-label" htmlFor="faq4">
                What is a quality management system?
              </label>

              <div className="faq-content">
                A quality management system is a systematic evaluation process
                that includes assessment of all individuals involved in
                accreditation or business processes. This periodic review
                evaluates the extent to which an organization is achieving the
                goals and objectives it has established and utilizes the results
                as a basis for making appropriate improvements. Assessments may
                include evaluations of the administrative polices and
                procedures; day-to-day program operations; and the products and
                services provided.
              </div>
            </div>

            <div className="faq">
              <input type="checkbox" className="faq-check" id="faq5" />

              <label className="faq-label" htmlFor="faq5">
                What is capacity building?
              </label>

              <div className="faq-content">
                Capacity building is the process of obtaining, improving, and
                retaining the facility or power of an individual or organization
                to produce, perform, and deploy the necessary skills, knowledge,
                tools, and other resources needed to do their jobs competently
                and effectively fulfill an organization’s objectives and
                mission. Capacity building allows organizations to develop new
                resources to perform business activities; to leverage available
                resources to the most effective use; and to maximize their
                strengths so as to achieve business goals.
              </div>
            </div>
          </div>

          <div className="faq">
            <input type="checkbox" className="faq-check" id="faq6" />

            <label className="faq-label" htmlFor="faq6">
              What is program evaluation?
            </label>

            <div className="faq-content">
              Program evaluation is a systematic method for collecting,
              analyzing, and using information to answer questions about
              projects, policies and programs particularly about their
              effectiveness and efficiency.
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Faq;
