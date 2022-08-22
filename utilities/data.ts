import fs from "fs";
import path from "path";
import * as G from "../types/global.types";

export const getInterviewIds = () => {
  const dir = path.resolve(process.cwd(), "data/interviews");
  return fs.readdirSync(dir);
};

export const getInterview = async (id: string) => {
  try {
    const interview = await import(`../data/interviews/${id}`);
    return interview.default;
  } catch (e) {
    return null;
  }
};

export const getInterviews = async () => {
  const ids = getInterviewIds();
  const interviews: G.Interview[] = [];

  for (let id of ids) {
    const interview = await getInterview(id);
    interviews.push(interview);
  }

  interviews.sort((a, b) => {
    const tsA = +new Date(a.interview.date);
    const tsB = +new Date(b.interview.date);
    return tsB - tsA;
  });

  return interviews;
};

export const getSuggestedInterviews = async (id: string) => {
  const suggested: G.Interview[] = [];
  const interviews = await getInterviews();

  interviews.forEach((item, index) => {
    if (item.id !== id) return;

    const firstIndex = (index + 1) % interviews.length;
    const secondIndex = (index + 2) % interviews.length;

    suggested.push(interviews[firstIndex], interviews[secondIndex]);
  });

  return suggested;
};
