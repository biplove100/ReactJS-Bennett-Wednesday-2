export default function CoreConcept({title, description, image}) {
    return (
        <li>
            <img src={image} alt='Core Concept Icon' />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    )
}