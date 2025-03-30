import React from 'react';

// Definición de la interfaz para las propiedades del producto
export interface ProductProps {
    id: number;
    name: string;
    price: number;
    image: string;
    stock: number;
    discount?: number; // Opcional
    onClick?: () => void; // Función para manejar el clic en la tarjeta
}

const ProductCard: React.FC<ProductProps> = ({ id, name, price, image, stock, discount, onClick }) => {
    // Calcular el precio con descuento si existe
    const finalPrice = discount ? price - (price * discount / 100) : price;

    return (
        <div
            className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={onClick}
        >
            <div className="relative">
                <img className="w-full h-48 object-cover" src={image} alt={name} />
                {discount && (
                    <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md">
                        {discount}% OFF
                    </div>
                )}
            </div>

            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-gray-800">{name}</div>

                <div className="flex justify-between items-center mb-2">
                    {discount ? (
                        <div className="flex items-center">
                            <span className="text-gray-500 line-through mr-2">${price.toFixed(2)}</span>
                            <span className="text-green-600 font-bold">${finalPrice.toFixed(2)}</span>
                        </div>
                    ) : (
                        <span className="text-gray-700 font-bold">${price.toFixed(2)}</span>
                    )}
                </div>

                <p className={`text-sm ${stock > 10 ? 'text-green-600' : stock > 0 ? 'text-orange-500' : 'text-red-600'}`}>
                    {stock > 10 ? 'En stock' : stock > 0 ? `¡Solo quedan ${stock} unidades!` : 'Agotado'}
                </p>
            </div>

            <div className="px-6 py-4">
                <button
                    className={`w-full py-2 px-4 rounded ${stock > 0 ? 'bg-blue-500 hover:bg-blue-700 text-white' : 'bg-gray-300 cursor-not-allowed text-gray-500'}`}
                    disabled={stock <= 0}
                >
                    {stock > 0 ? 'Añadir al carrito' : 'Sin stock'}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;