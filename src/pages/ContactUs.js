import Footer from '../components/Footer';
import Header from '../components/Header';
// import LowerHeader from '../components/LowerHeader';

const ContactUs = () => {
  return (
    <>
      <Header />
      {/* <LowerHeader text='Contacts'/> */}
      <main className='contact-us container'>
        <div className='content'>
          <h1>Have any questions for us?</h1>
          <p>
            please contact us at:{' '}
            <a
              class='footer-link'
              href='mailto:info@mooreadvancedsolutions.com'
            >
              info@mooreadvancedsolutions.com
            </a>
          </p>
        </div>
      </main>
      <Footer />
      {/* <div className='contact-us-footer'>
        <Footer />
      </div> */}
    </>
  );
};

export default ContactUs;