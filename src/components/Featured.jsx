import { useEffect, useState } from "react";
import FeaturedCard from "./FeaturedCard";

const Featured = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/sculptures/featured')
        .then(res => res.json())
        .then(data => setItems(data));
    }, []);
    return (
        <div className="mt-16">
            <h1 className="text-center text-4xl font-bold">Featured Works & Artists</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
                {
                    items.map(craft => <FeaturedCard key={craft._id} craft={craft}></FeaturedCard>)
                }
            </div>
        </div>
    );
};

export default Featured;