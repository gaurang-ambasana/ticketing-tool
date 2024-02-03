"use client";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

const DeleteBlock = ({ id, name }) => {
  const router = useRouter();

  return (
    <FontAwesomeIcon
      icon={faTrash}
      onClick={async () => {
        const resp = confirm(
          `This ticket ${name} will be deleted! are you sure to want to continue`
        );

        if (resp) {
          const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
            method: "DELETE",
          });
          if (res.ok) router.refresh();
        }
      }}
      className="text-delete hover:cursor-pointer hover:text-delete-hover"
    />
  );
};

export default DeleteBlock;
