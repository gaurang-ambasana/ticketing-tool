import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";

const TicketCard = () => {
  return (
    <div>
      <PriorityDisplay />
      <DeleteBlock />
    </div>
  );
};

export default TicketCard;
