
const Bunker = ({ bunker }) => {
    const { strMeal, strMealThumb } = bunker;
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

export default Bunker;