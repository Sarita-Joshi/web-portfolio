import React from 'react';

import {
  ImLinkedin,
  ImInstagram,
  ImFacebook,
  ImMail
} from 'react-icons/im'

const Socials = () => {
  return <div className='hidden xl:flex ml-24'>
    <ul className='flex gap-x-4'>
      <li>
        <a href='https://www.linkedin.com' target='_blank'>
          <ImLinkedin />
        </a>
      </li>
      <li>
        <a href='https://www.instagram.com' target='_blank'>
          <ImInstagram />
        </a>
      </li>
      <li>
        <a href='https://www.facebook.com' target='_blank'>
          <ImFacebook />
        </a>
      </li>
    </ul>
  </div>;
};

export default Socials;
