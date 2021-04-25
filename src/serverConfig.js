const getServerURL = () => {
    if (process.env.NODE_ENV === 'production') {
      //return 'https://server.keep.id';
      return 'https://my-carbon-footprint.herokuapp.com/'
    }
    return 'http://localhost:3000';
  };
  
export default getServerURL;