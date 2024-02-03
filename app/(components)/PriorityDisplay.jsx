import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PriorityDisplay = () => {
  return (
    <div className="flex justify-start align-baseline">
      <FontAwesomeIcon icon={faFire} className="text-fire" />
      <FontAwesomeIcon icon={faFire} className="text-fire" />
      <FontAwesomeIcon icon={faFire} className="text-fire" />
      <FontAwesomeIcon icon={faFire} className="text-fire" />
      <FontAwesomeIcon icon={faFire} className="text-fire" />
    </div>
  );
};

export default PriorityDisplay;
