import PropTypes from 'prop-types';
import Button from "../../ui/Button";
import { useFetcher } from 'react-router-dom';
import { updateOrder } from '../../service/apiRestaurant';

function UpdateOrder({ order }) {
    const fetcher = useFetcher();
    return (
        <fetcher.Form method='PATCH' className='text-right'>
            <Button type="primary">Go Priority?</Button>
        </fetcher.Form>
    );
}

UpdateOrder.propTypes = {
    order: PropTypes.object.isRequired,
};

export default UpdateOrder;

export async function action({ request, params }) {
    const data = { priority: true };
    await updateOrder(params.orderId, data);
    return null;
}
