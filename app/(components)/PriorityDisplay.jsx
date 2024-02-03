import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FireIcon = ({ className }) => (
  <FontAwesomeIcon icon={faFire} className={className} />
);

const PriorityDisplay = ({ priority }) => (
  <div className="flex justify-start align-baseline">
    {Array.apply(null, { length: 5 - priority + 1 }).map((_, idx) => (
      <FireIcon className="text-fire" key={idx} />
    ))}
    {Array.apply(null, { length: priority - 1 }).map((_, idx) => (
      <FireIcon className="text-non-fire" key={idx} />
    ))}
  </div>
);

export default PriorityDisplay;
