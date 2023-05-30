import {Fragment} from 'react';
import {HeroBanner} from '../components/HeroBanner';
import {ExpertiseAgence} from '../components/ExpertiseAgence';
import {HeroAction} from '../components/HeroAction';

import ComputerPhone from '../assets/computer-phone.svg';

export default function AgenceExpertisesPage() {
    const heroBannerContent = {
        backgroundColor: "bg-gradient-to-l from-green-50 to-green-100",
        category: "les EXPERTISES de notre agence web",
        title: "Créer votre site web et gagner en notoriété",
        subtitle: "Optimiser vos parcours de conversion afin d’accroître votre chiffre d’affaire et gagner en visibilité. Notre agence web s’efforce de placer l’utilisateur au centre de la création afin de créer un site web engageant et pertinent. Faites appel à nos experts en UX design et à nos développeurs web.",
        button: "Gagner en notoriété",
        image: ComputerPhone,
        width: "550px",
        mb: 0, 
        mr: 0,
    } 
    const expertiseAgenceContent = {
        mainTitle: 'Nous sommes experts en UX design & en développement web',
        links: ['Études & conseil UX', 'UX design & conception', 'Développement web & app', 'Audit technique & TMA'],
        subsections: [
            {
            subTitle: 'Études & Conseil UX',
            cards: [
                    {   
                        title: 'Audit UX', 
                        titleClass: 'text-green-50', 
                        content: 'Quels sont les problèmes ergonomiques de votre site et application ?', 
                        buttonHoverClass: 'bg-green-50', 
                        buttonText: 'En savoir plus', 
                        buttonTextHoverClass: 'text-gray-900', 
                        buttonBorderClass:'border-gray-50', 
                        buttonBorderHoverClass: 'border-gray-900',
                    },
                    { 
                        title: 'Benchmark UX', 
                        titleClass: 'text-pink-200', 
                        content: 'Quels sont les problèmes ergonomiques de votre site et application ?', 
                        buttonHoverClass: 'bg-pink-200', 
                        buttonText: 'En savoir plus', 
                        buttonTextHoverClass: 'text-gray-900', 
                        buttonBorderClass:'border-gray-50', 
                        buttonBorderHoverClass: 'border-gray-900',
                    },
                    { 
                        title: 'Études utilisateurs', 
                        titleClass: 'text-yellow-400', 
                        content: 'Quels sont les problèmes ergonomiques de votre site et application ?', 
                        buttonHoverClass: 'bg-yellow-400', 
                        buttonText: 'En savoir plus', 
                        buttonTextHoverClass: 'text-gray-900', 
                        buttonBorderClass:'border-gray-50', 
                        buttonBorderHoverClass: 'border-gray-900',
                    },
                    { 
                        title: 'Audit UX', 
                        titleClass: 'text-blue-50', 
                        content: 'Quels sont les problèmes ergonomiques de votre site et application ?', 
                        buttonHoverClass: 'bg-blue-50', 
                        buttonText: 'En savoir plus', 
                        buttonTextHoverClass: 'text-gray-900', 
                        buttonBorderClass:'border-gray-50', 
                        buttonBorderHoverClass: 'border-gray-900', 
                    },
                    { 
                        title: 'Benchmark UX', 
                        titleClass: 'text-red-200', 
                        content: 'Quels sont les problèmes ergonomiques de votre site et application ?', 
                        buttonHoverClass: 'bg-red-200', 
                        buttonText: 'En savoir plus', 
                        buttonTextHoverClass: 'text-gray-900', 
                        buttonBorderClass:'border-gray-50', 
                        buttonBorderHoverClass: 'border-gray-900',
                    },
                    { 
                        bgClass: 'bg-gray-900',
                        borderClass: 'border-[0.5px] border-gray-50',
                        title: 'Études utilisateurs', 
                        titleClass: 'text-gray-50', 
                        content: 'Quels sont les problèmes ergonomiques de votre site et application ?', 
                        buttonHoverClass: 'bg-gray-50', 
                        buttonText: 'En savoir plus', 
                        buttonTextHoverClass: 'text-gray-900', 
                        buttonBorderClass:'border-gray-50', 
                        buttonBorderHoverClass: 'border-gray-900',
                    },
                ],
            },
            {
            subTitle: 'UX Design & Conception',
            cards: [
                    {   
                        title: 'Audit UX', 
                        titleClass: 'text-green-50', 
                        content: 'Quels sont les problèmes ergonomiques de votre site et application ?', 
                        buttonHoverClass: 'bg-green-50', 
                        buttonText: 'En savoir plus', 
                        buttonTextHoverClass: 'text-gray-900', 
                        buttonBorderClass:'border-gray-50', 
                        buttonBorderHoverClass: 'border-gray-900',
                    },
                    { 
                        title: 'Benchmark UX', 
                        titleClass: 'text-pink-200', 
                        content: 'Quels sont les problèmes ergonomiques de votre site et application ?', 
                        buttonHoverClass: 'bg-pink-200', 
                        buttonText: 'En savoir plus', 
                        buttonTextHoverClass: 'text-gray-900', 
                        buttonBorderClass:'border-gray-50', 
                        buttonBorderHoverClass: 'border-gray-900',
                    },
                    { 
                        title: 'Études utilisateurs', 
                        titleClass: 'text-yellow-400', 
                        content: 'Quels sont les problèmes ergonomiques de votre site et application ?', 
                        buttonHoverClass: 'bg-yellow-400', 
                        buttonText: 'En savoir plus', 
                        buttonTextHoverClass: 'text-gray-900', 
                        buttonBorderClass:'border-gray-50', 
                        buttonBorderHoverClass: 'border-gray-900',
                    },
                    { 
                        title: 'Audit UX', 
                        titleClass: 'text-blue-50', 
                        content: 'Quels sont les problèmes ergonomiques de votre site et application ?', 
                        buttonHoverClass: 'bg-blue-50', 
                        buttonText: 'En savoir plus', 
                        buttonTextHoverClass: 'text-gray-900', 
                        buttonBorderClass:'border-gray-50', 
                        buttonBorderHoverClass: 'border-gray-900', 
                    },
                    { 
                        title: 'Benchmark UX', 
                        titleClass: 'text-red-200', 
                        content: 'Quels sont les problèmes ergonomiques de votre site et application ?', 
                        buttonHoverClass: 'bg-red-200', 
                        buttonText: 'En savoir plus', 
                        buttonTextHoverClass: 'text-gray-900', 
                        buttonBorderClass:'border-gray-50', 
                        buttonBorderHoverClass: 'border-gray-900',
                    },
                    { 
                        bgClass: 'bg-gray-900',
                        borderClass: 'border-[0.5px] border-gray-50',
                        title: 'Études utilisateurs', 
                        titleClass: 'text-gray-50', 
                        content: 'Quels sont les problèmes ergonomiques de votre site et application ?', 
                        buttonHoverClass: 'bg-gray-50', 
                        buttonText: 'En savoir plus', 
                        buttonTextHoverClass: 'text-gray-900', 
                        buttonBorderClass:'border-gray-50', 
                        buttonBorderHoverClass: 'border-gray-900',
                    },    
                ],
            },
            {
            subTitle: 'Développement web & app',
            cards: [
                    {   
                        title: 'Audit UX', 
                        titleClass: 'text-green-50', 
                        content: 'Quels sont les problèmes ergonomiques de votre site et application ?', 
                        buttonHoverClass: 'bg-green-50', 
                        buttonText: 'En savoir plus', 
                        buttonTextHoverClass: 'text-gray-900', 
                        buttonBorderClass:'border-gray-50', 
                        buttonBorderHoverClass: 'border-gray-900',
                    },
                    { 
                        title: 'Benchmark UX', 
                        titleClass: 'text-pink-200', 
                        content: 'Quels sont les problèmes ergonomiques de votre site et application ?', 
                        buttonHoverClass: 'bg-pink-200', 
                        buttonText: 'En savoir plus', 
                        buttonTextHoverClass: 'text-gray-900', 
                        buttonBorderClass:'border-gray-50', 
                        buttonBorderHoverClass: 'border-gray-900',
                    },
                    { 
                        title: 'Études utilisateurs', 
                        titleClass: 'text-yellow-400', 
                        content: 'Quels sont les problèmes ergonomiques de votre site et application ?', 
                        buttonHoverClass: 'bg-yellow-400', 
                        buttonText: 'En savoir plus', 
                        buttonTextHoverClass: 'text-gray-900', 
                        buttonBorderClass:'border-gray-50', 
                        buttonBorderHoverClass: 'border-gray-900',
                    },
                    { 
                        title: 'Audit UX', 
                        titleClass: 'text-blue-50', 
                        content: 'Quels sont les problèmes ergonomiques de votre site et application ?', 
                        buttonHoverClass: 'bg-blue-50', 
                        buttonText: 'En savoir plus', 
                        buttonTextHoverClass: 'text-gray-900', 
                        buttonBorderClass:'border-gray-50', 
                        buttonBorderHoverClass: 'border-gray-900', 
                    },
                    { 
                        title: 'Benchmark UX', 
                        titleClass: 'text-red-200', 
                        content: 'Quels sont les problèmes ergonomiques de votre site et application ?', 
                        buttonHoverClass: 'bg-red-200', 
                        buttonText: 'En savoir plus', 
                        buttonTextHoverClass: 'text-gray-900', 
                        buttonBorderClass:'border-gray-50', 
                        buttonBorderHoverClass: 'border-gray-900',
                    },
                    { 
                        bgClass: 'bg-gray-900',
                        borderClass: 'border-[0.5px] border-gray-50',
                        title: 'Études utilisateurs', 
                        titleClass: 'text-gray-50', 
                        content: 'Quels sont les problèmes ergonomiques de votre site et application ?', 
                        buttonHoverClass: 'bg-gray-50', 
                        buttonText: 'En savoir plus', 
                        buttonTextHoverClass: 'text-gray-900', 
                        buttonBorderClass:'border-gray-50', 
                        buttonBorderHoverClass: 'border-gray-900',
                    },
                ],
            },
            {
            subTitle: 'Audit technique & TMA',
            cards: [
                    {   
                        title: 'Audit UX', 
                        titleClass: 'text-green-50', 
                        content: 'Quels sont les problèmes ergonomiques de votre site et application ?', 
                        buttonHoverClass: 'bg-green-50', 
                        buttonText: 'En savoir plus', 
                        buttonTextHoverClass: 'text-gray-900', 
                        buttonBorderClass:'border-gray-50', 
                        buttonBorderHoverClass: 'border-gray-900',
                    },
                    { 
                        title: 'Benchmark UX', 
                        titleClass: 'text-pink-200', 
                        content: 'Quels sont les problèmes ergonomiques de votre site et application ?', 
                        buttonHoverClass: 'bg-pink-200', 
                        buttonText: 'En savoir plus', 
                        buttonTextHoverClass: 'text-gray-900', 
                        buttonBorderClass:'border-gray-50', 
                        buttonBorderHoverClass: 'border-gray-900',
                    },
                    { 
                        title: 'Études utilisateurs', 
                        titleClass: 'text-yellow-400', 
                        content: 'Quels sont les problèmes ergonomiques de votre site et application ?', 
                        buttonHoverClass: 'bg-yellow-400', 
                        buttonText: 'En savoir plus', 
                        buttonTextHoverClass: 'text-gray-900', 
                        buttonBorderClass:'border-gray-50', 
                        buttonBorderHoverClass: 'border-gray-900',
                    },
                    { 
                        title: 'Audit UX', 
                        titleClass: 'text-blue-50', 
                        content: 'Quels sont les problèmes ergonomiques de votre site et application ?', 
                        buttonHoverClass: 'bg-blue-50', 
                        buttonText: 'En savoir plus', 
                        buttonTextHoverClass: 'text-gray-900', 
                        buttonBorderClass:'border-gray-50', 
                        buttonBorderHoverClass: 'border-gray-900', 
                    },
                    { 
                        title: 'Benchmark UX', 
                        titleClass: 'text-red-200', 
                        content: 'Quels sont les problèmes ergonomiques de votre site et application ?', 
                        buttonHoverClass: 'bg-red-200', 
                        buttonText: 'En savoir plus', 
                        buttonTextHoverClass: 'text-gray-900', 
                        buttonBorderClass:'border-gray-50', 
                        buttonBorderHoverClass: 'border-gray-900',
                    },
                    { 
                        bgClass: 'bg-gray-900',
                        borderClass: 'border-[0.5px] border-gray-50',
                        title: 'Études utilisateurs', 
                        titleClass: 'text-gray-50', 
                        content: 'Quels sont les problèmes ergonomiques de votre site et application ?', 
                        buttonHoverClass: 'bg-gray-50', 
                        buttonText: 'En savoir plus', 
                        buttonTextHoverClass: 'text-gray-900', 
                        buttonBorderClass:'border-gray-50', 
                        buttonBorderHoverClass: 'border-gray-900',
                    },
                ],
            },
            // Add more subsections as needed.
        ],
    };
    return (
        <Fragment>
            <HeroBanner 
                backgroundColor={heroBannerContent.backgroundColor}
                category={heroBannerContent.category}
                title={heroBannerContent.title}
                subtitle={heroBannerContent.subtitle}
                button={heroBannerContent.button}
                image={heroBannerContent.image}
            />
            <div className='mb-5'></div>
            <ExpertiseAgence expertiseAgenceContent={expertiseAgenceContent} />
            <div className='mb-5'></div>
            <HeroAction 
                title="Augmentez votre chiffre d'affaire en créant un site web adapté pour vos clients" 
                subtitle="En utilisant une démarche UX design, vous augmenterez considérablement vos taux de conversion et de rétention."
                actions={[
                    { text: 'Action 1', link: '/lien-1' },
                    { text: 'Action 2', link: '/lien-2' },
                    { text: 'Action 3', link: '/lien-3' },
            ]}
            />
        </Fragment>
    );
}
