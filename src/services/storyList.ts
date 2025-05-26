import stories from "../constants/stories.json";
import { StoryPreviewResponse } from "../constants/interface";

export function getUserStories() {
  return Promise.resolve(stories as StoryPreviewResponse[]);
}
