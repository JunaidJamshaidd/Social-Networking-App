import { Avatar } from '@mui/material'
import React from 'react'
import "./Sidebar.css";
import TagIcon from '@mui/icons-material/Tag';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
function Sidebar() {
const user = useSelector(selectUser);
  const recentItem = (topic) => (

    <div className="sidebar_recentItem">
        <TagIcon className="sidebar_hash"/>
        <p>{topic}</p>
    </div>
  );  
    
  return (
    <div className='sidebar'>
        <div className="sidebar_top">
            <img src="https://images.unsplash.com/photo-1561816544-21ecbffa09a3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <Avatar className='sidebar_avatar'>{user.displayName[0]} </Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>
        <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>Who viewed your profile</p>
                <p className="sidebar_statNumber">2,341</p>
            </div>
            <div className="sidebar_stat">
                <p>Views on post</p>
                <p className="sidebar_statNumber">20,619</p>
            </div>
        </div>
        <div className="sidebar_bottom">
            <p>Recent</p>
            {recentItem('ReactJS')}
            {recentItem('Design')}
            {recentItem('JavaScript')}
            {recentItem('UI Designs')}
            {recentItem('Developers')}
        </div>
    </div>
  )
}

export default Sidebar