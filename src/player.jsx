import './player.css';
import { Link, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Player() {
  const { id } = useParams();
  const videoId = id.substring(1);
  const videoLink = `https://youtube.com/embed/${videoId}`;

  return (
    <div className='wrapper'>
      <div className='back'> <Link to={'/'} style={{
        textDecoration: 'none',
        color: 'white',
        display: 'flex',
        alignItems: 'center'
      }}><ArrowBackIcon />back</Link></div>
      <div className='video-container'>

        <iframe src={videoLink} allowFullScreen ></iframe>

      </div>
    </div>
  )
}

export default Player


