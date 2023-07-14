import Collapse from '../Collapse';

// tableau contenant les informations necessaires à inclure dans les Collapse de la page 'About'
function CollapseInfo() {
    const infosAbout = [
        {
            id: '1',
            label: 'Fiabilité',
            description:
                'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
        },
        {
            id: '2',
            label: 'Respect',
            description:
                'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
        },
        {
            id: '3',
            label: 'Service',
            description:
                "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
        },
        {
            id: '4',
            label: 'Sécurité',
            description:
                "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
        },
    ];

    return (
        //
        <div>
            {/* utilisation de la méthode map() pour récuperer l'id, le label et la description afin de les afficher et générer dynamiquement plusieurs composants collapse avec des données différentes */}
            {infosAbout.map(({ id, label, description }) => (
                <Collapse key={id} label={label} description={description} />
            ))}
        </div>
    );
}

export default CollapseInfo;
