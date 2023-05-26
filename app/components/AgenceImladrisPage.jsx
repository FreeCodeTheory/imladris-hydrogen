import {Fragment} from 'react';
import {HeroBanner} from './HeroBanner';
import {HeroAction} from './HeroAction';
import ImageWithText from './ImageWithText';
import Collapsible from './Collapsible';

import ImageWithTextMockup from '../assets/image-with-text.svg';
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

    const imageWithTextContents = [
        {
            imageSide: 'left', 
            image: ImageWithTextMockup,
            tag: 'Tag',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id dolor scelerisque dolor dictum luctus vitae bibendum erat. Sed vitae lectus accumsan, convallis lacus eget, mollis ipsum. Aenean odio quam, malesuada aliquam lorem ac, vestibulum egestas velit. ',
            cta: 'Call To Action',
        },
        {
            imageSide: 'right', 
            image: ImageWithTextMockup,
            tag: 'Tag',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id dolor scelerisque dolor dictum luctus vitae bibendum erat. Sed vitae lectus accumsan, convallis lacus eget, mollis ipsum. Aenean odio quam, malesuada aliquam lorem ac, vestibulum egestas velit. ',
            cta: 'Call To Action',
        },
        {
            imageSide: 'left', 
            image: ImageWithTextMockup,
            tag: 'Tag',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id dolor scelerisque dolor dictum luctus vitae bibendum erat. Sed vitae lectus accumsan, convallis lacus eget, mollis ipsum. Aenean odio quam, malesuada aliquam lorem ac, vestibulum egestas velit. ',
            cta: 'Call To Action',
        },
        // ajouter autant d'objets que vous voulez ici pour créer plus de composants ImageWithText
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
            {imageWithTextContents.map((content, index) => (
                <Fragment key={index}>
                    <ImageWithText content={content}/>
                </Fragment>
            ))}
            <HeroAction 
                title="Augmentez votre chiffre d'affaire en créant un site web adapté pour vos clients" 
                subtitle="En utilisant une démarche UX design, vous augmenterez considérablement vos taux de conversion et de rétention."
                actions={[
                    { text: 'Action 1', link: '/lien-1' },
                    { text: 'Action 2', link: '/lien-2' },
                    { text: 'Action 3', link: '/lien-3' },
            ]}
            />
            <Collapsible />
        </Fragment>
    );
}
