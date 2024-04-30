import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import CraftRow from "./CraftRow";

const Crafts = () => {
    const items = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>Artifex | Crafts</title>
            </Helmet>
            <h1 className="text-3xl font-bold text-center mt-10">Here is all Crafts & Sculptures</h1>
            <div className="overflow-x-auto mt-8">
                <table className="table dark:bg-gray-800 dark:text-white">
                    <thead>
                        <tr className="dark:text-white">
                            <th>Item Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(craft => <CraftRow key={craft._id} craft={craft}></CraftRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Crafts;