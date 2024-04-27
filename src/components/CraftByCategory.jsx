import { useLoaderData } from "react-router-dom";

const CraftByCategory = () => {
    const items = useLoaderData();
    return (
        <div>
            {items.length}
        </div>
    );
};

export default CraftByCategory;