import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const CategoriesInHome = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/categories")
        .then(res => res.json())
        .then(data => setCategories(data));
    }, []);
    return (
        <div className='mt-16'>
            <h1 className='text-center text-4xl font-bold'>Browse by Categories</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
                {
                    categories.map(category => <CategoryCard key={category._id} category={category}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default CategoriesInHome;