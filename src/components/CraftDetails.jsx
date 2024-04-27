import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const CraftDetails = () => {
    const craft = useLoaderData();
    const {image, item_name, subcategory_name, short_description, price, rating, customization, processing_time, stock_status} = craft;
    return (
        <div className="mt-6">
            <Helmet>
                <title>Estate Details</title>
            </Helmet>
            <div className="flex justify-between">
                <h1 className="text-3xl font-semibold">{item_name} <span className="text-lg font-medium">({subcategory_name})</span></h1>
                <h1 className="text-3xl font-bold">${price}</h1>
            </div>
            <div className="flex justify-between mt-3">
                <div className="flex items-center gap-3">
                    <div className="badge badge-success gap-2 text-white p-3">{stock_status}</div>
                    <div className="badge badge-outline gap-2 p-3">
                        <p>Rating: {rating}</p>
                    </div>
                </div>
            </div>
            <img src={image} alt="" className="w-full rounded-3xl mt-8" />
            <h2 className="text-2xl font-semibold mt-8 mb-2">Description</h2>
            <hr />
            <p className="text-lg mt-3">{short_description}</p>
            <h2 className="text-2xl font-semibold mt-8 mb-2">Others</h2>
            <hr />
            <ul className="mt-3">
                <li className="text-lg">Processing time: {processing_time}</li>
                <li className="text-lg">Customizable: {customization}</li>
            </ul>
        </div>
    );
};

export default CraftDetails;