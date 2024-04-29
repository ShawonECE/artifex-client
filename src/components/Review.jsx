import reviews from '../assets/review';
import ReviewCard from './ReviewCard';

const Review = () => {
    return (
        <div className="mt-16">
            <h1 className="text-center dark:text-white text-4xl font-bold">Our Inspirations</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
                {
                    reviews.map((review, idx) => <ReviewCard key={idx} review={review}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Review;