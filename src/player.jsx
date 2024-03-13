import './player.css';
import { useParams } from 'react-router-dom';

function Player() {
  const { id } = useParams();
  const videoId = id.substring(1);
  const videoLink = `https://youtube.com/embed/${videoId}`;

  return (
    <div className='video-container'>
      <iframe src={videoLink} allowFullScreen ></iframe>
    </div>
  )
}



export default Player