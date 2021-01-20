import React from 'react';
import './Sidebar.css';
import { Button, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SidebarOption from '../SidebarOption/SidebarOption';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../../features/mailSlice';

function Sidebar() {
   const dispatch = useDispatch();

   return (
      <div className="sidebar">
         <Button
            onClick={() => dispatch(openSendMessage())}
            startIcon={<AddIcon fontSize="large" />}
            className="sidebar__compose"
         >
            Compose
         </Button>
         <SidebarOption Icon={InboxIcon} title="Inbox" number={3} selected />
         <SidebarOption Icon={StarIcon} title="Starred" number={5} />
         <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={5} />
         <SidebarOption Icon={LabelImportantIcon} title="Important" number={5} />
         <SidebarOption Icon={NearMeIcon} title="Sent" number={5} />
         <SidebarOption Icon={NoteIcon} title="Drafts" number={5} />
         <SidebarOption Icon={ExpandMoreIcon} title="More" number={5} />

         <div className="sidebar__footer">
            <div className="sidebar__footerIcons">
               <IconButton>
                  <PersonIcon fontSize="large" />
               </IconButton>
               <IconButton>
                  <DuoIcon fontSize="large" />
               </IconButton>
               <IconButton>
                  <PhoneIcon fontSize="large" />
               </IconButton>
            </div>
         </div>
      </div>
   )
}

export default Sidebar;
