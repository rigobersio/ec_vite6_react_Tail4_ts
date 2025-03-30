import React, { useState, useEffect, FormEvent } from 'react';

// Función para normalizar texto (eliminar acentos, convertir a minúsculas)
const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, ""); // Elimina diacríticos (acentos)
};
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard, { ProductProps } from '../components/ProductCard';
import ProductDetailModal, { ExtendedProductProps } from '../components/modals/ProductDetailModal';
import products from '../data/productosHidroponia';

const GalleryPage: React.FC = () => {
  // Estado para controlar el modal
  const [selectedProduct, setSelectedProduct] = useState<ExtendedProductProps | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Estado para controlar la visibilidad del formulario de filtros
  const [isFilterFormVisible, setIsFilterFormVisible] = useState(false);

  // Estados para los filtros (valores actuales en la interfaz)
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [showDiscounted, setShowDiscounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Estados para los filtros aplicados (los que se usan para filtrar)
  const [searchTerms, setSearchTerms] = useState<string[]>([]); // Array de términos de búsqueda
  const [appliedMinPrice, setAppliedMinPrice] = useState(0);
  const [appliedMaxPrice, setAppliedMaxPrice] = useState(1000);
  const [appliedShowDiscounted, setAppliedShowDiscounted] = useState(false);
  const [appliedCategory, setAppliedCategory] = useState<string>('all');

  // Estado para indicar si los filtros han sido modificados
  const [filtersModified, setFiltersModified] = useState(false);

  // Estado para productos filtrados
  const [filteredProducts, setFilteredProducts] = useState<ExtendedProductProps[]>(products);

  // Función para abrir el modal con el producto seleccionado
  const openProductModal = (product: ExtendedProductProps) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeProductModal = () => {
    setIsModalOpen(false);
  };

  // Obtener todas las categorías únicas para el filtro
  const allCategories = ['all', ...Array.from(new Set(products.flatMap(product => product.categories)))];

  // Efecto para filtrar productos cuando cambian los criterios de filtro aplicados
  useEffect(() => {
    let result = [...products];

    // Filtrar por términos de búsqueda (name, categories, brand, description y keywords)
    if (searchTerms.length > 0) {
      // Cambiado de 'every' a 'some' para usar operador OR entre términos de búsqueda
      result = result.filter(product => {
        // Normalizar los campos del producto para la búsqueda
        const normalizedName = normalizeText(product.name);
        const normalizedBrand = normalizeText(product.brand);
        const normalizedCategories = product.categories.map(category => normalizeText(category));
        const normalizedDescription = product.description ? normalizeText(product.description) : '';
        const normalizedKeywords = product.keywords.map(keyword => normalizeText(keyword));

        // Verificar si alguno de los términos coincide con algún campo del producto
        return searchTerms.some(term => {
          const normalizedTerm = normalizeText(term);
          return (
            normalizedName.includes(normalizedTerm) ||
            normalizedBrand.includes(normalizedTerm) ||
            normalizedCategories.some(category => category.includes(normalizedTerm)) ||
            normalizedDescription.includes(normalizedTerm) ||
            normalizedKeywords.some(keyword => keyword.includes(normalizedTerm))
          );
        });
      });
    }

    // Filtrar por rango de precio
    result = result.filter(product => {
      const finalPrice = product.discount
        ? product.price - (product.price * product.discount / 100)
        : product.price;
      return finalPrice >= appliedMinPrice && finalPrice <= appliedMaxPrice;
    });

    // Filtrar por descuento
    if (appliedShowDiscounted) {
      result = result.filter(product => product.discount && product.discount > 0);
    }

    // Filtrar por categoría
    if (appliedCategory !== 'all') {
      result = result.filter(product =>
        product.categories.includes(appliedCategory)
      );
    }

    setFilteredProducts(result);
    // Resetear el estado de modificación después de aplicar los filtros
    setFiltersModified(false);
  }, [searchTerms, appliedMinPrice, appliedMaxPrice, appliedShowDiscounted, appliedCategory]);

  // Función para manejar cambios en el rango de precios
  const handlePriceChange = (min: number, max: number) => {
    setMinPrice(min);
    setMaxPrice(max);
    setFiltersModified(true);
  };

  // Función para aplicar todos los filtros
  const applyFilters = () => {
    // Agregar el término de búsqueda actual al array si no está vacío
    if (searchTerm.trim()) {
      setSearchTerms(prev => [...prev, searchTerm.trim()]);
      setSearchTerm(''); // Limpiar el campo de búsqueda después de agregar
    }

    setAppliedMinPrice(minPrice);
    setAppliedMaxPrice(maxPrice);
    setAppliedShowDiscounted(showDiscounted);
    setAppliedCategory(selectedCategory);
  };

  // Función para eliminar un término de búsqueda específico
  const removeSearchTerm = (index: number) => {
    setSearchTerms(prev => prev.filter((_, i) => i !== index));
  };

  // Función para eliminar todos los filtros
  const clearAllFilters = () => {
    setSearchTerms([]);
    setMinPrice(0);
    setMaxPrice(1000);
    setAppliedMinPrice(0);
    setAppliedMaxPrice(1000);
    setShowDiscounted(false);
    setAppliedShowDiscounted(false);
    setSelectedCategory('all');
    setAppliedCategory('all');
  };

  // Función para manejar el envío del formulario (cuando se presiona Enter o el botón de búsqueda)
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    applyFilters();
  };

  // Función para manejar cambios en el término de búsqueda
  const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setFiltersModified(true);
  };

  // Función para manejar cambios en la categoría
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    setFiltersModified(true);
  };

  // Función para manejar cambios en el filtro de descuento
  const handleDiscountedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowDiscounted(e.target.checked);
    setFiltersModified(true);
  };

  // Función para manejar cambios en el precio mínimo
  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(Number(e.target.value));
    setFiltersModified(true);
  };

  // Función para manejar cambios en el precio máximo
  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(e.target.value));
    setFiltersModified(true);
  };

  // Calcular el precio máximo para el slider
  const maxPossiblePrice = Math.max(...products.map(product => product.price));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-2">Galería de Productos Hidropónicos</h1>
      <p className="text-center text-gray-600 mb-8">Explora nuestra colección de productos para hidroponia a pequeña escala</p>

      {/* Contenedor colapsable para los filtros */}
      <div className="mb-8">
        {/* Operador ternario para mostrar la pregunta o el formulario */}
        {!isFilterFormVisible ? (
          <div
            onClick={() => setIsFilterFormVisible(true)}
            className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-2">¿Qué estás buscando?</h2>
                <div className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-gray-500">
                  Buscar por nombre, categoría, marca, descripción o palabras clave...
                </div>
              </div>
              <div className="ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <AnimatePresence>
            <motion.form
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              onSubmit={handleSubmit}
              className="bg-white p-4 rounded-lg shadow-md"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Filtros</h2>
                <button
                  type="button"
                  onClick={() => setIsFilterFormVisible(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </button>
              </div>

              {/* Barra de búsqueda */}
              <div className="mb-4">
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">Buscar productos</label>
                <input
                  type="text"
                  id="search"
                  placeholder="Buscar por nombre, categoría, marca, descripción o palabras clave..."
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={searchTerm}
                  onChange={handleSearchTermChange}
                />
              </div>

              {/* Términos de búsqueda aplicados */}
              {searchTerms.length > 0 && (
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {searchTerms.map((term, index) => (
                      <div
                        key={index}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center animate-fadeIn"
                      >
                        <span className="mr-1">{term}</span>
                        <button
                          type="button"
                          onClick={() => removeSearchTerm(index)}
                          className="text-blue-600 hover:text-blue-800 focus:outline-none"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => setSearchTerms([])}
                      className="text-gray-500 hover:text-gray-700 text-sm underline"
                    >
                      Borrar términos
                    </button>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {/* Filtro por precio */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Rango de precio</label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      min="0"
                      className="w-24 p-2 border border-gray-300 rounded-md"
                      value={minPrice}
                      onChange={handleMinPriceChange}
                    />
                    <span>a</span>
                    <input
                      type="number"
                      min="0"
                      className="w-24 p-2 border border-gray-300 rounded-md"
                      value={maxPrice}
                      onChange={handleMaxPriceChange}
                    />
                  </div>
                </div>

                {/* Filtro por categoría */}
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Categoría</label>
                  <select
                    id="category"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                  >
                    {allCategories.map((category, index) => (
                      <option key={index} value={category}>
                        {category === 'all' ? 'Todas las categorías' : category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Filtro por descuento */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="discounted"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    checked={showDiscounted}
                    onChange={handleDiscountedChange}
                  />
                  <label htmlFor="discounted" className="ml-2 block text-sm text-gray-700">
                    Mostrar solo productos con descuento
                  </label>
                </div>
              </div>

              {/* Botones de acción */}
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={clearAllFilters}
                  className="px-4 py-2 rounded-md text-gray-600 font-medium border border-gray-300 hover:bg-gray-100 transition-all duration-300"
                >
                  Limpiar filtros
                </button>
                <button
                  type="submit"
                  className={`px-4 py-2 rounded-md text-white font-medium transition-all duration-300 ${filtersModified ? 'bg-blue-500 hover:bg-blue-600 animate-pulse' : 'bg-blue-500 hover:bg-blue-600'}`}
                >
                  Buscar
                </button>
              </div>
            </motion.form>
          </AnimatePresence>
        )}
      </div>

      {/* Contador de resultados */}
      <p className="text-gray-600 mb-4">{filteredProducts.length} productos encontrados</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(producto => (
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
          ))
        ) : (
          <div className="col-span-3 text-center py-8">
            <p className="text-gray-500 text-lg">No se encontraron productos que coincidan con los filtros seleccionados.</p>
          </div>
        )}
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
