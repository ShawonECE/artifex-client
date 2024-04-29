import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import CategoriesInHome from "./CategoriesInHome";
import CraftsInHome from "./CraftsInHome";
import Featured from "./Featured";
import Review from "./Review";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Artifex | Home</title>
            </Helmet>
            <Banner></Banner>
            <CraftsInHome></CraftsInHome>
            <CategoriesInHome></CategoriesInHome>
            <Featured></Featured>
            <Review></Review>
        </div>
    );
};

export default Home;