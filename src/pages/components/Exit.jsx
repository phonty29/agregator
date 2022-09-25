import {useDispatch} from 'react-redux';
import { closeModal } from '../../rtk/modalSlice';

const Exit = () => {
  const dispatch = useDispatch();

  return (
    <div className="exit" onClick={() => {dispatch(closeModal())}}></div>      
  );
}

export default Exit;