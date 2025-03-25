import React, { useState } from 'react';
import { getUsers } from '../api/auth';
import { Link } from 'react-router-dom';

interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    wallet: number;
}

const PanelAdmin: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleFetchUsers = async () => {
        setLoading(true);
        setError(null);
        try {
            const fetchedUsers = await getUsers();
            setUsers(fetchedUsers);
        } catch (err) {
            setError('Error fetching users');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Panel Administrativo</h1>

            <div className="mb-8 flex flex-wrap gap-4">
                <Link
                    to="/admin/products"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
                >
                    Administrar Productos
                </Link>

                <button
                    onClick={handleFetchUsers}
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
                >
                    Ver Usuarios
                </button>
            </div>

            {loading && <p className="text-gray-600">Cargando...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {users.length > 0 && (
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Lista de Usuarios</h2>
                    <ul className="divide-y divide-gray-200">
                        {users.map((user) => (
                            <li key={user.id} className="py-3">
                                <div className="flex flex-col md:flex-row md:justify-between">
                                    <div>
                                        <span className="font-medium">{user.name}</span>
                                        <span className="text-gray-500">({user.email})</span>
                                    </div>
                                    <div>
                                        <span className="mr-4">Rol: <span className="font-medium">{user.role}</span></span>
                                        <span>Saldo: <span className="font-medium">${user.wallet}</span></span>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default PanelAdmin;

