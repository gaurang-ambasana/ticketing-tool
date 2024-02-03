import TicketForm from "@/app/(components)/TicketForm";

const TicketPage = ({ params }) => (
  <TicketForm EDITMODE={params?.id !== "new"} id={params?.id} />
);

export default TicketPage;
