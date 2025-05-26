import { StoryViewerProps } from '../../constants/interface';
import './StoryViewer.css';

export default function StoryViewer({name, url, closeStory}: StoryViewerProps) {
  return (
    <div>
      <div className="story-header">
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: "50%" }}></div>
      </div>
      <div className="story-viewer-header">
        <div className="close-button" onClick={closeStory}>X</div>
      </div>
      </div>
      <div className="story-content">
        <img src={url} alt={name} />
      </div>
    </div>
  );
}
