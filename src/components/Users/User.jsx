import { Link } from "react-router-dom";

const User = ({ user }) => {

    const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } = user;

    return (
        <div>
            <div className="card w-auto border flex justify-center items-center">
                <figure>
                    <img className="p-2"
                        src={strCategoryThumb}
                        alt="food" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{strCategory}</h2>
                    <p className="max-h-24 flex-grow overflow-y-scroll">{strCategoryDescription}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/users/${strCategory}`}>
                            <button className="btn bg-red-500 mt-5 text-white">See More...</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;