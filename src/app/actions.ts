import { TStory } from "./lib/types";

const API = "https://hacker-news.firebaseio.com/v0";

const getStory = async (id: number): Promise<TStory> => {
  const res = await fetch(`${API}/item/${id}.json?print=pretty`);
  return res.json();
};

export const getAllStories = async () => {
  const res = await fetch(`${API}/topstories.json?print=pretty`);
  const ids: number[] = await res.json();
  return Promise.all(ids.map(getStory));
};
