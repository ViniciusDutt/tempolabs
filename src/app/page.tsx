import { TStory } from "./lib/types";
import Card from "./components/Card";
import { getAllStories } from "./actions";

export default async function Home() {
  let getStories: TStory[];

  try {
    getStories = await getAllStories();
  } catch {
    return <>Nothing to show</>;
  }

  return (
    <main className="flex flex-col items-center p-6 gap-6">
      <h1 className="text-2xl font-bold">Stories</h1>
      <div className="flex flex-wrap gap-6 mx-6">
        {getStories.map((data) => (
          <Card
            key={data.id}
            title={data.title}
            url={data.url}
            by={""}
            descendants={0}
            id={0}
            kids={[]}
            score={0}
            time={0}
            type={""}
          />
        ))}
      </div>
    </main>
  );
}
