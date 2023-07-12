import Footer from '../components/Footer';
// import Header from '../components/Header';
// import LowerHeader from '../components/LowerHeader';
import NewHeader from '../components/NewHeader';

const ContactUs = () => {
  return (
    <>
      <NewHeader />
      {/* <LowerHeader text='Contacts'/> */}
      <main className='contact-us container'>
        <div className='content'>
          <h1>Have any questions?</h1>
          <p>
            Please contact us at:{' '}
            <a
              className='footer-link'
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
