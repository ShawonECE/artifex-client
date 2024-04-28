import { useLoaderData } from "react-router-dom";
import CraftCard from "./CraftCard";
import { Helmet } from "react-helmet-async";

const CraftByCategory = () => {
    const items = useLoaderData();
    console.log(items);
    return (
        <div>
            <Helmet>
                <title>Artifex | {items[0].subcategory_name}</title>
            </Helmet>
            <h1 className="text-3xl font-bold text-center mt-10">Explore {items[0].subcategory_name}s</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
                {
                    items.map(craft => <CraftCard key={craft._id} craft={craft}></CraftCard>)
                }
            </div>
        </div>
    );
};

export default CraftByCategory;