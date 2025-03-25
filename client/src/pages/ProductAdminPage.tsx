import React, { useState } from 'react';
import ProductForm from '../components/ProductForm';
import { ExtendedProductProps } from '../components/modals/ProductDetailModal';
import ProductCard from '../components/ProductCard';

const ProductAdminPage: React.FC = () => {
    const [submittedProduct, setSubmittedProduct] = useState<ExtendedProductProps | null>(null);

    const handleProductSubmit = (product: ExtendedProductProps) => {
        setSubmittedProduct(product);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Administración de Productos</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Formulario para agregar productos */}
                <div>
                    <ProductForm onProductSubmit={handleProductSubmit} />
                </div>

                {/* Vista previa del producto agregado */}
                <div>
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Vista Previa del Producto</h2>

                    {submittedProduct ? (
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="mb-6">
                                <ProductCard
                                    id={submittedProduct.id}
                                    name={submittedProduct.name}
                                    price={submittedProduct.price}
                                    image={submittedProduct.images[0] || ''}
                                    stock={submittedProduct.stock}
                                    discount={submittedProduct.discount}
                                />
                            </div>

                            <div className="mt-8">
                                <h3 className="text-xl font-semibold mb-4">Detalles del Producto</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <p className="text-gray-700"><span className="font-semibold">ID:</span> {submittedProduct.id}</p>
                                        <p className="text-gray-700"><span className="font-semibold">Nombre:</span> {submittedProduct.name}</p>
                                        <p className="text-gray-700"><span className="font-semibold">Marca:</span> {submittedProduct.brand}</p>
                                        <p className="text-gray-700"><span className="font-semibold">Precio:</span> ${submittedProduct.price.toFixed(2)}</p>
                                        <p className="text-gray-700"><span className="font-semibold">Stock:</span> {submittedProduct.stock}</p>
                                        <p className="text-gray-700"><span className="font-semibold">Descuento:</span> {submittedProduct.discount || 0}%</p>
                                    </div>

                                    <div>
                                        <p className="text-gray-700"><span className="font-semibold">Categorías:</span></p>
                                        <ul className="list-disc list-inside ml-2">
                                            {submittedProduct.categories.map((category, index) => (
                                                <li key={index} className="text-gray-600">{category}</li>
                                            ))}
                                        </ul>

                                        <p className="text-gray-700 mt-2"><span className="font-semibold">Palabras clave:</span></p>
                                        <ul className="list-disc list-inside ml-2">
                                            {submittedProduct.keywords.map((keyword, index) => (
                                                <li key={index} className="text-gray-600">{keyword}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <p className="text-gray-700"><span className="font-semibold">Descripción:</span></p>
                                    <p className="text-gray-600 ml-2">{submittedProduct.description}</p>
                                </div>

                                <div>
                                    <p className="text-gray-700 font-semibold mb-2">URLs de imágenes:</p>
                                    <div className="bg-gray-100 p-3 rounded-md">
                                        {submittedProduct.images.map((url, index) => (
                                            <div key={index} className="mb-2">
                                                <p className="text-xs text-gray-600 break-all">{index + 1}. {url}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-gray-100 p-8 rounded-lg text-center">
                            <p className="text-gray-500">No hay productos agregados. Complete el formulario para ver la vista previa.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductAdminPage;