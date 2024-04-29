import PropTypes from 'prop-types';

const FeaturedCard = ({craft}) => {
    const {image, artist, artist_img} = craft;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="craft" /></figure>
            <div className='card-body'>
                <div className="flex gap-5">
                    <div className="avatar">
                        <div className="w-20 rounded-full">
                            <img src={artist_img} />
                        </div>
                    </div>
                    <div className='my-auto'>
                        <p>Artist</p>
                        <h3 className='text-lg font-semibold'>{artist}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

FeaturedCard.propTypes = {
    craft: PropTypes.object.isRequired,
};

export default FeaturedCard;