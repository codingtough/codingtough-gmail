import React, { useState, useEffect } from 'react';
import './EmailList.css';
import { Checkbox, IconButton } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Section from '../Section/Section';
import EmailRow from '../EmailRow/EmailRow';
import { db } from '../Firebase/firebase';

function EmailList() {
   const [emails, setEmails] = useState([]);

   useEffect(() => {
      db.collection("emails")
         .orderBy("timestamp", "desc")
         .onSnapshot(snapshot => (
            setEmails(snapshot.docs.map(doc => ({
               id: doc.id,
               data: doc.data(),
            })))
         ))
   }, []);

   return (
      <div className="emailList">
         <div className="emailList__sticky">
            <div className="emailList__settings">
               <div className="emailList__settingsLeft">
                  <Checkbox />
                  <IconButton>
                     <ArrowDropDownIcon fontSize="large" />
                  </IconButton>
                  <IconButton>
                     <RedoIcon fontSize="large" />
                  </IconButton>
                  <IconButton>
                     <MoreVertIcon fontSize="large" />
                  </IconButton>
               </div>
               <div className="emailList__settingsRight">
                  <IconButton>
                     <ChevronLeftIcon fontSize="large" />
                  </IconButton>
                  <IconButton>
                     <ChevronRightIcon fontSize="large" />
                  </IconButton>
                  <IconButton>
                     <KeyboardHideIcon fontSize="large" />
                  </IconButton>
                  <IconButton>
                     <SettingsIcon fontSize="large" />
                  </IconButton>
               </div>
            </div>
            <div className="emailList__sections">
               <Section Icon={InboxIcon} title="primary" color="red" selected />
               <Section Icon={PeopleIcon} title="social" color="#1a73e8" />
               <Section Icon={LocalOfferIcon} title="promotions" color="green" />
            </div>
         </div>

         <div className="emailList__list">
            {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
               <EmailRow
                  key={id}
                  id={id}
                  title={to}
                  subject={subject}
                  description={message}
                  time={new Date(timestamp?.seconds * 1000).toUTCString()}
               />
            ))}
         </div>
      </div>
   )
}

export default EmailList;
