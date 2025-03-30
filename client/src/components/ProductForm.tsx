import React, { useState, useEffect } from 'react';
import { ExtendedProductProps } from './modals/ProductDetailModal';
import { Cloudinary } from '@cloudinary/url-gen';

// Configuración global para TypeScript (ignorar el tipo de `cloudinary`)
declare global {
    interface Window {
        cloudinary: any;
    }
}

interface ProductFormProps {
    onProductSubmit: (product: ExtendedProductProps) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ onProductSubmit }) => {
    // Estado para almacenar los datos del formulario
    const [formData, setFormData] = useState<Omit<ExtendedProductProps, 'id'>>({
        name: '',
        brand: '',
        categories: [],
        price: 0,
        images: [],
        stock: 0,
        discount: 0,
        description: '',
        keywords: []
    });

    // Estado para almacenar la categoría que se está escribiendo
    const [categoryInput, setCategoryInput] = useState('');

    // Estado para almacenar la palabra clave que se está escribiendo
    const [keywordInput, setKeywordInput] = useState('');

    // Estado para almacenar las URLs de las imágenes subidas
    const [imageUrls, setImageUrls] = useState<string[]>([]);

    // Obtenemos las credenciales de Cloudinary desde las variables de entorno
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME2 || 'du87uit2n';
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || 'template_ecommerce';
    const apiKey = import.meta.env.VITE_CLOUDINARY_API_KEY || '738991219671154';

    const cld = new Cloudinary({ cloud: { cloudName } });

    // Configurar el Widget de Cloudinary al cargar el componente
    useEffect(() => {
        // Cargar el script de Cloudinary si aún no está cargado
        if (!window.cloudinary) {
            const script = document.createElement('script');
            script.src = 'https://upload-widget.cloudinary.com/global/all.js';
            script.async = true;
            document.body.appendChild(script);

            script.onload = initializeWidget;
        } else {
            initializeWidget();
        }

        function initializeWidget() {
            const widget = window.cloudinary.createUploadWidget(
                {
                    cloudName,
                    uploadPreset,
                    apiKey, // Solo para ejercicio pedagógico
                    sources: ['local', 'camera'], // Fuentes permitidas
                    multiple: true // Permitir múltiples imágenes
                },
                (error: any, result: any) => {
                    if (!error && result.event === 'success') {
                        // Agregar la URL a la lista de imágenes
                        const newImageUrl = result.info.secure_url;
                        setImageUrls(prev => [...prev, newImageUrl]);
                        setFormData(prev => ({
                            ...prev,
                            images: [...prev.images, newImageUrl]
                        }));
                    }
                }
            );

            // Asignar el widget al botón
            const uploadButton = document.getElementById('upload-button');
            uploadButton?.addEventListener('click', () => widget.open());
        }

        // Cleanup function
        return () => {
            const uploadButton = document.getElementById('upload-button');
            if (uploadButton) {
                uploadButton.replaceWith(uploadButton.cloneNode(true));
            }
        };
    }, [cloudName, uploadPreset, apiKey]);

    // Manejar cambios en los campos del formulario
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'price' || name === 'stock' || name === 'discount'
                ? parseFloat(value)
                : value
        }));
    };

    // Agregar una categoría
    const handleAddCategory = () => {
        if (categoryInput.trim() !== '') {
            setFormData(prev => ({
                ...prev,
                categories: [...prev.categories, categoryInput.trim()]
            }));
            setCategoryInput('');
        }
    };

    // Eliminar una categoría
    const handleRemoveCategory = (index: number) => {
        setFormData(prev => ({
            ...prev,
            categories: prev.categories.filter((_, i) => i !== index)
        }));
    };

    // Agregar una palabra clave
    const handleAddKeyword = () => {
        if (keywordInput.trim() !== '') {
            setFormData(prev => ({
                ...prev,
                keywords: [...prev.keywords, keywordInput.trim()]
            }));
            setKeywordInput('');
        }
    };

    // Eliminar una palabra clave
    const handleRemoveKeyword = (index: number) => {
        setFormData(prev => ({
            ...prev,
            keywords: prev.keywords.filter((_, i) => i !== index)
        }));
    };

    // Eliminar una imagen
    const handleRemoveImage = (index: number) => {
        setFormData(prev => ({
            ...prev,
            images: prev.images.filter((_, i) => i !== index)
        }));
        setImageUrls(prev => prev.filter((_, i) => i !== index));
    };

    // Manejar el envío del formulario
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Generar un ID único para el producto (simulado)
        const newProduct: ExtendedProductProps = {
            id: Date.now(), // Simulamos un ID único con la fecha actual
            ...formData
        };
        onProductSubmit(newProduct);

        // Resetear el formulario
        setFormData({
            name: '',
            brand: '',
            categories: [],
            price: 0,
            images: [],
            stock: 0,
            discount: 0,
            description: '',
            keywords: []
        });
        setImageUrls([]);
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Agregar Nuevo Producto</h2>

            <form onSubmit={handleSubmit}>
                {/* Nombre del producto */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre del producto</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>

                {/* Marca */}
                <div className="mb-4">
                    <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-1">Marca</label>
                    <input
                        type="text"
                        id="brand"
                        name="brand"
                        value={formData.brand}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>

                {/* Precio */}
                <div className="mb-4">
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">Precio</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        min="0"
                        step="0.01"
                        required
                    />
                </div>

                {/* Stock */}
                <div className="mb-4">
                    <label htmlFor="stock" className="block text-sm font-medium text-gray-700 mb-1">Stock</label>
                    <input
                        type="number"
                        id="stock"
                        name="stock"
                        value={formData.stock}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        min="0"
                        required
                    />
                </div>

                {/* Descuento */}
                <div className="mb-4">
                    <label htmlFor="discount" className="block text-sm font-medium text-gray-700 mb-1">Descuento (%)</label>
                    <input
                        type="number"
                        id="discount"
                        name="discount"
                        value={formData.discount}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        min="0"
                        max="100"
                    />
                </div>

                {/* Descripción */}
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        rows={4}
                    />
                </div>

                {/* Categorías */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Categorías</label>
                    <div className="flex">
                        <input
                            type="text"
                            value={categoryInput}
                            onChange={(e) => setCategoryInput(e.target.value)}
                            className="flex-1 p-2 border border-gray-300 rounded-l-md focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Añadir categoría"
                        />
                        <button
                            type="button"
                            onClick={handleAddCategory}
                            className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
                        >
                            Añadir
                        </button>
                    </div>
                    {formData.categories.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-2">
                            {formData.categories.map((category, index) => (
                                <div key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full flex items-center">
                                    <span className="mr-1">{category}</span>
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveCategory(index)}
                                        className="text-gray-600 hover:text-gray-800 focus:outline-none"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Palabras clave */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Palabras clave</label>
                    <div className="flex">
                        <input
                            type="text"
                            value={keywordInput}
                            onChange={(e) => setKeywordInput(e.target.value)}
                            className="flex-1 p-2 border border-gray-300 rounded-l-md focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Añadir palabra clave"
                        />
                        <button
                            type="button"
                            onClick={handleAddKeyword}
                            className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
                        >
                            Añadir
                        </button>
                    </div>
                    {formData.keywords.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-2">
                            {formData.keywords.map((keyword, index) => (
                                <div key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full flex items-center">
                                    <span className="mr-1">{keyword}</span>
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveKeyword(index)}
                                        className="text-gray-600 hover:text-gray-800 focus:outline-none"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Imágenes */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Imágenes</label>
                    <button
                        type="button"
                        id="upload-button"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                        Subir imágenes
                    </button>

                    {imageUrls.length > 0 && (
                        <div className="mt-4">
                            <h3 className="text-sm font-medium text-gray-700 mb-2">Imágenes subidas:</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {imageUrls.map((url, index) => (
                                    <div key={index} className="relative">
                                        <img src={url} alt={`Imagen ${index + 1}`} className="w-full h-32 object-cover rounded-md" />
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveImage(index)}
                                            className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 focus:outline-none"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                        <p className="text-xs text-gray-500 mt-1 break-all">{url}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Botón de envío */}
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-300"
                        disabled={formData.images.length === 0}
                    >
                        Guardar Producto
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProductForm;