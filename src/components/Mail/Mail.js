import React from 'react';
import './Mail.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ErrorIcon from '@material-ui/icons/Error';
import DeleteIcon from '@material-ui/icons/Delete';
import EmailIcon from '@material-ui/icons/Email';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import PrintIcon from '@material-ui/icons/Print';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { IconButton } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectOpenMail } from '../../features/mailSlice';

function Mail() {
   const history = useHistory();
   const mail = useSelector(selectOpenMail);

   return (
      <div className="mail">
         <div className="mail__tools">
            <div className="mail__toolsLeft">
               <IconButton onClick={() => history.push("/")}>
                  <ArrowBackIcon fontSize="large" />
               </IconButton>
               <IconButton>
                  <MoveToInboxIcon fontSize="large" />
               </IconButton>
               <IconButton>
                  <ErrorIcon fontSize="large" />
               </IconButton>
               <IconButton>
                  <DeleteIcon fontSize="large" />
               </IconButton>
               <IconButton>
                  <EmailIcon fontSize="large" />
               </IconButton>
               <IconButton>
                  <WatchLaterIcon fontSize="large" />
               </IconButton>
               <IconButton>
                  <CheckCircleIcon fontSize="large" />
               </IconButton>
               <IconButton>
                  <LabelImportantIcon fontSize="large" />
               </IconButton>
               <IconButton>
                  <MoreVertIcon fontSize="large" />
               </IconButton>
            </div>
            <div className="mail__toolsRight">
               <IconButton>
                  <UnfoldMoreIcon fontSize="large" />
               </IconButton>
               <IconButton>
                  <PrintIcon fontSize="large" />
               </IconButton>
               <IconButton>
                  <ExitToAppIcon fontSize="large" />
               </IconButton>
            </div>
         </div>
         <div className="mail__body">
            <div className="mail__bodyHeader">
               <h2>{mail?.subject}</h2>
               <LabelImportantIcon className="mail__important" />
               <p>{mail?.title}</p>
               <p className="mail__time">{mail?.time}</p>
            </div>
            <div className="mail__message">
               <p>{mail?.description}</p>
            </div>
         </div>
      </div>
   )
}

export default Mail;
