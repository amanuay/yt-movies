import './header.css';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

function Header({ searchWord, onChange }) {

  return (
    <>
      <div className="header-container">
        <div className='title-container'>

          {/* inline styling because Link element */}
          <Link to={'/'} style={{
            textDecoration: 'none',
            color: 'white',
            paddingLeft: '16px',
            width: 'fit-content',
          }}>
            <h2>YT-Movies</h2>
          </Link >
        </div>
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
      </div >
    </>
  )
}



export default Header