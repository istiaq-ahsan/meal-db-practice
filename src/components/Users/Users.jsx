import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {

    const data = useLoaderData();
    const users = data.categories;

    return (
        <div className="container mx-auto">
            <h2 className="text-center text-3xl font-bold my-10">All Category Food</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {
                    users.map(user => <User key={user.idCategory} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;