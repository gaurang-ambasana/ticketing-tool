const ProgressDisplay = ({ progress }) => (
  <div className="w-full bg-progress rounded-full h-2.5">
    <div
      className="bg-progress-inside h-2.5 rounded-full"
      style={{ width: `${progress}%` }}
    ></div>
  </div>
);

export default ProgressDisplay;
