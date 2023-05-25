import {Fragment} from 'react';
import {HeroBanner} from './HeroBanner';
import {HeroAction} from './HeroAction';
import Solutions from './Solutions';

import BlueIcon from '../assets/blue-icon.svg';
import PurpleIcon from '../assets/purple-icon.svg';
import YellowIcon from '../assets/yellow-icon.svg';
import PinkIcon from '../assets/pink-icon.svg';
import RedIcon from '../assets/red-icon.svg';
import GreenIcon from '../assets/green-icon.svg';

import ComputerPhone from '../assets/computer-phone.svg';

export default function AgenceSolutionsPage() {
    const heroBannerContent = {
        backgroundColor: "bg-gradient-to-l from-green-50 to-green-100",
        category: "Agence Web",
        title: "Concepteurs d’expériences digitales qui propulsent votre business",
        subtitle: "Depuis plus de 3 ans, notre agence web place l’utilisateur au centre de la création de site afin de faire rayonner votre marque. Avec l’UX design, nous réalisons des expériences digitales engageantes pour vos clients.",
        button: "Propulser mon business",
        image: ComputerPhone,
        width: 100,
        mb: -32,
        mr: -14
    };
    const solutionIntroContent = [
        {
        id: 1,
        category: '',
        title: 'Nous créons des solutions digitales qui répondent à vos besoins',
        subtitle: '',
        },
    ];
    const solutionCardContent = [
        {
            id: 1,
            title: 'Ux Design',
            text1: 'Optimiser et améliorer l’',
            textColor: 'Ux Design ',
            text2: ' de votre projet et booster votre business',
            button: 'En savoir plus',
            image: BlueIcon,
        },
        {
            id: 2,
            title: 'Design System',
            text1: 'Créer votre ',
            textColor: 'Design System ',
            text2: 'dans un budget maîtrisé et améliorer votre productivité',
            button: 'En savoir plus',
            image: PurpleIcon,
        },
        {
            id: 3, 
            title: 'MvP / Prototype',
            text1: 'Créer votre ',
            textColor: 'MvP / Prototype ',
            text2: 'dans un budget maîtrisé et propulser votre marque',
            button: 'En savoir plus',
            image: YellowIcon,
        },
        {
            id: 4,
            title: 'Site Web',
            text1: 'Créer un ',
            textColor: 'Site Web ',
            text2: 'et augmentez vos taux de conversions et rétention',
            button: 'En savoir plus',
            image: PinkIcon,
        },
        {
            id: 5,
            title: 'e-Commerce Shopify',
            text1: 'Créer votre ',
            textColor: 'e-Commerce Shopify ',
            text2: 'et booster les ventes de votre marque',
            button: 'En savoir plus',
            image: GreenIcon,
        },
        {
            id: 6,
            title: 'Progressive Web App',
            text1: 'Créer votre ',
            textColor: 'Progressive Web App ',
            text2: 'et augmentez votre satisfaction client',
            button: 'En savoir plus',
            image: RedIcon,
        },
    ];
    const heroActionContent = {
        title: "Augmentez votre chiffre d'affaire en créant un site web adapté pour vos clients",
        subtitle: "En utilisant une démarche UX design, vous augmenterez considérablement vos taux de conversion et de rétention.",
        actions: [
        { text: 'Action 1', link: '/lien-1' },
        { text: 'Action 2', link: '/lien-2' },
        { text: 'Action 3', link: '/lien-3' },
        ]
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
            <Solutions 
                solutionIntroContent={solutionIntroContent}
                solutionCardContent={solutionCardContent}
            />
            <div className='mb-5'></div>
            <HeroAction 
                title={heroActionContent.title} 
                subtitle={heroActionContent.subtitle}
                actions={heroActionContent.actions}
            />
            <div className='mb-5'></div>
        </Fragment>
    );
}
