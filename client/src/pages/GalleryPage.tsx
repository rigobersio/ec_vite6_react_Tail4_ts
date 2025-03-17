import React, { useState } from 'react';
import ProductCard, { ProductProps } from '../components/ProductCard';
import ProductDetailModal, { ExtendedProductProps } from '../components/modals/ProductDetailModal';

const GalleryPage: React.FC = () => {
  // Estado para controlar el modal
  const [selectedProduct, setSelectedProduct] = useState<ExtendedProductProps | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Función para abrir el modal con el producto seleccionado
  const openProductModal = (product: ExtendedProductProps) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeProductModal = () => {
    setIsModalOpen(false);
  };

  // Datos de ejemplo para productos de hidroponia a pequeña escala
  const productosHidroponia: ExtendedProductProps[] = [
    {
      id: 1,
      name: 'Kit Básico de Hidroponia',
      price: 12990,
      images: [
        'https://images.unsplash.com/photo-1585444744772-62276a472eaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1582579099632-a7e8e5d7b3a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1611735341450-74d61e660ad2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      ],
      stock: 15,
      discount: 10,

      description: 'Kit completo para iniciar tu propio sistema hidropónico en casa. Incluye todo lo necesario para cultivar hasta 6 plantas.'
    },
    {
      id: 2,
      name: 'Sistema NFT para Lechugas',
      price: 24990,
      images: [
        'https://images.unsplash.com/photo-1582579099632-a7e8e5d7b3a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1585444744772-62276a472eaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1558449028-b53a39d100fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      ],
      stock: 8,

      description: 'Sistema NFT profesional para el cultivo de lechugas y verduras de hoja. Capacidad para 12 plantas.'
    },
    {
      id: 3,
      name: 'Nutrientes Hidropónicos Premium',
      price: 8990,
      images: [
        'https://images.unsplash.com/photo-1611735341450-74d61e660ad2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      ],
      stock: 20,
      discount: 15,

      description: 'Nutrientes de alta calidad para sistemas hidropónicos. Fórmula balanceada para un crecimiento óptimo de las plantas.'
    },
    {
      id: 4,
      name: 'Bomba de Agua para Hidroponia',
      price: 15990,
      images: [
        'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1611735341450-74d61e660ad2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1558449028-b53a39d100fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      ],
      stock: 5,

      description: 'Bomba de agua silenciosa y eficiente para sistemas hidropónicos. Bajo consumo energético y larga vida útil.'
    },
    {
      id: 5,
      name: 'Sustrato de Fibra de Coco',
      price: 6990,
      images: [
        'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1585444744772-62276a472eaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      ],
      stock: 0,
      discount: 5,

      description: 'Sustrato de fibra de coco 100% natural para cultivos hidropónicos. Excelente retención de agua y aireación de raíces.'
    },
    {
      id: 6,
      name: 'Sistema de Cultivo Vertical',
      price: 34990,
      images: [
        'https://images.unsplash.com/photo-1558449028-b53a39d100fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1582579099632-a7e8e5d7b3a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      ],
      stock: 3,

      description: 'Sistema de cultivo vertical para aprovechar espacios reducidos. Ideal para balcones y terrazas urbanas.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-2">Galería de Productos Hidropónicos</h1>
      <p className="text-center text-gray-600 mb-8">Explora nuestra colección de productos para hidroponia a pequeña escala</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productosHidroponia.map(producto => (
          <ProductCard
            key={producto.id}
            id={producto.id}
            name={producto.name}
            price={producto.price}
            image={producto.images[0]}
            stock={producto.stock}
            discount={producto.discount}
            onClick={() => openProductModal(producto)}
          />
        ))}
      </div>

      {/* Modal de detalle del producto */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={closeProductModal}
        />
      )}
    </div>
  );
};

export default GalleryPage;
