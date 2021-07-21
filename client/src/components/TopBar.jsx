import {AppBar, Toolbar} from '@material-ui/core'
import  '../css/TopBar.css'

const TopBar = () => {
  return (
    <AppBar position='sticky'>
      <Toolbar className='top-bar'>
        <div className='left'>
          <i className="top-icon fab fa-facebook-square"></i>
          <i className="top-icon fab fa-twitter-square"></i>
          <i className="top-icon fab fa-pinterest-square"></i>
          <i className="top-icon fab fa-instagram-square"></i>
        </div>
        <div className='center'>
          <ul className="top-list">
            <li className='top-list-item'>HOME</li>
            <li className='top-list-item'>ABOUT</li>
            <li className='top-list-item'>CONTACT</li>
            <li className='top-list-item'>WRITE</li>
            <li className='top-list-item'>LOGOUT</li>
          </ul>
        </div>
        <div className='right'>
          <img
            className='top-image'
            src="https://i.redd.it/t9tcbwej72561.jpg" 
            alt="" />
          <i className="top-search-icon fas fa-search"></i>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default TopBar
