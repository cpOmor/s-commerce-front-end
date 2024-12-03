const NeumorphicSlider = () => (
  <div className="flex flex-col items-center gap-4">
    {[25, 50, 75, 100].map((value, idx) => (
      <div
        key={idx}
        className="w-2 h-24 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"
      ></div>
    ))}
  </div>
);

export default NeumorphicSlider;
