import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const CategoryCard = ({category}) => {
    const navigate = useNavigate();
    return (
        <div className="card bg-base-100 shadow-xl cursor-pointer" onClick={() => navigate(`crafts-by-category/${category.category}`)}>
            <figure><img src={category.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-center text-2xl font-semibold">{category.category}</h2>
            </div>
        </div>
    );
};

CategoryCard.propTypes = {
    category: PropTypes.object.isRequired
};

export default CategoryCard;