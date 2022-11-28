import { ColorRing } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ColorRing
      visible={true}
      height="40"
      width="40"
      ariaLabel="blocks-loading"
      wrapperClass="blocks-wrapper"
      colors={['#8185ce', '#B2A3B5', '#7773a8', '#51E5FF', '#429EA6']}
    />
  );
};

export default Loader;
