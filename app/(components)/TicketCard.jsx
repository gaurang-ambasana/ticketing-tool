import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";
import Link from "next/link";

const TicketCard = ({
  _id,
  priority,
  createdAt,
  updatedAt,
  title,
  description,
  progress,
  status,
}) => (
  <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
    <div className="flex mb-3">
      <PriorityDisplay priority={priority} />
      <div className="ml-auto">
        <DeleteBlock id={_id} name={title} />
      </div>
    </div>
    <Link href={`/TicketPage/${_id}`}>
      <h4>{title}</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">{description}</p>
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p className="text-xs my-1">
            Created At: {new Date(createdAt).toString().split("(")[0].trim()}
          </p>
          <p className="text-xs my-1">
            Last Update: {new Date(updatedAt).toString().split("(")[0].trim()}
          </p>
          <ProgressDisplay progress={progress} />
        </div>
        <div className="ml-auto flex items-end">
          <StatusDisplay status={status} />
        </div>
      </div>
    </Link>
  </div>
);

export default TicketCard;
