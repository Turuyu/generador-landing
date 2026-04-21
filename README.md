# Generador de Landing Pages

Herramienta web interactiva que genera landing pages profesionales para cualquier empresa o área profesional en pocos minutos.

## Características

- **Cuestionario paso a paso**: Recopila información de la empresa de forma guiada
- **Diseño personalizado**: Permite subir archivos MD o enlaces de referencia
- **Personalización de colores**: Selector de colores primarios, secundarios y de acento
- **Preview en tiempo real**: Vista previa de los datos antes de generar
- **Descarga ZIP**: Genera archivos HTML, CSS y JS listos para usar
- **Responsive design**: Las landing pages generadas son completamente responsivas

## Áreas profesionales soportadas

- Tecnología y Software
- Marketing y Publicidad
- Consultoría
- Salud y Medicina
- Educación
- Finanzas y Contabilidad
- Servicios Legales
- Bienes Raíces
- Construcción
- Alimentación y Restaurantes
- Moda y Vestuario
- Y cualquier otra área...

## Stack Tecnológico

| Tecnología | Propósito |
|------------|-----------|
| **Next.js 14** | Framework web |
| **React 18** | Interfaz de usuario |
| **TypeScript** | Tipado estático |
| **JSZip** | Generación de archivos ZIP |
| **FileSaver.js** | Descarga de archivos |

## Estructura del proyecto

```
generador-landing/
├── app/
│   ├── globals.css      # Estilos globales
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Página principal
├── components/
│   ├── FileUploader.tsx    # Componente para subir MD/enlaces
│   └── Questionnaire.tsx   # Formulario paso a paso
├── lib/
│   ├── cssGenerator.ts   # Generador de CSS
│   ├── generator.ts      # Generador de HTML
│   ├── jsGenerator.ts   # Generador de JavaScript
│   ├── questions.ts     # Configuración del cuestionario
│   └── zipGenerator.ts  # Generador del ZIP
├── types/
│   └── index.ts         # Tipos TypeScript
├── package.json
├── tsconfig.json
└── next.config.js
```

## Landing pages generadas

Las landing pages generadas incluyen:

1. **Hero Section**: Cabecera con título, subtítulo y called-to-action
2. **About Section**: Descripción de la empresa con estadísticas
3. **Services Section**: Grid de servicios/productos
4. **Pricing Section**: Planes de precios con características
5. **Testimonials Section**: Testimonios de clientes
6. **CTA Section**: Llamada a acción final
7. **Contact Section**: Formulario de contacto e información
8. **Footer**: Links rápidos y redes sociales

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Turuyu/generador-landing.git

# Entrar al directorio
cd generador-landing

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## Uso

1. Abre http://localhost:3000 en tu navegador
2. Completa el cuestionario paso a paso:
   - **Empresa**: Nombre, área, descripción, contacto
   - **Servicios**: Agrega tus servicios/productos
   - **Precios**: Configura planes de precios (opcional)
   - **Testimonios**: Agrega testimonios de clientes (opcional)
   - **Diseño**: Sube un MD o enlace de referencia + colores
   - **Preview**: Revisa tu información
3. Haz clic en "Generar Landing"
4. Descarga el archivo ZIP
5. Descomprime y abre `index.html` en tu navegador

## Despliegue

Puedes desplegar la aplicación en:

- **Vercel** (recomendado): Conecta tu repositorio a Vercel
- **Netlify**: Arrastra la carpeta del build
- **GitHub Pages**: Usa GitHub Actions

## Contribución

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request.

## Licencia

MIT
