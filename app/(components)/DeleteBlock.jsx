import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DeleteBlock = () => (
  <FontAwesomeIcon
    icon={faTrash}
    className="text-delete hover:cursor-pointer hover:text-delete-hover"
  />
);

export default DeleteBlock;
