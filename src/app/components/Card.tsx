import { TStory } from "../lib/types";

const Card = ({ title, url }: TStory) => {
  return (
    <div className="flex-1 flex flex-col justify-between bg-white rounded-xl p-4 gap-4 min-w-[296px] md:min-w-96 shadow-xl">
      <h2 className="text-xl font-bold">{title}</h2>
      <a href={url} className="text-blue-500 font-bold">
        See more
      </a>
    </div>
  );
};

export default Card;
