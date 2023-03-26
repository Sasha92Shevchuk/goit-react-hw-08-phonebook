import { Circles } from 'react-loader-spinner';
import { LoaderBox } from './Loader.styled';
const Loader = ({ size = 80 }) => {
  return (
    <LoaderBox>
      <Circles
        height={size}
        width={size}
        color="#bbd1bdfc"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderBox>
  );
};
export default Loader;
