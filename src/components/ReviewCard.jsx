import PropTypes from 'prop-types';

const ReviewCard = ({review}) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <p className='text-xl italic text-center'><span className='text-3xl font-bold'>&#34;</span>{review.Review}<span className='text-3xl font-bold'>&#34;</span></p>
            </div>
            <p className='text-center text-lg font-bold'>{review.CustomerName}</p>
            <p className='text-center mb-8'>{review.Location}</p>
        </div>
    );
};

ReviewCard.propTypes = {
    review: PropTypes.object.isRequired,
};

export default ReviewCard;