import { FiSliders } from "react-icons/fi";

const NeumorphicButton = () => (
    <div className="w-20 h-20 flex items-center justify-center rounded-md bg-gray-800 shadow-neumorphic hover:shadow-neumorphic-inset transition-all">
    <FiSliders className="text-blue-400 text-3xl" />
  </div>
);

export default NeumorphicButton;
