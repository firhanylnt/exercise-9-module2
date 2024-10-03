import { useState, useEffect } from "react";
import axios from "axios";
import IUser from "../../interface/user.interface";

function Home() {
    const [users, setUsers] = useState<IUser[]>([]);

    const getUsers = async () => {
        try {
            const { data } = await axios.get('https://66fd3bbcc3a184a84d1990d8.mockapi.io/api/v1/users');
            setUsers(data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">User List</h1>
            <div className="container mx-auto px-4">
                <div className="overflow-x-auto">
                    <table className="table-auto w-full bg-white rounded-lg shadow-md overflow-hidden">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Name</th>
                                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Email</th>
                                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users?.map((item) => (
                                <tr key={item.id} className="border-t border-gray-200">
                                    <td className="px-4 py-2 text-left text-sm text-gray-700">{item.name}</td>
                                    <td className="px-4 py-2 text-left text-sm text-gray-700">{item.email}</td>
                                    <td className="px-4 py-2 text-left text-sm text-gray-700">{item.password}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Home;
