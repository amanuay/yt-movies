import MovieThumbnail from "./movieThumbnail";
import './home.css';


function Home({ items }) {

  return (
    <>
      <div className="site-body">
        <div className="movie-list">
          {items?.map(item => <MovieThumbnail {...item} key={item.id} />)}
        </div>
      </div>
    </>
  )
}

export default Home



