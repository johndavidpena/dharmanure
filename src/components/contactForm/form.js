import React from 'react';
import formStyles from './form.module.css';
import { FiUser, FiMail, FiEdit } from "react-icons/fi";

const Form = () => (
  <div className={formStyles.formWrapper}>
    <p className={formStyles.text}>Want to get in touch?</p>

    <form name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <div className={formStyles.group}>
        <input type="text" name="name" required />
        <span className={formStyles.highlight}></span>
        <span className={formStyles.bar}></span>
        <label><FiUser />&nbsp;Name</label>
      </div>

      <div className={formStyles.group}>
        <input type="text" name="email" required />
        <span className={formStyles.highlight}></span>
        <span className={formStyles.bar}></span>
        <label><FiMail />&nbsp;Email</label>
      </div>

      <div className={formStyles.group}>
        <input type="text" name="message" required />
        <span className={formStyles.highlight}></span>
        <span className={formStyles.bar}></span>
        <label><FiEdit />&nbsp;Message</label>
      </div>

      <button type="submit">Send</button>
    </form>

    {/* <form name="contact" method="POST" data-netlify="true" className={formStyles.form}>
      <input type="hidden" name="form-name" value="contact" />
      <div className={formStyles.nameEmail}>
        <div className={formStyles.input}>
          <label><FiUser />
            <input type="text" name="name" />
          </label>
        </div>

        <div className={formStyles.input}>
          <label>Email
            <input type="email" name="email" />
          </label>
        </div>
      </div>

      <div className={formStyles.message}>
        <label className={formStyles.textarea}>Message
            <textarea name="message"></textarea>
        </label>
      </div>

      <button type="submit"
        className={formStyles.button}>
        send</button>
    </form> */}

  </div>
);

export default Form;
