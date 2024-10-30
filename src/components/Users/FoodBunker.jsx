import { useLoaderData } from "react-router-dom";
import Bunker from "./Bunker";

const FoodBunker = () => {
    const data = useLoaderData();
    const bunkers = data.meals;

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    bunkers.map(bunker => <Bunker key={bunker.idMeal} bunker={bunker}></Bunker>)
                }
            </div>
        </div>
    );
};

export default FoodBunker;