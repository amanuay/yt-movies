import './header.css';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

function Header({ searchWord, onChange }) {

  return (
    <>
      <div className="header-container">
        {/* inline styling because Link element */}
        <Link to={'/'} style={{ textDecoration: 'none', color: 'white', flex: 1, paddingLeft: '16px' }}>
          <h2>yt-movies</h2>

        </Link >
        {/* <ul>
          <li>malayalam</li>
          <li>tamil</li>
          <li>hindi</li>
          <li>english</li>
        </ul> */}
        < div className='search-container'>
          <SearchIcon />
          <input value={searchWord} type='text' placeholder='search' onChange={onChange}></input>
        </div>

        <h3>about</h3>
      </div >
    </>
  )
}


export default Header