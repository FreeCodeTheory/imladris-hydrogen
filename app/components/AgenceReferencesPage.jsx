import {Fragment} from 'react';
import {HeroBanner} from './HeroBanner';
import {References} from './References';
import {HeroAction} from './HeroAction';

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
            <References />
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