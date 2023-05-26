import {Fragment} from 'react';
import {HeroBanner} from './HeroBanner';
import Solutions from './Solutions';
import {Methodology} from './Methodology';
import {References} from './References';
import {Solution} from './Solution';
import {HeroAction} from './HeroAction';

import ComputerPhone from '../assets/computer-phone.svg';

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
    const solutionIntroContent = [
        {
        id: 1,
        category: 'Agence Ux Design',
        title: 'Concevoir avec et pour vos utilisateurs',
        subtitle: 'L’UX design consiste à rendre une expérience digitale agréable et facile à utiliser. Cela passe par la compréhension des problématiques et besoins de vos utilisateurs, mais également des tests utilisateurs pour comprendre les problèmes ergonomiques. Vos utilisateurs sont une mine d’or d’informations, alors créer avec eux le site qu’ils désirent. Relever vos objectifs commerciaux et marketing avec l’UX design.',
        },
    ];
    const solutionCardContent = [
        {
            id: 1,
            title: 'Ux Design',
            text1: 'Augmenter votre ',
            textColor: 'rétention et conversion ',
            text2: ' et séduire de nouveaux prospects',
            button: '',
            image: '',
        },
        {
            id: 2,
            title: 'Design System',
            text1: 'Augmentez la ',
            textColor: 'satisfaction ',
            text2: ', la fidélisation client et le taux d’engagement',
            button: '',
            image: '',
        },
        {
            id: 3, 
            title: 'MvP / Prototype',
            text1: 'Augmentez le ',
            textColor: 'nombre de visiteurs ',
            text2: ' et augmenter votre chiffre d’affaires',
            button: '',
            image: '',
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
            <Solutions 
                solutionIntroContent={solutionIntroContent}
                solutionCardContent={solutionCardContent}
            />
            <Methodology />
            <References />
            <Solution />
            <HeroAction 
                title={heroActionContent.title} 
                subtitle={heroActionContent.subtitle}
                actions={heroActionContent.actions}
            />
        </Fragment>
    );
}
