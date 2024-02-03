const getColor = (status) => {
  switch (status.toLowerCase()) {
    case "done":
      return "green-status-bg";

    case "started":
      return "yellow-status-bg";

    case "not started":
      return "red-status-bg";

    default:
      return "default-status-bg";
  }
};

const StatusDisplay = ({ status }) => (
  <span
    className={`inline-block rounded-full px-2 text-xs font-semibold text-status-text bg-${getColor(
      status
    )}`}
  >
    {status}
  </span>
);

export default StatusDisplay;
