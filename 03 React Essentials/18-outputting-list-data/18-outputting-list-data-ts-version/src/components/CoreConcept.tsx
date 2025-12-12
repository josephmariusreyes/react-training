import { CoreConcept as CoreConceptType } from '../data.ts';

export default function CoreConcept({ image, title, description }: CoreConceptType) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
