import React from 'react'
import styles from "./ContactForm.module.css"
import Button from '../button/Button'
import { MdMessage } from 'react-icons/md'
import {FaPhoneAlt} from 'react-icons/fa'
import {HiMail} from 'react-icons/hi'


function ContactForm() {
  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
            <div className={styles.top_btn}>
            <Button icons={<MdMessage fontSize="24px"/>} text="VIA SUPPORT CHAT" />
            <Button icons={<FaPhoneAlt fontSize="22px"/>} text="VIA CALL" />
            </div>
            <Button 
            isOutline = {true}
            icons={<HiMail fontSize="22px"/>} 
            text="VIA EMAIL FORM" />
            

            <form >
              <div className={styles.form_controller}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name"  />
              </div>


              <div className={styles.form_controller}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email"  />
              </div>
              
              <div className={styles.form_controller}>
                <label htmlFor="text">Text</label>
                <textarea name="text"  />
              </div>
              <Button 
            
            text="SUBMIT" />
              
            </form>


        </div>
        <div className={styles.contact_image}>
<img src="/images/Service 24_7-pana 1.svg" />
        </div>
    </section>
  )
}

export default ContactForm