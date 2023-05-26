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
                    { title: 'Audit UX', titleColor: '#D0EA59', content: 'Quels sont les problèmes ergonomiques de votre site et application ?', buttonText: 'En savoir plus' },
                    { title: 'Benchmark UX', titleColor: '#D959AF', content: 'Quels sont les problèmes ergonomiques de votre site et application ?', buttonText: 'En savoir plus' },
                    { title: 'Études utilisateurs', titleColor: '#EBAC00', content: 'Quels sont les problèmes ergonomiques de votre site et application ?', buttonText: 'En savoir plus' },
                    { title: 'Audit UX', titleColor: '#D0EA59', content: 'Quels sont les problèmes ergonomiques de votre site et application ?', buttonText: 'En savoir plus' },
                    { title: 'Benchmark UX', titleColor: '#D959AF', content: 'Quels sont les problèmes ergonomiques de votre site et application ?', buttonText: 'En savoir plus' },
                    { title: 'Études utilisateurs', titleColor: '#EBAC00', content: 'Quels sont les problèmes ergonomiques de votre site et application ?', buttonText: 'En savoir plus' },
                ],
            },
            {
            subTitle: 'UX Design & Conception',
            cards: [
                    { title: 'Audit UX', titleColor: '#D0EA59', content: 'Quels sont les problèmes ergonomiques de votre site et application ?', buttonText: 'En savoir plus' },
                    { title: 'Benchmark UX', titleColor: '#D959AF', content: 'Quels sont les problèmes ergonomiques de votre site et application ?', buttonText: 'En savoir plus' },
                    { title: 'Études utilisateurs', titleColor: '#EBAC00', content: 'Quels sont les problèmes ergonomiques de votre site et application ?', buttonText: 'En savoir plus' },
                    { title: 'Audit UX', titleColor: '#D0EA59', content: 'Quels sont les problèmes ergonomiques de votre site et application ?', buttonText: 'En savoir plus' },
                    { title: 'Benchmark UX', titleColor: '#D959AF', content: 'Quels sont les problèmes ergonomiques de votre site et application ?', buttonText: 'En savoir plus' },
                    { title: 'Études utilisateurs', titleColor: '#EBAC00', content: 'Quels sont les problèmes ergonomiques de votre site et application ?', buttonText: 'En savoir plus' },
                ],
            },
            {
            subTitle: 'Développement web & app',
            cards: [
                    { title: 'Audit UX', titleColor: '#D0EA59', content: 'Quels sont les problèmes ergonomiques de votre site et application ?', buttonText: 'En savoir plus' },
                    { title: 'Benchmark UX', titleColor: '#D959AF', content: 'Quels sont les problèmes ergonomiques de votre site et application ?', buttonText: 'En savoir plus' },
                    { title: 'Études utilisateurs', titleColor: '#EBAC00', content: 'Quels sont les problèmes ergonomiques de votre site et application ?', buttonText: 'En savoir plus' },
                    { title: 'Audit UX', titleColor: '#D0EA59', content: 'Quels sont les problèmes ergonomiques de votre site et application ?', buttonText: 'En savoir plus' },
                    { title: 'Benchmark UX', titleColor: '#D959AF', content: 'Quels sont les problèmes ergonomiques de votre site et application ?', buttonText: 'En savoir plus' },
                    { title: 'Études utilisateurs', titleColor: '#EBAC00', content: 'Quels sont les problèmes ergonomiques de votre site et application ?', buttonText: 'En savoir plus' },
                ],
            },
            {
            subTitle: 'Audit technique & TMA',
            cards: [
                    { title: 'Audit UX', titleColor: '#D0EA59', content: 'Quels sont les problèmes ergonomiques de votre site et application ?', buttonText: 'En savoir plus' },
                    { title: 'Benchmark UX', titleColor: '#D959AF', content: 'Quels sont les problèmes ergonomiques de votre site et application ?', buttonText: 'En savoir plus' },
                    { title: 'Études utilisateurs', titleColor: '#EBAC00', content: 'Quels sont les problèmes ergonomiques de votre site et application ?', buttonText: 'En savoir plus' },
                    { title: 'Audit UX', titleColor: '#D0EA59', content: 'Quels sont les problèmes ergonomiques de votre site et application ?', buttonText: 'En savoir plus' },
                    { title: 'Benchmark UX', titleColor: '#D959AF', content: 'Quels sont les problèmes ergonomiques de votre site et application ?', buttonText: 'En savoir plus' },
                    { title: 'Études utilisateurs', titleColor: '#EBAC00', content: 'Quels sont les problèmes ergonomiques de votre site et application ?', buttonText: 'En savoir plus' },
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
