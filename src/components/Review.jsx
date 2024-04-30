import { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        fetch('https://artifex-server.vercel.app/reviews')
        .then(response => response.json())
        .then(data => {
            setReviews(data);
            setLoaded(true);
        });
    }, []);
    return (
        <div className="mt-16">
            <h1 className="text-center dark:text-white text-4xl font-bold">Our Inspirations</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
                {
                    !loaded &&
                    <>
                        <div className="skeleton h-32"></div>
                        <div className="skeleton h-32"></div>
                        <div className="skeleton h-32"></div>
                    </>
                }
                {
                    reviews.map((review, idx) => <ReviewCard key={idx} review={review}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Review;