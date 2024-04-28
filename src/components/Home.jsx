import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import CategoriesInHome from "./CategoriesInHome";
import CraftsInHome from "./CraftsInHome";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Artifex | Home</title>
            </Helmet>
            <Banner></Banner>
            <CraftsInHome></CraftsInHome>
            <CategoriesInHome></CategoriesInHome>
        </div>
    );
};

export default Home;