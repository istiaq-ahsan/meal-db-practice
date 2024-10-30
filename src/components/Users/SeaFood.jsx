
const SeaFood = ({ seaFood }) => {
    const { strMeal, strMealThumb } = seaFood;
    return (
        <div>
            <div className="card w-auto border flex justify-center items-center">
                <figure className="">
                    <img className="p-2"
                        src={strMealThumb}
                        alt="food" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{strMeal}</h2>
                </div>
            </div>
        </div>
    );
};

export default SeaFood;