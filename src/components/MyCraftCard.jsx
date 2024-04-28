import PropTypes from 'prop-types';
import { CiStar } from 'react-icons/ci';

const MyCraftCard = ({ craft, handleUpdate, handleDelete }) => {
    const { image, item_name, price, rating, customization, stock_status, short_description, _id } = craft;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Craft" /></figure>
            <div className="card-body">
                <h2 className="text-2xl font-bold">{item_name}</h2>
                <div className='flex items-center'>
                    <p className='text-lg font-semibold'>${price}</p>
                    <div className={`badge text-white ${stock_status === 'In stock' ? 'bg-orange-400' : 'bg-green-400'}`}>{stock_status}</div>
                </div>
                <p>{short_description}</p>
                <p className='text-lg font-medium'>Customizable: {customization}</p>
                <div className="flex items-center gap-1">
                    <CiStar className='text-xl' />
                    <p className='text-lg font-medium'>{rating}</p>
                </div>
                <div className="card-actions justify-end">
                    <button onClick={() => handleUpdate(_id)} className="btn bg-slate-800 text-white">Update</button>
                    <button onClick={() => handleDelete(_id)} className="btn bg-slate-800 text-white">Delete</button>
                </div>
            </div>
        </div>
    );
};

MyCraftCard.propTypes = {
    craft: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleUpdate: PropTypes.func.isRequired,
};

export default MyCraftCard;