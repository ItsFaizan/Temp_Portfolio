import Link from 'next/link';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';

import styles from './contact.module.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_55mgqqr',
        'template_i48o40m',
        form.current,
        'CZwkFLKuHbIimw81N'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id='Contact' className={styles.contact}>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className={styles.contact__container}>
        <div className={styles.contact__options}>
          <article className={styles.contact__option}>
            <MdOutlineEmail className={styles.contact__option__icon} />
            <h4>Email</h4>
            <h5>faizanjavid71@gmail.com</h5>
            <Link href='mailto:faizanjavid71@gmail.com'>
              <a target='_blank'>Send a Message</a>
            </Link>
          </article>
          <article className={styles.contact__option}>
            <BsWhatsapp className={styles.contact__option__icon} />
            <h4>WhatsApp</h4>
            <h5>+92 303 5929146</h5>
            <Link href='https://wa.me/+923035929146'>
              <a target='_blank'>Send a Message</a>
            </Link>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail} className={styles.contact__form}>
          <input
            type='text'
            name='name'
            placeholder='Your Full Name'
            className={styles.form__input}
            required
          />
          <input
            type='email'
            name='email'
            placeholder='Your Email Address'
            className={styles.form__input}
            required
          />
          <textarea
            name='message'
            rows='7'
            placeholder='Your Message'
            className={styles.form__textarea}
            required
          ></textarea>
          <button className={styles.contact__btn}><Link href='mailto:faizanjavid71@gmail.com'>
              <a target='_blank'>Send a Message</a>
            </Link>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
