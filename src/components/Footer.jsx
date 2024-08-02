import { Link } from "react-router-dom";
import { socialLinks } from "../constants";
import React from "react";

const Footer = () => {
  return (
    <footer className='footer font-poppins'>
      <hr className='border-slate-200' />

      <div className='footer-container'>
        <p className="text-xs md:text-sm">
          © {new Date().getFullYear()} <strong>Sri Krishna Chaitanya Reddy Bhimavarapu</strong>. All rights reserved.
        </p>

        <div className='flex gap-3 justify-center items-center'>
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target='_blank'>
              <img
                src={link.iconUrl}
                alt={link.name}
                className='w-4 h-4 md:w-6 md:h-6 object-contain'
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;