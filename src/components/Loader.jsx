import LoaderImg from '../assets/Spinner.gif';

const Loader = () => {
  return (
    <>
      <img className=" d-block m-auto  " src={LoaderImg} alt="loader" style={{width: '200px'}} />
    </>
  );
};

export default Loader;
