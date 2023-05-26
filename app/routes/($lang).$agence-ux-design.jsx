import {Fragment} from 'react';
import {HeroBanner} from '../components/HeroBanner';
import Solutions from '../components/Solutions';
import {Methodology} from '../components/Methodology';
import {References} from '../components/References';
import {HeroAction} from '../components/HeroAction';

import BlueIcon from '../assets/blue-icon.svg';
import PurpleIcon from '../assets/purple-icon.svg';
import YellowIcon from '../assets/yellow-icon.svg';
import PinkIcon from '../assets/pink-icon.svg';
import RedIcon from '../assets/red-icon.svg';
import GreenIcon from '../assets/green-icon.svg';

import Phone from '../assets/phone.svg';
import DoublePhone from '../assets/double-phone.svg';
import ComputerPhone from '../assets/computer-phone.svg';
import Tablet from '../assets/tablet.svg'; 

export default function AgenceUxDesignPage() {
    const heroBannerContent = {
        backgroundColor: "bg-gradient-to-l from-green-50 to-green-100",
        category: "Ux Design & conception",
        title: "Créer une expérience unique pour vos utilisateurs",
        subtitle: "10 secondes c’est le temps nécessaire à un utilisateur de faire son choix : rester ou quitter votre site web. C’est pourquoi il est crucial de captiver l'attention des utilisateurs d'un site web ou d'une application mobile dès les premières secondes en optimisant l’UX design.",
        button: "Créer une expérience unique",
        image: ComputerPhone,
        width: 100,
        mb: -32,
        mr: -14
    };
    const solutionsIntroContent = [
        {
        id: 1,
        category: '',
        title: 'Nous créons des solutions digitales qui répondent à vos besoins',
        subtitle: '',
        },
    ];
    const solutionsCardContent = [
        {
            id: 1,
            title: 'Ux Design',
            text1: 'Optimiser et améliorer l’',
            textColor: 'Ux Design ',
            text2: ' de votre projet et booster votre business',
            button: 'En savoir plus',
            image: BlueIcon,
            border: true,
        },
        {
            id: 2,
            title: 'Design System',
            text1: 'Créer votre ',
            textColor: 'Design System ',
            text2: 'dans un budget maîtrisé et améliorer votre productivité',
            button: 'En savoir plus',
            image: PurpleIcon,
            border: true,
        },
        {
            id: 3, 
            title: 'MvP / Prototype',
            text1: 'Créer votre ',
            textColor: 'MvP / Prototype ',
            text2: 'dans un budget maîtrisé et propulser votre marque',
            button: 'En savoir plus',
            image: YellowIcon,
            border: true,
        },
        {
            id: 4,
            title: 'Site Web',
            text1: 'Créer un ',
            textColor: 'Site Web ',
            text2: 'et augmentez vos taux de conversions et rétention',
            button: 'En savoir plus',
            image: PinkIcon,
            border: true,
        },
        {
            id: 5,
            title: 'e-Commerce Shopify',
            text1: 'Créer votre ',
            textColor: 'e-Commerce Shopify ',
            text2: 'et booster les ventes de votre marque',
            button: 'En savoir plus',
            image: GreenIcon,
            border: true,
        },
        {
            id: 6,
            title: 'Progressive Web App',
            text1: 'Créer votre ',
            textColor: 'Progressive Web App ',
            text2: 'et augmentez votre satisfaction client',
            button: 'En savoir plus',
            image: RedIcon,
            border: true,
        },
    ];
    const referencesIntroContent = [   
        {
            id: 1,
            category: 'Références',
            title: 'Des expériences engageantes',
            subtitle: "Depuis 2020, notre agence web met en synergie son expertise en UX design et développement web et mobile pour élaborer des sites internet extrêmement performants. Notre secret ? Mettre en collaboration des individus talentueux, motivés pour relever des défis audacieux au service de l'expérience utilisateur (UX) et du retour sur investissement (ROI).",
        },
    ];
    const referencesCardContent = [
    {
        id: 1,
        title: 'Créer votre e-commerce et booster les ventes de votre marque',
        button: 'En savoir plus',
        image: DoublePhone,
        client: "Nom Client",
        subtitle: "Augmenter les ventes de produit en ligne en créant une expérience sur-mesure."
    },
    {
        id: 2,
        title: 'Créer votre e-commerce et booster les ventes de votre marque',
        button: 'En savoir plus',
        image: ComputerPhone,
        client: "Nom Client",
        subtitle: "Augmenter les ventes de produit en ligne en créant une expérience sur-mesure."
    },
    {
        id: 3,
        title: 'Créer votre e-commerce et booster les ventes de votre marque',
        button: 'En savoir plus',
        image: Tablet,
        client: "Nom Client",
        subtitle: "Augmenter les ventes de produit en ligne en créant une expérience sur-mesure."
    },
    {
        id: 4,
        title: 'Créer votre e-commerce et booster les ventes de votre marque',
        button: 'En savoir plus',
        image: DoublePhone,
        client: "Nom Client",
        subtitle: "Augmenter les ventes de produit en ligne en créant une expérience sur-mesure."
    },
    {
        id: 5,
        title: 'Créer votre e-commerce et booster les ventes de votre marque',
        button: 'En savoir plus',
        image: DoublePhone,
        client: "Nom Client",
        subtitle: "Augmenter les ventes de produit en ligne en créant une expérience sur-mesure."
    },
    {
        id: 6,
        title: 'Créer votre e-commerce et booster les ventes de votre marque',
        button: 'En savoir plus',
        image: DoublePhone,
        client: "Nom Client",
        subtitle: "Augmenter les ventes de produit en ligne en créant une expérience sur-mesure."
    },
    {
        id: 7,
        title: 'Créer votre e-commerce et booster les ventes de votre marque',
        button: 'En savoir plus',
        image: DoublePhone,
        client: "Nom Client",
        subtitle: "Augmenter les ventes de produit en ligne en créant une expérience sur-mesure."
    },
    {
        id: 8,
        title: 'Créer votre e-commerce et booster les ventes de votre marque',
        button: 'En savoir plus',
        image: ComputerPhone,
        client: "Nom Client",
        subtitle: "Augmenter les ventes de produit en ligne en créant une expérience sur-mesure."
    },
    {
        id: 9,
        title: 'Créer votre e-commerce et booster les ventes de votre marque',
        button: 'En savoir plus',
        image: Tablet,
        client: "Nom Client",
        subtitle: "Augmenter les ventes de produit en ligne en créant une expérience sur-mesure."
    },
    {
        id: 10,
        title: 'Créer votre e-commerce et booster les ventes de votre marque',
        button: 'En savoir plus',
        image: DoublePhone,
        client: "Nom Client",
        subtitle: "Augmenter les ventes de produit en ligne en créant une expérience sur-mesure."
    },
    {
        id: 11,
        title: 'Créer votre e-commerce et booster les ventes de votre marque',
        button: 'En savoir plus',
        image: DoublePhone,
        client: "Nom Client",
        subtitle: "Augmenter les ventes de produit en ligne en créant une expérience sur-mesure."
    },
    {
        id: 12,
        title: 'Créer votre e-commerce et booster les ventes de votre marque',
        button: 'En savoir plus',
        image: DoublePhone,
        client: "Nom Client",
        subtitle: "Augmenter les ventes de produit en ligne en créant une expérience sur-mesure."
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
            <Methodology />
            <Solutions 
                solutionsIntroContent={solutionsIntroContent}
                solutionsCardContent={solutionsCardContent}
            />
            <References 
                {...referencesIntroContent}
                {...referencesCardContent}
            />
            <HeroAction 
                title={heroActionContent.title} 
                subtitle={heroActionContent.subtitle}
                actions={heroActionContent.actions}
            />
        </Fragment>
    );
}
