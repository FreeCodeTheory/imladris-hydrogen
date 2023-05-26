import {Fragment} from 'react';
import {HeroBanner} from '../components/HeroBanner';
import {References} from '../components/References';
import {HeroAction} from '../components/HeroAction';

import ComputerPhone from '../assets/computer-phone.svg';

export default function AgenceReferencesPage() {
    const heroBannerContent = {
        backgroundColor: "bg-gradient-to-b from-gray-100 to-gray-300",
        category: "les EXPERTISES de notre agence web",
        title: "Créer votre site web et gagner en notoriété",
        subtitle: "Optimiser vos parcours de conversion afin d’accroître votre chiffre d’affaire et gagner en visibilité. Notre agence web s’efforce de placer l’utilisateur au centre de la création afin de créer un site web engageant et pertinent. Faites appel à nos experts en UX design et à nos développeurs web.",
        button: "Gagner en notoriété",
        image: ComputerPhone,
        width: "550px",
        mb: 0,
        mr: 0,
    } 
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
            <References 
                {...referencesIntroContent}
                {...referencesCardContent}
            />
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