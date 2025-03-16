import React from 'react';
import ProductCard, { ProductProps } from '../components/ProductCard';

const GalleryPage: React.FC = () => {
  // Datos de ejemplo para productos de hidroponia a pequeña escala
  const productosHidroponia: ProductProps[] = [
    {
      id: 1,
      name: 'Kit Básico de Hidroponia',
      price: 12990,
      image: 'https://images.unsplash.com/photo-1585444744772-62276a472eaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      stock: 15,
      discount: 10
    },
    {
      id: 2,
      name: 'Sistema NFT para Lechugas',
      price: 24990,
      image: 'https://images.unsplash.com/photo-1582579099632-a7e8e5d7b3a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      stock: 8,
    },
    {
      id: 3,
      name: 'Nutrientes Hidropónicos Premium',
      price: 8990,
      image: 'https://images.unsplash.com/photo-1611735341450-74d61e660ad2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      stock: 20,
      discount: 15
    },
    {
      id: 4,
      name: 'Bomba de Agua para Hidroponia',
      price: 15990,
      image: 'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      stock: 5,
    },
    {
      id: 5,
      name: 'Sustrato de Fibra de Coco',
      price: 6990,
      image: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      stock: 0,
      discount: 5
    },
    {
      id: 6,
      name: 'Sistema de Cultivo Vertical',
      price: 34990,
      image: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      stock: 3,
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
            image={producto.image}
            stock={producto.stock}
            discount={producto.discount}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
