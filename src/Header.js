import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import "./Header.css";
import HeaderOption from './HeaderOption';
import { useDispatch } from 'react-redux';
import { my_auth } from './firebase';
import { logout } from './features/userSlice';
function Header() {


  const dispatch = useDispatch();
  const logoutOfApp = ()=>{
    dispatch(logout())
    my_auth.signOut();
  };
  return (
    <div className='header'>
        <div className="header_left">
            <img src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" alt="" />
            <div className="header_search">
                <SearchIcon/>
                <input type="text" placeholder='Search'/>
            </div>
        </div>
        <div className="header_right">
            <HeaderOption Icon={HomeIcon} title={"Home"} />
            <HeaderOption Icon={PeopleAltIcon} title={"Network"} />
            <HeaderOption Icon={WorkIcon} title={"Jobs"} />
            <HeaderOption Icon={MessageIcon} title={"Messages"} />
            <HeaderOption Icon={NotificationsIcon} title={"Notifications"} />
            <HeaderOption avatar={"../images/avatar.jpg"} title={"Me"}
            onClick={logoutOfApp}/>
        </div>

    </div>
  )
}

export default Header