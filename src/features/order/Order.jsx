// id: IIDSAT
import PropTypes from 'prop-types';
import { Link, useFetcher } from 'react-router-dom';
import OrderItem from './OrderItem';
import { getOrder } from '../../service/apiRestaurant';
import { useLoaderData } from 'react-router-dom';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers';
import { useEffect } from 'react';
import React from 'react';

function Order() {
  const order = useLoaderData();

  const fetcher = useFetcher();

  useEffect(
    () => {
      if (!fetcher.data && fetcher.state === 'idle') {
        fetcher.load('/menu');
      }
    }, [fetcher]
  );

  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="px-4 py-6 space-y-8">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h2 className="text-xl font-semibold">Order #{id} status</h2>

        <div className="space-x-2">
          {priority && (
            <span className="bg-red-500 rounded-full py-1 px-3 text-sm font-semibold uppercase text-red-50 tracking-wide">
              Priority
            </span>
          )}
          <span className="bg-green-500 rounded-full py-1 px-3 text-sm font-semibold uppercase text-red-50 tracking-wide">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between flex-wrap gap-2 bg-stone-200 py-5 px-6">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p className="text-xs text-stone-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className='divide-y dive-stone-200 border-b border-t'>
        {cart.map((item) => (
          <OrderItem item={item} key={item.pizzaId} isLoadingIngredients={fetcher.state === 'loading'}
          ingredients={fetcher.data?.find((el) => el.id === item.pizzaId).ingredients ?? []} />
        ))}
      </ul>

      <div className="space-y-2 bg-stone-200 py-5 px-6">
        <p className="text-sm font-medium text-stone-600">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="font-bold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
}

Order.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  priority: PropTypes.bool.isRequired,
  priorityPrice: PropTypes.number.isRequired,
  orderPrice: PropTypes.number.isRequired,
  estimatedDelivery: PropTypes.instanceOf(Date).isRequired,
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      totalPrice: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
