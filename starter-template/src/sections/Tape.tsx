import StarIcon from "@/assets/icons/star.svg";

const Tape = () => {
  const words = [
    "Performant",
    "Accessible",
    "Secure",
    "Interactive",
    "Scalable",
    "User Friendly",
    "Maintainable",
    "Search Optimized",
    "Usable",
    "Reliable",
  ];

  return (
    <div className="py-16">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 overflow-hidden -rotate-3">
        <div className="flex gap-4 items-center [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ">
          {words.map((word) => (
            <div className="inline-flex gap-4" key={word}>
              <span className="text-black font-bold">{word}</span>
              <StarIcon className="size-6 text-black -rotate-10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tape;
