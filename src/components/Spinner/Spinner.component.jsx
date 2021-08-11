const Spinner = () => {
  return (
    <>
      <div id='initial-loading'>
        <div className='spinner'>
          <div className='bounce' />
          <div className='bounce' />
          <div className='bounce' />
        </div>
      </div>
    </>
  );
};

export default Spinner;
