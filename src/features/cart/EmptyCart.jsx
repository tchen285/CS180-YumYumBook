import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div className='py-4 py3'>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className='font-semibold mt-7'>Your cart is empty now...</p>
      <p className='font-semibold mt-7'>Go back to menu to add some food 😄</p>
    </div>
  );
}

export default EmptyCart;
