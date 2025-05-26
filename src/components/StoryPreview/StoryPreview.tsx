import { useState } from 'react';
import { StoryPreviewProps } from '../../constants/interface';
import './StoryPreview.css';

export default function StoryPreview({name, url, isNew}: StoryPreviewProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className='story-preview' style={{visibility: loaded ? 'visible' : 'hidden'}}>
      <img
        src={url}
        alt={`${name} story preview`}
        className={`story-preview-image ${isNew ? 'new-story' : ''}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
