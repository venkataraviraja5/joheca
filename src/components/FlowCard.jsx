const FlowCard = ({ step, title, desc, image }) => {
  return (
    <div className="flex flex-row items-center gap-6 bg-white rounded-3xl p-6 md:p-8 w-full md:w-4/5 hover:shadow-2xl transition-all duration-300">
      
      {/* Image */}
      <div className="w-24 h-24 md:w-28 md:h-28 flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain animate-float rounded"
        />
      </div>

      {/* Content */}
      <div>
        <span className="text-sm font-semibold text-indigo-600">
          {step}
        </span>
        <h3 className="text-xl md:text-2xl font-bold mt-1">
          {title}
        </h3>
        <p className="text-gray-600 mt-2 max-w-xl">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default FlowCard

