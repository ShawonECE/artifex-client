import { useEffect, useState } from "react";
import FeaturedCard from "./FeaturedCard";

const Featured = () => {
    const [items, setItems] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        fetch('https://artifex-server.vercel.app/sculptures/featured')
        .then(res => res.json())
        .then(data => {
            setItems(data);
            setLoaded(true);
        });
    }, []);
    return (
        <div className="mt-16">
            <h1 className="text-center text-4xl font-bold dark:text-white">Featured Works & Artists</h1>
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
                    items.map(craft => <FeaturedCard key={craft._id} craft={craft}></FeaturedCard>)
                }
            </div>
        </div>
    );
};

export default Featured;