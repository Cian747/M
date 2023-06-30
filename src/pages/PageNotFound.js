import NewHeader from "../components/NewHeader";


const PageNotFound = () => {
  return (
    <>
      <NewHeader />
      <main className='page-not-found content-wrapper'>
        <h1>404</h1>
        <p>We can't seem to find the page you are looking for!</p>
      </main>
    </>
  );
};

export default PageNotFound;
