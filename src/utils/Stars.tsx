import { FaStar } from "react-icons/fa";

export const Stars = ({ count, value, activeColor, color, position }:any) => {
  const activeIcons = [];

  for (let index = 0; index < value; index++) {
    activeIcons.push(<FaStar className={`!w-4 !h-4  ${activeColor} `} />);
  }

  const carnetIcons = [];

  for (let index = 0; index < count - value; index++) {
    carnetIcons.push(<FaStar className={`!w-4 !h-4  ${color} `} />);
  }

  return (
    <>
      {count < value ? (
        <div>
          <p className="text-red-500">cannot big a value, </p>
        </div>
      ) : (
        <div
          className={`${position === "horizontal" ? "flex items-center" : ""}`}
        >
          {activeIcons}
          {carnetIcons}
        </div>
      )}
    </>
  );
};
