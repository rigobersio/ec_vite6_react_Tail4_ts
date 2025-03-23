import React, { useEffect } from 'react';

// Interfaz extendida para las propiedades del producto con múltiples imágenes y descripción
export interface ExtendedProductProps {
  id: number;
  name: string;
  brand: string;
  categories: string[];
  price: number;
  images: string[];
  stock: number;
  discount?: number;
  description?: string;
  keywords: string[];
}

interface ProductDetailModalProps {
  product: ExtendedProductProps;
  isOpen: boolean;
  onClose: () => void;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, isOpen, onClose }) => {
  // Calcular el precio con descuento si existe
  const finalPrice = product.discount ? product.price - (product.price * product.discount / 100) : product.price;

  // Estado para controlar la imagen activa
  const [activeImageIndex, setActiveImageIndex] = React.useState(0);

  // Efecto para bloquear el scroll cuando el modal está abierto y manejar la tecla Escape
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';

      // Función para manejar el evento de teclado
      const handleEscapeKey = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onClose();
        }
      };

      // Agregar event listener para la tecla Escape
      document.addEventListener('keydown', handleEscapeKey);

      // Cleanup function
      return () => {
        document.body.style.overflow = 'auto';
        document.removeEventListener('keydown', handleEscapeKey);
      };
    } else {
      document.body.style.overflow = 'auto';
      return undefined;
    }
  }, [isOpen, onClose]);

  // Si el modal no está abierto, no renderizamos nada
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900/70 z-50 flex justify-center items-center p-4" onClick={onClose}>
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto mx-auto shadow-xl" onClick={(e) => e.stopPropagation()}>
        {/* Botón para cerrar el modal */}
        <div className="flex justify-end p-2">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sección de imágenes */}
          <div>
            <div className="mb-4 relative">
              <img
                src={product.images[activeImageIndex]}
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg"
              />
              {product.discount && (
                <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md">
                  {product.discount}% OFF
                </div>
              )}
            </div>

            {/* Miniaturas de imágenes */}
            <div className="flex space-x-2 overflow-x-auto">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.name} - imagen ${index + 1}`}
                  className={`w-16 h-16 object-cover rounded cursor-pointer ${index === activeImageIndex ? 'border-2 border-blue-500' : ''}`}
                  onClick={() => setActiveImageIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* Sección de información */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-2">Marca: {product.brand}</p>

            {/* Precio */}
            <div className="mb-4">
              {product.discount ? (
                <div className="flex items-center">
                  <span className="text-gray-500 line-through mr-2">${product.price.toFixed(2)}</span>
                  <span className="text-green-600 font-bold text-xl">${finalPrice.toFixed(2)}</span>
                </div>
              ) : (
                <span className="text-gray-700 font-bold text-xl">${product.price.toFixed(2)}</span>
              )}
            </div>

            {/* Disponibilidad */}
            <p className={`text-sm mb-4 ${product.stock > 10 ? 'text-green-600' : product.stock > 0 ? 'text-orange-500' : 'text-red-600'}`}>
              {product.stock > 10 ? 'En stock' : product.stock > 0 ? `¡Solo quedan ${product.stock} unidades!` : 'Agotado'}
            </p>

            {/* Categorías */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Categorías</h3>
              <div className="flex flex-wrap gap-2">
                {product.categories.map((category, index) => (
                  <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm">
                    {category}
                  </span>
                ))}
              </div>
            </div>



            {/* Descripción */}
            {product.description && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Descripción</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            )}

            {/* Botones de acción */}
            <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
              <button
                className={`flex-1 py-2 px-4 rounded ${product.stock > 0 ? 'bg-blue-500 hover:bg-blue-700 text-white' : 'bg-gray-300 cursor-not-allowed text-gray-500'}`}
                disabled={product.stock <= 0}
              >
                Añadir al carrito
              </button>
              <button
                className={`flex-1 py-2 px-4 rounded ${product.stock > 0 ? 'bg-green-500 hover:bg-green-700 text-white' : 'bg-gray-300 cursor-not-allowed text-gray-500'}`}
                disabled={product.stock <= 0}
              >
                Comprar ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;