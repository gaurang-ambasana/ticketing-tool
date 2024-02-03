import TicketCard from "./(components)/TicketCard";

const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/tickets", {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.error("Failed to get tix: ", error);
  }
};

const Dashboard = async () => {
  const tickets = await getTickets().then((res) =>
    res.tickets.reduce((groupedTickets, currentTicket) => {
      if (!(currentTicket.category in groupedTickets)) {
        groupedTickets[currentTicket.category] = [];
      }
      groupedTickets[currentTicket.category].push(currentTicket);

      return groupedTickets;
    }, {})
  );

  return (
    <div className="p-5">
      <div>
        {tickets &&
          Object.keys(tickets)?.map((category, catIdx) => (
            <div key={catIdx} className="mb-4">
              <h2>{category}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {tickets[category]?.map((ticket, tixIdx) => (
                  <TicketCard key={tixIdx} {...ticket} />
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
