import { getStatusBgColor } from "../(utils)";

const StatusDisplay = ({ status }) => (
  <span
    className={`inline-block rounded-full px-2 text-xs font-semibold text-status-text bg-${getStatusBgColor(
      status
    )}`}
  >
    {status}
  </span>
);

export default StatusDisplay;
