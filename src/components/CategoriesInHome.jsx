import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import TypeWriting from "./TypeWriting";

const CategoriesInHome = () => {
    const [categories, setCategories] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        fetch("https://artifex-server.vercel.app/categories")
        .then(res => res.json())
        .then(data => {
            setCategories(data);
            setLoaded(true);
    });
    }, []);
    return (
        <div className='mt-16'>
            <TypeWriting text="Browse by Categories" keywords={['Metal Sculpture', 'Clay Sculpture', 'Stone Sculpture', 'Natural Material Sculpture', 'Beaded Sculpture']}></TypeWriting>
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
                    categories.map(category => <CategoryCard key={category._id} category={category}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default CategoriesInHome;