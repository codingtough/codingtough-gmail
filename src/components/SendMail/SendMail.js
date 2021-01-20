import React from 'react';
import './SendMail.css';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../../features/mailSlice';
import { db } from '../Firebase/firebase';
import firebase from 'firebase';

function SendMail() {
   const dispatch = useDispatch();

   const { register, handleSubmit, errors } = useForm();

   const onSubmit = (formData) => {
      db.collection("emails")
         .add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
         })
      dispatch(closeSendMessage());
   }

   return (
      <div className="sendMail">
         <div className="sendMail__header">
            <h3>New Message</h3>
            <CloseIcon
               onClick={() => dispatch(closeSendMessage())}
               fontSize="large"
               className="sendMail__close"
            />
         </div>
         <form onSubmit={handleSubmit(onSubmit)}>
            <input
               ref={register({ required: true })}
               name="to"
               placeholder="To"
               type="email"
            />
            <p>{errors.to && <p className="sendMail__error">To is required</p>}</p>
            <input
               ref={register({ required: true })}
               name="subject"
               placeholder="Subject"
               type="text"
            />
            <p>{errors.subject && <p className="sendMail__error">Subject is required</p>}</p>
            <input
               ref={register({ required: true })}
               name="message"
               placeholder="Message..."
               type="text"
               className="sendMail__message"
            />
            <p>{errors.message && <p className="sendMail__error">Message is required</p>}</p>
            <div className="sendMail__options">
               <Button
                  className="sendMail__send"
                  variant="contained"
                  color="primary"
                  type="submit"
               >
                  Send
               </Button>
            </div>
         </form>
      </div>
   )
}

export default SendMail;
