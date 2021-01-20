import React from 'react';
import './Header.css';
import { IconButton, Avatar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useSelector, useDispatch } from 'react-redux';
import { logout, selectUser } from '../../features/userSlice';
import { auth } from '../Firebase/firebase';

function Header() {
   const user = useSelector(selectUser);
   const dispatch = useDispatch();

   const signOut = () => {
      auth.signOut()
         .then(() => {
            dispatch(logout())
         })
   }

   return (
      <div className="header">
         <div className="header__left">
            <IconButton>
               <MenuIcon fontSize="large" />
            </IconButton>
            <img
               src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
               alt="Gmail"
            />
         </div>
         <div className="header__middle">
            <IconButton>
               <SearchIcon fontSize="large" />
            </IconButton>
            <input placeholder="Search mail" />
            <IconButton>
               <ArrowDropDownIcon fontSize="large" className="header__inputCaret" />
            </IconButton>
         </div>
         <div className="header__right">
            <IconButton>
               <AppsIcon fontSize="large" />
            </IconButton>
            <IconButton>
               <NotificationsIcon fontSize="large" />
            </IconButton>
            <Avatar
               className="header__rightAvatar"
               src={user?.photoUrl}
               onClick={signOut}
            />
         </div>
      </div>
   )
}

export default Header;
