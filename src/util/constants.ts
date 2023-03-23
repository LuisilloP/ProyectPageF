/* eslint-disable @typescript-eslint/indent */
import iconMedia from '../../public/icons/social-media.png'
import iconAbout from '../../public/icons/about-us.png'
import iconWhatsApp from '../../public/icons/whatsapp.png'
import iconContactForm from '../../public/icons/contact-form.png'
import iconResponsive from '../../public/icons/responsive.png'
import iconUpdate from '../../public/icons/update.png'
import iconEComerce from '../../public/icons/e-comerce.png'
export const NavValues =
    [
        { id: 'home', name: 'Principal', href: '/' },
        { id: 'pages', name: 'Paginas', href: '/paginas' },
        { id: 'contact', name: 'Contacto', href: '/contacto' }
    ]
/// 'Dos modificaciones']
const spectsDefault = [[iconMedia, 'Enlaces a redes sociales'],
[iconAbout, 'Seccion de Nosotros'], [iconWhatsApp, 'Boton para WhatsApp'], [iconContactForm, 'Formulario de Contacto'],
[iconResponsive, 'Pagina responsiva']]
const spectsBasic = spectsDefault.concat([[iconUpdate, 'Una modificaciones']])
const spectsAvanced = spectsDefault.concat([[iconUpdate, 'Dos modificaciones'], [iconEComerce, 'Sitio para comercio']])
const spectsPremium = spectsDefault.concat([[iconUpdate, 'Cuatro modificaciones'], [iconEComerce, 'Sitio para comercio'],
[iconEComerce, 'Sitio para comercio']])
export const ConstantsPagesCard =
    [
        {
            id: 1,
            name: 'Basica',
            description: 'Ideal para empezar',
            price: 70000,
            specs: spectsBasic,
            color: 'bg-gradient-to-b from-orange-500 to-yellow-400'
        },
        {
            id: 2,
            name: 'Avanzado',
            description: 'Una pagina realmente completa!',
            price: 110000,
            specs: spectsAvanced,
            color: 'bg-gradient-to-b from-blue-700 to-cyan-400'
        },
        {
            id: 3,
            name: 'Premium',
            description: 'Lo mejor de un sitio web, solo para ti!',
            price: 160000,
            specs: spectsPremium,
            color: 'bg-gradient-to-b from-red-700 to-red-400'
        }

    ]
