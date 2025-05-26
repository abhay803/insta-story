export interface StoryPreviewProps extends StoryViewerProps {
  isNew: boolean;
};

export interface StoryViewerProps {
  name: string;
  url: string;
  closeStory?: () => void;
};

export interface StoryPreviewResponse {
    storyId: string;
    storyName: string;
    storyUrl: string;
    isNewStory: boolean;
};
