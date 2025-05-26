import { Suspense, useEffect, useState } from "react";
import StoryPreview from "../../components/StoryPreview/StoryPreview";
import StoryViewer from "../../components/StoryViewer/StoryViewer";
import { StoryPreviewResponse } from "../../constants/interface";
import { getUserStories } from "../../services/storyList";

import "./Home.css";

export default function Home() {
  const [storyList, setStoryList] = useState([] as StoryPreviewResponse[]);
  const [currStory, setCurrStory] = useState({} as StoryPreviewResponse);
  const [isStoryViewerOpen, setIsStoryViewerOpen] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    getUserStories()
      .then((response: StoryPreviewResponse[]) => {
        setStoryList(response);
      })
      .catch((error) => {
        console.error("Error fetching stories:", error);
      });

    return () => {};
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrStory((prevCurrStory) => {
        const currentIndex = storyList.findIndex(
          (s) => s.storyId === prevCurrStory.storyId
        );
        const nextIndex =
          currentIndex >= 0 && currentIndex < storyList.length - 1
            ? currentIndex + 1
            : 0;
        return storyList.length > 0 ? storyList[nextIndex] : prevCurrStory;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [currStory]);

  const handleStoryClick = (story: StoryPreviewResponse) => {
    setStoryList((prevStories) =>
      prevStories.map((s) =>
        s.storyId === story.storyId ? { ...s, isNewStory: false } : s
      )
    );
    setTransitioning(true);
    setTimeout(() => {
      setCurrStory(story);
      setIsStoryViewerOpen(true);
      setTransitioning(false);
    }, 300); // Duration matches CSS transition
  };

  const closeStory = () => {
    setTransitioning(true);
    setTimeout(() => {
      setIsStoryViewerOpen(false);
      setCurrStory({} as StoryPreviewResponse);
      setTransitioning(false);
    }, 300);
  };

	const userNavHandler = (type: string) => {
		// This function is not used in the current implementation
		setCurrStory((prevCurrStory) => {
			const currentIndex = storyList.findIndex(
				(s) => s.storyId === prevCurrStory.storyId
			);
			if (storyList.length === 0 || currentIndex === -1) return prevCurrStory;

			let newIndex = currentIndex;
			if (type === "prev") {
				newIndex = currentIndex === 0 ? storyList.length - 1 : currentIndex - 1;
			} else if (type === "next") {
				newIndex = currentIndex === storyList.length - 1 ? 0 : currentIndex + 1;
			}
			return storyList[newIndex];
		});
	}

  return (
    <>
      <Suspense fallback={<div className="loading">Loading stories...</div>}>
        <div
          className={`stories-list-container ${
            isStoryViewerOpen
              ? transitioning
                ? "fade-out"
                : "hidden"
              : transitioning
              ? "fade-out"
              : "fade-in"
          }`}
        >
          {!isStoryViewerOpen && (
            <>
              <h2 className="title">POC Stories</h2>
              <div className="stories-list">
                {storyList.map((item: StoryPreviewResponse) => (
                  <div
                    onClick={() => handleStoryClick(item)}
                    key={item.storyId}
                  >
                    <StoryPreview
                      key={item.storyId}
                      name={item.storyName}
                      url={item.storyUrl}
                      isNew={item.isNewStory}
                    />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </Suspense>
      <div
        className={`story-viewer-container ${
          isStoryViewerOpen
            ? transitioning
              ? "fade-in"
              : "fade-in"
            : transitioning
            ? "fade-out"
            : "hidden"
        }`}
      >
        {isStoryViewerOpen && (
          <>
            <button
							className="nav-button prev"
              onClick={() => {userNavHandler("prev")}}
            />
            <StoryViewer
              name={currStory.storyName}
              url={currStory.storyUrl}
              closeStory={closeStory}
            />
            <button
							className="nav-button next"
              onClick={() => {userNavHandler("next")}}
            />
          </>
        )}
      </div>
    </>
  );
}
