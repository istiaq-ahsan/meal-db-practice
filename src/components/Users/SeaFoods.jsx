import { useLoaderData } from "react-router-dom";
import SeaFood from "./SeaFood";

const SeaFoods = () => {
    const data = useLoaderData();
    const seaFoods = data.meals;
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {
                    seaFoods.map(seaFood => <SeaFood key={seaFood.idMeal} seaFood={seaFood}></SeaFood>)
                }
            </div>
        </div>
    );
};

export default SeaFoods;