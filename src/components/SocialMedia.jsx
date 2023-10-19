import React from 'react';

import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.instagram.com/robert_codes"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
      </div>
      <div>
        <a href="mailto:rnnjenga@gmail.com">
          <SiGmail />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/robert-njenga-812023291">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
