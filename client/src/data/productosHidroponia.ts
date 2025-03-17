import { ExtendedProductProps } from '../components/modals/ProductDetailModal';

// Datos de ejemplo para productos de hidroponia a pequeña escala
const products: ExtendedProductProps[] = [
	{
		id: 1,
		name: "Sistema NFT Hidropónico Profesional",
		brand: "HydroFarm",
		categories: ["Irrigation and Cultivation Systems", "General Supplies"],
		price: 287.50,
		discount: 10,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/8/8a/Hydroponic_system_01.jpg",
			"https://upload.wikimedia.org/wikipedia/commons/7/7c/Hydroponic_system_02.jpg",
			"https://upload.wikimedia.org/wikipedia/commons/6/6e/Hydroponic_lettuce.jpg"
		],
		stock: 15,
		description: "Sistema completo NFT con 12 canales de PVC de grado alimenticio, bomba de 1000L/h, temporizador digital y depósito de 80L. Incluye kit de instalación y manual de cultivo para 25 plantas. Ideal para balcones y terrazas.",
		keywords: ["hidroponico", "nft", "cultivo", "urbano", "sistema"]
	},
	{
		id: 2,
		name: "Kit de Riego por Goteo para Jardín",
		brand: "GardenMaster",
		categories: ["Irrigation and Cultivation Systems"],
		price: 59.99,
		discount: 0,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/a/a7/Drip_irrigation_system.jpg",
			"https://upload.wikimedia.org/wikipedia/commons/b/b1/Drip_irrigation_closeup.jpg"
		],
		stock: 25,
		description: "Kit completo de riego por goteo para jardines pequeños y medianos. Incluye 30 metros de tubería, 20 goteros ajustables, conectores y estacas. Fácil de instalar y mantener.",
		keywords: ["riego", "goteo", "jardín", "cultivo", "sistema"]
	},
	{
		id: 3,
		name: "Maceta Autorriego con Reserva de Agua",
		brand: "EcoGrow",
		categories: ["Irrigation and Cultivation Systems", "General Supplies"],
		price: 19.99,
		discount: 5,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/c/c5/Self-watering_planter.jpg",
			"https://upload.wikimedia.org/wikipedia/commons/d/d4/Self-watering_planter_closeup.jpg"
		],
		stock: 50,
		description: "Maceta de autorriego con reserva de agua para hasta 4 semanas. Ideal para plantas de interior y exterior. Incluye indicador de nivel de agua.",
		keywords: ["autorriego", "maceta", "plantas", "interior", "exterior"]
	},
	{
		id: 4,
		name: "Bomba Sumergible para Estanques y Jardines",
		brand: "AquaFlow",
		categories: ["Irrigation and Cultivation Systems"],
		price: 79.99,
		discount: 15,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/e/e1/Submersible_pump.jpg",
			"https://upload.wikimedia.org/wikipedia/commons/f/f2/Submersible_pump_closeup.jpg"
		],
		stock: 10,
		description: "Bomba sumergible de alta eficiencia para estanques y jardines. Capacidad de 3000L/h con filtro incorporado. Ideal para sistemas de riego y fuentes.",
		keywords: ["bomba", "sumergible", "estanque", "jardín", "riego"]
	},
	{
		id: 5,
		name: "Sistema de Cultivo Aeropónico",
		brand: "AeroGarden",
		categories: ["Irrigation and Cultivation Systems", "General Supplies"],
		price: 349.99,
		discount: 20,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/9/9a/Aeroponic_system.jpg",
			"https://upload.wikimedia.org/wikipedia/commons/b/b3/Aeroponic_system_closeup.jpg"
		],
		stock: 5,
		description: "Sistema de cultivo aeropónico con 6 pods para plantas. Incluye luces LED ajustables y temporizador automático. Ideal para cultivos rápidos y sin tierra.",
		keywords: ["aeropónico", "cultivo", "luces LED", "sistema", "rápido"]
	},
	{
		id: 6,
		name: "Sistema de Riego Automático para Huertos",
		brand: "GreenThumb",
		categories: ["Irrigation and Cultivation Systems"],
		price: 129.99,
		discount: 10,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/2/2b/Automatic_irrigation_system.jpg",
			"https://upload.wikimedia.org/wikipedia/commons/a/a9/Automatic_irrigation_system_closeup.jpg"
		],
		stock: 20,
		description: "Sistema de riego automático con temporizador programable. Incluye 50 metros de tubería, 30 aspersores y conectores. Ideal para huertos urbanos y pequeñas parcelas.",
		keywords: ["riego", "automático", "huertos", "urbano", "sistema"]
	},
	{
		id: 7,
		name: "Kit de Cultivo Hidropónico para Principiantes",
		brand: "EasyGrow",
		categories: ["Irrigation and Cultivation Systems", "General Supplies"],
		price: 89.99,
		discount: 5,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/1/1a/Hydroponic_starter_kit.jpg",
			"https://upload.wikimedia.org/wikipedia/commons/5/5b/Hydroponic_starter_kit_closeup.jpg"
		],
		stock: 30,
		description: "Kit completo para principiantes en hidroponía. Incluye depósito de 20L, bomba de aire, piedras de arcilla y manual de instrucciones. Ideal para cultivar hierbas y verduras en interiores.",
		keywords: ["hidroponía", "principiantes", "cultivo", "interior", "kit"]
	},
	{
		id: 8,
		name: "Controlador de Riego Inteligente",
		brand: "SmartGarden",
		categories: ["Irrigation and Cultivation Systems", "Environmental Monitoring and Control"],
		price: 149.99,
		discount: 15,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/3/3c/Smart_irrigation_controller.jpg",
			"https://upload.wikimedia.org/wikipedia/commons/6/6d/Smart_irrigation_controller_closeup.jpg"
		],
		stock: 15,
		description: "Controlador de riego inteligente con conexión Wi-Fi. Programa y monitorea el riego desde tu smartphone. Compatible con Alexa y Google Home.",
		keywords: ["riego", "inteligente", "controlador", "Wi-Fi", "smartphone"]
	},
	{
		id: 9,
		name: "Sistema de Riego por Microaspersión",
		brand: "AquaSpray",
		categories: ["Irrigation and Cultivation Systems"],
		price: 99.99,
		discount: 0,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/8/8b/Micro_sprinkler_system.jpg",
			"https://upload.wikimedia.org/wikipedia/commons/4/4c/Micro_sprinkler_system_closeup.jpg"
		],
		stock: 25,
		description: "Sistema de riego por microaspersión ideal para jardines y huertos pequeños. Incluye 20 metros de tubería, 10 microaspersores y conectores. Fácil instalación y mantenimiento.",
		keywords: ["riego", "microaspersión", "jardín", "huertos", "sistema"]
	},
	{
		id: 10,
		name: "Depósito de Agua para Riego con Filtro",
		brand: "WaterWise",
		categories: ["Irrigation and Cultivation Systems"],
		price: 69.99,
		discount: 10,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/7/7a/Water_tank_with_filter.jpg",
			"https://upload.wikimedia.org/wikipedia/commons/c/c1/Water_tank_with_filter_closeup.jpg"
		],
		stock: 18,
		description: "Depósito de agua de 100L con filtro incorporado para sistemas de riego. Mantiene el agua limpia y libre de sedimentos. Ideal para uso en exteriores.",
		keywords: ["depósito", "agua", "riego", "filtro", "exteriores"]
	},
	{
		id: 11,
		name: "Fertilizante Orgánico para Plantas",
		brand: "EcoBloom",
		categories: ["Fertility and Nutrition"],
		price: 29.99,
		discount: 5,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/a/a3/Organic_fertilizer.jpg",
			"https://upload.wikimedia.org/wikipedia/commons/b/b4/Organic_fertilizer_closeup.jpg"
		],
		stock: 40,
		description: "Fertilizante orgánico rico en nutrientes esenciales para el crecimiento saludable de plantas. Ideal para huertos urbanos y jardines. Contenido: 1Kg.",
		keywords: ["fertilizante", "orgánico", "plantas", "huertos", "jardín"]
	},
	{
		id: 12,
		name: "Abono Líquido para Hidroponía",
		brand: "HydroNutri",
		categories: ["Fertility and Nutrition"],
		price: 34.99,
		discount: 10,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/c/c7/Liquid_fertilizer.jpg",
			"https://upload.wikimedia.org/wikipedia/commons/d/d1/Liquid_fertilizer_closeup.jpg"
		],
		stock: 28,
		description: "Abono líquido concentrado para sistemas hidropónicos. Contiene NPK y micronutrientes. Rendimiento: 1L trata 200L de agua.",
		keywords: ["abono", "líquido", "hidroponía", "NPK", "micronutrientes"]
	},
	{
		id: 13,
		name: "Compost Orgánico para Jardinería",
		brand: "GreenCompost",
		categories: ["Fertility and Nutrition", "General Supplies"],
		price: 19.99,
		discount: 0,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/e/e1/Compost_pile.jpg",
			"https://upload.wikimedia.org/wikipedia/commons/f/f2/Compost_closeup.jpg"
		],
		stock: 50,
		description: "Compost orgánico natural, ideal para mejorar la estructura del suelo y promover el crecimiento de plantas. Contenido: 5Kg.",
		keywords: ["compost", "orgánico", "jardinería", "suelo", "plantas"]
	},
	{
		id: 14,
		name: "Estimulador de Raíces para Plantas",
		brand: "RootBoost",
		categories: ["Fertility and Nutrition"],
		price: 14.99,
		discount: 0,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/9/9a/Root_stimulator.jpg",
			"https://upload.wikimedia.org/wikipedia/commons/b/b3/Root_stimulator_closeup.jpg"
		],
		stock: 35,
		description: "Estimulador de raíces líquido que promueve el desarrollo radicular en plantas jóvenes. Ideal para trasplantes y esquejes. Contenido: 250ml.",
		keywords: ["estimulador", "raíces", "plantas", "trasplantes", "esquejes"]
	},
	{
		id: 15,
		name: "Fertilizante Foliares con Microelementos",
		brand: "LeafGrow",
		categories: ["Fertility and Nutrition"],
		price: 24.99,
		discount: 5,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/7/7a/Foliar_fertilizer.jpg",
			"https://upload.wikimedia.org/wikipedia/commons/c/c1/Foliar_fertilizer_closeup.jpg"
		],
		stock: 22,
		description: "Fertilizante foliar con microelementos esenciales para corregir deficiencias nutricionales. Aplicación directa sobre las hojas. Contenido: 500ml.",
		keywords: ["fertilizante", "foliar", "microelementos", "hojas", "nutrición"]
	},
	{
		id: 16,
		name: "Fertilizante en Polvo Completo Premium",
		brand: "NutriPlus",
		categories: ["Fertility and Nutrition"],
		price: 49.99,
		discount: 10,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/a/a9/Powder_fertilizer.jpg",
			"https://upload.wikimedia.org/wikipedia/commons/b/b4/Powder_fertilizer_closeup.jpg"
		],
		stock: 30,
		description: "Fertilizante en polvo de alta gama con una mezcla equilibrada de macro y micronutrientes. Ideal para todo tipo de plantas. Contenido: 2Kg.",
		keywords: ["fertilizante", "polvo", "premium", "nutrientes", "plantas"]
	},
	{
		id: 17,
		name: "Gránulos de Liberación Controlada",
		brand: "SlowRelease",
		categories: ["Fertility and Nutrition"],
		price: 39.99,
		discount: 5,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/c/c7/Slow_release_granules.jpg",
			"https://upload.wikimedia.org/wikipedia/commons/d/d1/Slow_release_granules_closeup.jpg"
		],
		stock: 25,
		description: "Gránulos con membranas que liberan nutrientes de forma fraccionada durante 3 meses. Ideal para plantas de exterior. Contenido: 3Kg.",
		keywords: ["gránulos", "liberación", "controlada", "nutrientes", "exterior"]
	},
	{
		id: 18,
		name: "Solución Nutritiva Líquida A & B",
		brand: "GrowTech",
		categories: ["Fertility and Nutrition"],
		price: 59.99,
		discount: 15,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/e/e1/Liquid_nutrient_solution.jpg",
			"https://upload.wikimedia.org/wikipedia/commons/f/f2/Liquid_nutrient_solution_closeup.jpg"
		],
		stock: 20,
		description: "Formulación líquida concentrada en dos partes (A & B) para un equilibrio perfecto de nutrientes. Rendimiento: 1L trata 500L de agua.",
		keywords: ["solución", "nutritiva", "líquida", "concentrada", "nutrientes"]
	},
	{
		id: 19,
		name: "Fertilizante Completo para Plantas de Flor",
		brand: "BloomBoost",
		categories: ["Fertility and Nutrition"],
		price: 27.99,
		discount: 0,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/9/9a/Flower_fertilizer.jpg",
			"https://upload.wikimedia.org/wikipedia/commons/b/b3/Flower_fertilizer_closeup.jpg"
		],
		stock: 35,
		description: "Fertilizante completo con alto contenido de fósforo para promover la floración. Ideal para rosas, orquídeas y otras plantas de flor. Contenido: 1.5Kg.",
		keywords: ["fertilizante", "floración", "plantas", "fósforo", "rosas"]
	},
	{
		id: 20,
		name: "Suplemento de Calcio y Magnesio",
		brand: "CalMag",
		categories: ["Fertility and Nutrition"],
		price: 19.99,
		discount: 5,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/7/7a/Calcium_magnesium_supplement.jpg",
			"https://upload.wikimedia.org/wikipedia/commons/c/c1/Calcium_magnesium_supplement_closeup.jpg"
		],
		stock: 40,
		description: "Suplemento líquido de calcio y magnesio para corregir deficiencias en plantas. Aplicación foliar y en riego. Contenido: 500ml.",
		keywords: ["suplemento", "calcio", "magnesio", "plantas", "foliar"]
	},
	{
		id: 21,
		name: "Fungicida a Base de Azufre",
		brand: "SulfurGuard",
		categories: ["Pest and Disease Control"],
		price: 18.99,
		discount: 0,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/a/a9/Sulfur_fungicide.jpg"
		],
		stock: 30,
		description: "Fungicida en polvo a base de azufre para el control de hongos en plantas. Ideal para rosales, frutales y hortalizas. Contenido: 500g.",
		keywords: ["fungicida", "azufre", "hongos", "plantas", "control"]
	},
	{
		id: 22,
		name: "Algicida a Base de Cobre",
		brand: "CopperClean",
		categories: ["Pest and Disease Control"],
		price: 24.99,
		discount: 5,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/b/b4/Copper_algicide.jpg"
		],
		stock: 25,
		description: "Algicida líquido a base de cobre para el control de algas en soluciones nutritivas y estanques. Contenido: 1L.",
		keywords: ["algicida", "cobre", "algas", "nutrientes", "estanques"]
	},
	{
		id: 23,
		name: "Insecticida Orgánico para Plagas",
		brand: "EcoDefense",
		categories: ["Pest and Disease Control"],
		price: 14.99,
		discount: 0,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/c/c1/Organic_insecticide.jpg"
		],
		stock: 40,
		description: "Insecticida orgánico para el control de plagas comunes en jardines y huertos. Seguro para plantas y polinizadores. Contenido: 500ml.",
		keywords: ["insecticida", "orgánico", "plagas", "jardín", "huertos"]
	},
	{
		id: 24,
		name: "Aceite de Neem para Control de Plagas",
		brand: "NeemGuard",
		categories: ["Pest and Disease Control"],
		price: 19.99,
		discount: 0,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/d/d1/Neem_oil.jpg"
		],
		stock: 35,
		description: "Aceite de neem concentrado para el control de ácaros, pulgones y otras plagas. Ideal para uso en plantas ornamentales y comestibles. Contenido: 250ml.",
		keywords: ["aceite de neem", "plagas", "ácaros", "pulgones", "control"]
	},
	{
		id: 25,
		name: "Trampa Adhesiva para Insectos",
		brand: "StickyTrap",
		categories: ["Pest and Disease Control"],
		price: 7.99,
		discount: 0,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/a/a9/Sticky_trap.jpg"
		],
		stock: 50,
		description: "Trampa adhesiva para capturar insectos voladores como moscas blancas y trips. Ideal para invernaderos y jardines. Paquete de 10 unidades.",
		keywords: ["trampa", "adhesiva", "insectos", "invernadero", "jardín"]
	},
	{
		id: 26,
		name: "Semillas de Lechuga Romana Verde",
		brand: "HydroGrow",
		categories: ["Seeds"],
		price: 5.49,
		discount: 5,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/c/c1/Romaine_lettuce_seeds.jpg",
			"https://upload.wikimedia.org/wikipedia/commons/d/d1/Hydroponic_romaine_lettuce.jpg"
		],
		stock: 45,
		description: "Semillas de lechuga variedad Romana Verde (Lactuca sativa longifolia). Alta resistencia a enfermedades. Siembra: primavera y otoño. Duración del cultivo: 75-85 días. Distancia entre plantas: 25-30cm.",
		keywords: ["semillas", "lechuga", "romana", "hidroponía", "resistente"]
	},
	{
		id: 27,
		name: "Semillas de Lechuga Hoja de Roble Roja",
		brand: "LeafyGreen",
		categories: ["Seeds"],
		price: 5.99,
		discount: 0,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/e/e1/Red_oak_leaf_lettuce_seeds.jpg",
			"https://upload.wikimedia.org/wikipedia/commons/f/f2/Hydroponic_red_oak_leaf_lettuce.jpg"
		],
		stock: 40,
		description: "Semillas de lechuga variedad Hoja de Roble Roja (Lactuca sativa crispa). Resistente a plagas y enfermedades. Siembra: todo el año. Duración del cultivo: 55-65 días. Distancia entre plantas: 20-25cm.",
		keywords: ["semillas", "lechuga", "hoja de roble", "hidroponía", "resistente"]
	},
	{
		id: 28,
		name: "Semillas de Lechuga Batavia Rubia",
		brand: "GreenLeaf",
		categories: ["Seeds"],
		price: 4.99,
		discount: 0,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/a/a9/Lettuce_seeds.jpg",
			"https://upload.wikimedia.org/wikipedia/commons/b/b4/Hydroponic_lettuce.jpg"
		],
		stock: 50,
		description: "Semillas de lechuga variedad Batavia Rubia (Lactuca sativa). Resistente a enfermedades comunes en hidroponía. Siembra: todo el año. Duración del cultivo: 60-70 días. Distancia entre plantas: 20-25cm.",
		keywords: ["semillas", "lechuga", "batavia", "hidroponía", "resistente"]
	},
	{
		id: 29,
		name: "Semillas de Frutilla (Fresa) Chandler",
		brand: "BerryGrow",
		categories: ["Seeds"],
		price: 6.99,
		discount: 0,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/a/a9/Strawberry_seeds.jpg",
			"https://upload.wikimedia.org/wikipedia/commons/b/b4/Hydroponic_strawberries.jpg"
		],
		stock: 35,
		description: "Semillas de frutilla variedad Chandler (Fragaria × ananassa). Resistente a enfermedades comunes. Siembra: primavera y otoño. Duración del cultivo: 4-6 meses. Distancia entre plantas: 30-40cm.",
		keywords: ["semillas", "frutilla", "fresa", "hidroponía", "resistente"]
	},
	{
		id: 30,
		name: "Semillas de Tomate Cherry",
		brand: "TomatoTastic",
		categories: ["Seeds"],
		price: 4.49,
		discount: 5,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/c/c1/Tomato_seeds.jpg",
			"https://upload.wikimedia.org/wikipedia/commons/d/d1/Hydroponic_cherry_tomatoes.jpg"
		],
		stock: 40,
		description: "Semillas de tomate variedad Cherry (Solanum lycopersicum). Alta resistencia a enfermedades. Siembra: primavera y verano. Duración del cultivo: 60-70 días. Distancia entre plantas: 40-50cm.",
		keywords: ["semillas", "tomate", "cherry", "hidroponía", "resistente"]
	},
	{
		id: 31,
		name: "Semillas de Albahaca Genovese",
		brand: "HerbHaven",
		categories: ["Seeds"],
		price: 3.99,
		discount: 0,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/e/e1/Basil_seeds.jpg",
			"https://upload.wikimedia.org/wikipedia/commons/f/f2/Hydroponic_basil.jpg"
		],
		stock: 50,
		description: "Semillas de albahaca variedad Genovese (Ocimum basilicum). Resistente a plagas y enfermedades. Siembra: primavera y verano. Duración del cultivo: 60-70 días. Distancia entre plantas: 20-25cm.",
		keywords: ["semillas", "albahaca", "genovese", "hidroponía", "resistente"]
	},
	{
		id: 32,
		name: "Medidor Profesional pH/EC/TDS con Compensación de Temperatura",
		brand: "Bluelab",
		categories: ["Environmental Monitoring and Control"],
		price: 169.99,
		discount: 5,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/5/5c/Digital_pH_meter.jpg",
			"https://upload.wikimedia.org/wikipedia/commons/0/0b/EC_TDS_meter_hydroponics.jpg",
			"https://upload.wikimedia.org/wikipedia/commons/9/9f/Hydroponic_nutrient_testing.jpg"
		],
		stock: 12,
		description: "Dispositivo trifunción profesional con sonda de alta precisión y compensación automática de temperatura. Rango pH 0-14 (±0.01), EC 0-20 mS/cm (±1%), TDS 0-9999 ppm. Incluye estuche protector y soluciones de calibración.",
		keywords: ["ph", "conductividad", "nutrientes", "medidor", "profesional"]
	},
	{
		id: 32,
		name: "Termohigrómetro Digital con Registro de Datos",
		brand: "Govee",
		categories: ["Environmental Monitoring and Control"],
		price: 49.95,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/7/7d/Digital_thermometer_hygrometer.jpg",
			"https://upload.wikimedia.org/wikipedia/commons/0/0e/Temperature_humidity_sensor.jpg"
		],
		stock: 18,
		description: "Monitor dual para temperatura (-10°C a 60°C) y humedad relativa (0-99% RH) con memoria para 20,000 registros. Pantalla LCD retroiluminada y alertas programables. Precisión: ±0.5°C, ±3% RH.",
		keywords: ["temperatura", "humedad", "monitor", "ambiente", "digital"]
	},
	{
		id: 34,
		name: "Sonda de Humedad del Suelo Profesional",
		brand: "Xiaomi",
		categories: ["Environmental Monitoring and Control"],
		price: 34.99,
		discount: 10,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/4/47/Soil_moisture_meter.jpg",
			"https://upload.wikimedia.org/wikipedia/commons/e/ec/Soil_moisture_sensor.jpg"
		],
		stock: 25,
		description: "Kit de 3 sensores inalámbricos con conexión Bluetooth. Mide humedad del suelo (0-100%), temperatura ambiente (-40°C a 60°C) y fertilidad (EC 0-23 mS/cm). Resistente al agua IP67.",
		keywords: ["humedad", "suelo", "sensor", "jardín", "inalámbrico"]
	},
	{
		id: 35,
		name: "Termómetro de Solución Nutritiva Industrial",
		brand: "Hanna Instruments",
		categories: ["Environmental Monitoring and Control"],
		price: 89.50,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/1/1c/Digital_thermometer_industrial.jpg",
			"https://upload.wikimedia.org/wikipedia/commons/8/81/Nutrient_solution_temperature.jpg"
		],
		stock: 8,
		description: "Termómetro digital con sonda de acero inoxidable de 30 cm. Rango -50°C a 300°C (±0.5°C). Diseño impermeable IP68 para uso en soluciones hidropónicas. Incluye gancho de sujeción.",
		keywords: ["termómetro", "nutrientes", "solución", "hidroponico", "industrial"]
	},
	{
		id: 36,
		name: "Medidor Básico pH/Temperatura Económico",
		brand: "Vivosun",
		categories: ["Environmental Monitoring and Control"],
		price: 29.99,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/9/9a/Pocket_pH_meter.jpg"
		],
		stock: 35,
		description: "Medidor portátil de pH (0-14) y temperatura (0-80°C) con calibración manual. Ideal para principiantes. Precisión pH ±0.1, temperatura ±1°C. Incluye baterías y estuche.",
		keywords: ["ph", "temperatura", "medidor", "económico", "portátil"]
	},
	{
		id: 37,
		name: "Kit de Análisis de Suelo Completo",
		brand: "Luster Leaf",
		categories: ["Environmental Monitoring and Control"],
		price: 42.75,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/6/6e/Soil_test_kit.jpg",
			"https://upload.wikimedia.org/wikipedia/commons/3/3e/Soil_testing_procedure.jpg"
		],
		stock: 14,
		description: "Kit químico para análisis de pH, N-P-K y humedad del suelo. Incluye 40 pruebas, reactivos y tabla comparativa. Resultados en 5 minutos. Uso profesional y doméstico.",
		keywords: ["suelo", "análisis", "ph", "fertilidad", "kit"]
	},
	{
		id: 38,
		name: "Medidor EC/TDS Económico con Sonda Reemplazable",
		brand: "Sonkir",
		categories: ["Environmental Monitoring and Control"],
		price: 18.99,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/2/2b/TDS_meter_pen.jpg",
			"https://upload.wikimedia.org/wikipedia/commons/8/89/Water_quality_tester.jpg"
		],
		stock: 47,
		description: "Medidor portátil de conductividad eléctrica (0-9990 µS/cm) y sólidos disueltos (0-9990 ppm). Calibración manual con solución incluida. Ideal para uso doméstico. Precisión ±2%. Batería CR2032 incluida.",
		keywords: ["conductividad", "tds", "medidor", "económico", "portátil"]
	},
	{
		id: 39,
		name: "Estación Meteorológica Profesional para Invernadero",
		brand: "Davis Instruments",
		categories: ["Environmental Monitoring and Control"],
		price: 449.00,
		discount: 15,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/9/99/Weather_station_sensors.jpg",
			"https://upload.wikimedia.org/wikipedia/commons/6/6b/Greenhouse_monitoring_system.jpg"
		],
		stock: 5,
		description: "Sistema profesional con sensores inalámbricos para temperatura (-40°C a 65°C), humedad (0-100%), radiación solar (0-1800 W/m²) y velocidad del viento (0-89 m/s). Transmisión de datos a 300m. Pantalla LCD táctil.",
		keywords: ["estación", "meteorológica", "profesional", "invernadero", "sensores"]
	},
	{
		id: 40,
		name: "Sensor de Humedad de Suelo Básico",
		brand: "Vivosun",
		categories: ["Environmental Monitoring and Control"],
		price: 12.50,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/4/4c/Analog_soil_moisture_meter.jpg",
			"https://upload.wikimedia.org/wikipedia/commons/9/95/Soil_moisture_probe.jpg"
		],
		stock: 62,
		description: "Medidor analógico de humedad del suelo con sonda de 20 cm. Escala de 1-10 (seco-húmedo). Sin baterías requeridas. Ideal para macetas y jardinería básica.",
		keywords: ["humedad", "suelo", "analógico", "jardinería", "básico"]
	},
	{
		id: 41,
		name: "Medidor de pH de Bolsillo de Alta Precisión",
		brand: "Apera Instruments",
		categories: ["Environmental Monitoring and Control"],
		price: 79.95,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/f/fd/Pocket_pH_meter_02.jpg",
			"https://upload.wikimedia.org/wikipedia/commons/6/6e/PH_meter_calibration.jpg"
		],
		stock: 14,
		description: "Medidor profesional de pH con compensación automática de temperatura. Rango 0-14 (±0.01). Incluye 3 soluciones de calibración y estuche protector. Certificación IP67 contra agua y polvo.",
		keywords: ["ph", "precisión", "profesional", "medidor", "bolsillo"]
	},
	{
		id: 42,
		name: "Registrador Multiparámetro Bluetooth",
		brand: "Holtek",
		categories: ["Environmental Monitoring and Control"],
		price: 199.99,
		discount: 20,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/1/1d/Data_logger_device.jpg",
			"https://upload.wikimedia.org/wikipedia/commons/7/7e/Bluetooth_sensor_array.jpg"
		],
		stock: 7,
		description: "Dispositivo 4 en 1 que mide pH (0-14), EC (0-20 mS/cm), temperatura (-10°C a 100°C) e intensidad lumínica (0-200,000 lux). Conexión Bluetooth y app móvil con gráficos. Memoria para 50,000 registros.",
		keywords: ["multiparámetro", "bluetooth", "registrador", "profesional", "monitoreo"]
	},
	{
		id: 43,
		name: "Medidor de pH Básico",
		brand: "AgroTech",
		categories: ["Environmental Monitoring and Control"],
		price: 9.99,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/6/6c/PH_test_strips.jpg"
		],
		stock: 83,
		description: "Kit económico con 100 tiras reactivas para medición de pH (rango 3-10). Incluye carta de colores comparativa. Precisión ±0.5 unidades. Ideal para uso ocasional.",
		keywords: ["ph", "tiras", "económico", "básico", "genérico"]
	},
	{
		id: 44,
		name: "Medidor TDS Portátil Genérico",
		brand: "GreenPro",
		categories: ["Environmental Monitoring and Control"],
		price: 8.50,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/8/89/Water_quality_tester.jpg"
		],
		stock: 95,
		description: "Medidor de sólidos disueltos (TDS) tipo bolígrafo. Rango 0-9990 ppm. Calibración manual con tornillo. Batería incluida (CR2032). Precisión ±2%.",
		keywords: ["tds", "genérico", "portátil", "económico", "medidor"]
	},
	{
		id: 45,
		name: "Sensor de Humedad de Suelo Genérico",
		brand: "PlantCare",
		categories: ["Environmental Monitoring and Control"],
		price: 6.99,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/9/95/Soil_moisture_probe.jpg"
		],
		stock: 120,
		description: "Sensor analógico básico con aguja indicadora. Longitud de sonda 15 cm. No requiere baterías. Escala de humedad: 1 (seco) a 10 (húmedo).",
		keywords: ["humedad", "suelo", "genérico", "sensor", "básico"]
	},
	{
		id: 46,
		name: "Termohigrómetro Digital Mini",
		brand: "Brennenstuhl",
		categories: ["Environmental Monitoring and Control"],
		price: 7.25,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/2/21/Mini_digital_thermometer.jpg"
		],
		stock: 64,
		description: "Dispositivo compacto de doble función (temperatura y humedad). Pantalla LCD de 3 cm. Rango: -50°C a 70°C (±1°C), 10-99% RH (±5%).",
		keywords: ["termómetro", "humedad", "mini", "económico", "digital"]
	},
	{
		id: 47,
		name: "Vasos de Soporte para Sistema NFT",
		brand: "HydroSupport",
		categories: ["General Supplies", "Irrigation and Cultivation Systems"],
		price: 12.99,
		discount: 0,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/a/a9/NFT_support_cups.jpg"
		],
		stock: 50,
		description: "Paquete de 10 vasos de soporte para sistemas NFT. Diseñados para mantener las plantas en su lugar y facilitar el crecimiento de raíces saludables.",
		keywords: ["vasos", "soporte", "NFT", "hidroponía", "sistema"]
	},
	{
		id: 48,
		name: "Bandeja Almaciguera para Semilleros",
		brand: "SeedStart",
		categories: ["General Supplies"],
		price: 8.99,
		discount: 5,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/b/b4/Seedling_tray.jpg",
			"https://upload.wikimedia.org/wikipedia/commons/c/c1/Seedling_tray_closeup.jpg"
		],
		stock: 60,
		description: "Bandeja almaciguera con 50 cavidades para semilleros. Ideal para iniciar el cultivo de plantas y verduras. Incluye tapa transparente para crear efecto invernadero.",
		keywords: ["bandeja", "almaciguera", "semilleros", "cultivo", "invernadero"]
	},
	{
		id: 49,
		name: "Sustrato de Fibra de Coco",
		brand: "CocoGrow",
		categories: ["General Supplies"],
		price: 14.99,
		discount: 0,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/e/e1/Coco_fiber_substrate.jpg"
		],
		stock: 40,
		description: "Sustrato de fibra de coco de alta calidad. Ideal para mejorar la retención de agua y aireación en macetas y sistemas hidropónicos. Contenido: 10L.",
		keywords: ["sustrato", "fibra de coco", "hidroponía", "macetas", "cultivo"]
	},
	{
		id: 50,
		name: "Perlita Expandida para Jardinería",
		brand: "PerliGrow",
		categories: ["General Supplies"],
		price: 9.99,
		discount: 0,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/f/f2/Perlite_for_gardening.jpg"
		],
		stock: 55,
		description: "Perlita expandida para mejorar el drenaje y aireación del suelo. Ideal para mezclar con tierra y sustratos. Contenido: 20L.",
		keywords: ["perlita", "jardinería", "drenaje", "suelo", "sustrato"]
	},
	{
		id: 51,
		name: "Malla Anti-Malezas",
		brand: "WeedGuard",
		categories: ["General Supplies"],
		price: 19.99,
		discount: 0,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/a/a9/Weed_barrier_fabric.jpg"
		],
		stock: 30,
		description: "Malla anti-malezas de alta resistencia. Permite el paso de agua y nutrientes mientras bloquea el crecimiento de malezas. Dimensiones: 3m x 10m.",
		keywords: ["malla", "anti-malezas", "jardinería", "suelo", "control"]
	},
	{
		id: 52,
		name: "Polietileno para Invernadero",
		brand: "GreenCover",
		categories: ["General Supplies"],
		price: 49.99,
		discount: 10,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/c/c1/Greenhouse_plastic.jpg"
		],
		stock: 20,
		description: "Lámina de polietileno resistente para invernaderos. Protege las plantas de condiciones climáticas adversas. Dimensiones: 6m x 10m.",
		keywords: ["polietileno", "invernadero", "protección", "plantas", "clima"]
	},
	{
		id: 53,
		name: "Malla Antiáfidos para Invernadero",
		brand: "AphidGuard",
		categories: ["General Supplies"],
		price: 24.99,
		discount: 5,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/b/b4/Anti_aphid_netting.jpg"
		],
		stock: 25,
		description: "Malla especializada para evitar la entrada de áfidos en invernaderos. Permite la circulación de aire y luz. Dimensiones: 5m x 10m.",
		keywords: ["malla", "antiáfidos", "invernadero", "protección", "plagas"]
	},
	{
		id: 54,
		name: "Geomembrana para Control de Malezas",
		brand: "EcoMembrane",
		categories: ["General Supplies"],
		price: 34.99,
		discount: 0,
		images: [
			"https://upload.wikimedia.org/wikipedia/commons/d/d1/Geomembrane_for_weed_control.jpg"
		],
		stock: 15,
		description: "Geomembrana impermeable para control de malezas y retención de humedad en el suelo. Ideal para áreas grandes. Dimensiones: 4m x 10m.",
		keywords: ["geomembrana", "control", "malezas", "suelo", "humedad"]
	},
];

export default products;
