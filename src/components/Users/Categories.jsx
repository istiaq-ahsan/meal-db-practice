import { useLoaderData } from "react-router-dom";
import Category from "./Category";

const Categories = () => {
    const data = useLoaderData();
    const categories = data.meals;
    console.log(categories);
    return (
        <div>
            <h2>total category</h2>
            {
                categories.map(category => <Category key={category.idMeal} category={category}></Category>)
            }
        </div>
    );
};

export default Categories;