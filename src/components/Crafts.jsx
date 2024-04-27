import { useLoaderData } from "react-router-dom";
import CraftCard from "./CraftCard";

const Crafts = () => {
    const items = useLoaderData();
    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-10">Here is all Crafts & Sculptures</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
                {
                    items.map(craft => <CraftCard key={craft._id} craft={craft}></CraftCard>)
                }
            </div>
        </div>
    );
};

export default Crafts;