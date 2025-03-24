import { useState, useEffect } from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';

// Configuración global para TypeScript (ignorar el tipo de `cloudinary`)
declare global {
    interface Window {
        cloudinary: any;
    }
}

const Cloudinary2 = () => {
    const [imageUrl, setImageUrl] = useState<string>('');

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
                    sources: ['local', 'camera'] // Fuentes permitidas
                },
                (error: any, result: any) => {
                    if (!error && result.event === 'success') {
                        setImageUrl(result.info.secure_url); // Obtenemos la URL aquí
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

    return (
        <div className="container mx-auto p-6 bg-white rounded-lg shadow-md max-w-2xl">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Prueba de Carga de Imágenes</h2>

            {/* "Formulario": solo un botón que activa el widget */}
            <button
                id="upload-button"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
                Subir imagen
            </button>

            {/* Mostrar la imagen subida con la URL obtenida */}
            {imageUrl && (
                <div className="preview mt-6 p-4 border border-gray-200 rounded-lg">
                    <div className="mb-4 overflow-hidden rounded-lg shadow-sm">
                        <AdvancedImage
                            cldImg={cld.image(imageUrl.split('/').pop()?.split('.')[0] || '')}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <p className="text-sm text-gray-600 break-all">URL: {imageUrl}</p>
                </div>
            )}
        </div>
    );
};

export default Cloudinary2;