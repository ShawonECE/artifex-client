import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const CraftRow = ({craft}) => {
    const navigate = useNavigate();
    const {item_name, subcategory_name, price, stock_status, _id} = craft;
    const handleViewDetails = () => {
        navigate(`/details/${_id}`);
    };
    return (
        <tr>
            <td>{item_name}</td>
            <td>{subcategory_name}</td>
            <td>${price}</td>
            <td>{stock_status}</td>
            <th>
                <button onClick={handleViewDetails} className="btn bg-slate-800 text-white btn-xs">Details</button>
            </th>
        </tr>
    );
};

CraftRow.propTypes = {
    craft: PropTypes.object.isRequired,
};

export default CraftRow;