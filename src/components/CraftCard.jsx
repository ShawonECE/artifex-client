import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import { CiStar } from "react-icons/ci";

const CraftCard = ({craft}) => {
    const navigate = useNavigate();
    const {item_name, processing_time, rating, subcategory_name, price, stock_status, image, short_description, _id} = craft;
    const handleViewDetails = () => {
        navigate(`/details/${_id}`);
    };
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-2xl font-bold">{item_name} <span className='text-base font-medium'>({subcategory_name})</span>
                </h2>
                <div className='flex items-center'>
                    <p className='text-lg font-semibold'>${price}</p>
                    <div className={`badge text-white ${stock_status === 'In stock' ? 'bg-orange-400' : 'bg-green-400'}`}>{stock_status}</div>
                </div>
                <p>{short_description}</p>
                <p className='text-lg font-medium'>Processing time: {processing_time}</p>
                <div className="flex items-center gap-1">
                    <CiStar className='text-xl' />
                    <p className='text-lg font-medium'>{rating}</p>
                </div>
                <div className="card-actions justify-end mt-5">
                    <button onClick={handleViewDetails} className='btn bg-slate-800 text-white'>View details</button>
                </div>
            </div>
        </div>
    );
};

CraftCard.propTypes = {
    craft: PropTypes.object.isRequired,
};

export default CraftCard;