import './movieThumbnail.css';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import { Link } from 'react-router-dom';


function MovieThumbnail(props) {

  const id = props.ytid;
  const title = props.title;
  const thumbnail = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  return (
    <div className="movie-thumbnail-container">
      <div className='image-container'>
        <Link to={`player/:${id}`}>
          <div className='icon-container'>
            <div className='icon'>
              <PlayArrowRoundedIcon sx={{
                fontSize: '64px',
                color: 'white'
              }} />
            </div>
          </div>
        </Link>
        <img src={thumbnail}></img>
      </div>
      <h3>{title}</h3>
    </div>
  )
}

// function handleClick(myLink) {
//   window.location.href = myLink;
// }

export default MovieThumbnail


