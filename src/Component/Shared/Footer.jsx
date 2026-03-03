import React from "react";
import Logo from "../Extra/Logo";
import { Link } from "react-router";
import { FaFacebookF, FaTwitter, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const linkStyle = "link link-hover text-gray-700 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200 flex items-center gap-3";
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-slate-100 dark:bg-[#1a1f24] text-base-content p-10 border-t border-gray-200 dark:border-gray-800">
        <nav>
          <h6 className="footer-title text-cyan-700 dark:text-cyan-400 opacity-100 font-bold mb-4 tracking-widest">Contact Info</h6>
          <div className="space-y-4">
            <a href="tel:01700000000" className={linkStyle}>
              <FaPhoneAlt className="text-cyan-600 dark:text-cyan-400" /> 
              <span className="font-medium">01712-345678</span>
            </a>
            <a href="mailto:elegantEssence@gmail.com" className={linkStyle}>
              <FaEnvelope className="text-cyan-600 dark:text-cyan-400" /> 
              <span className="font-medium">elegantEssence@gmail.com</span>
            </a>
            <div className="flex items-start gap-3 text-gray-700 dark:text-gray-200">
              <FaMapMarkerAlt className="text-cyan-600 dark:text-cyan-400 mt-1" /> 
              <span className="font-medium">Mirpur-1, Dhaka, Bangladesh</span>
            </div>
          </div>
        </nav>
        <nav>
          <h6 className="footer-title text-cyan-700 dark:text-cyan-400 opacity-100 font-bold mb-4 tracking-widest">Company</h6>
          <div className="flex flex-col space-y-3">
            <Link to="/about" className={linkStyle}>About Us</Link>
            <Link to="/Fetures" className={linkStyle}>Features</Link>
            <Link to="/Covarage-Area-Map" className={linkStyle}>Coverage Area</Link>
          </div>
        </nav>

        <nav>
          <h6 className="footer-title text-cyan-700 dark:text-cyan-400 opacity-100 font-bold mb-4 tracking-widest">Legal</h6>
          <div className="flex flex-col space-y-3">
            <Link to="/Terms&Condiotions" className={linkStyle}>Terms & Conditions</Link>
            <Link to="/Privacy" className={linkStyle}>Privacy Policy</Link>
            <Link to="/Faq" className={linkStyle}>FAQ</Link>
          </div>
        </nav>

        <nav>
          <h6 className="footer-title text-cyan-700 dark:text-cyan-400 opacity-100 font-bold mb-4 tracking-widest">Working Hours</h6>
          <div className="space-y-3 text-gray-800 dark:text-gray-100 font-medium">
            <p className="flex justify-between w-full border-b border-gray-200 dark:border-gray-700 pb-1 gap-4">
              <span>Sun - Thu:</span> 
              <span className="text-cyan-700 dark:text-cyan-400">9AM - 6PM</span>
            </p>
            <p className="flex justify-between w-full border-b border-gray-200 dark:border-gray-700 pb-1 gap-4">
              <span>Saturday:</span> 
              <span>10AM - 5PM</span>
            </p>
            <p className="flex justify-between w-full text-red-600 dark:text-red-400 gap-4">
              <span>Friday:</span> 
              <span className="uppercase font-bold">Closed</span>
            </p>
          </div>
        </nav>
      </footer>

      <footer className="footer footer-center bg-slate-200 dark:bg-[#111518] text-gray-700 dark:text-gray-400 py-8 px-10 border-t border-gray-300 dark:border-gray-800">
        <aside>
          <div className="mb-4 brightness-110">
            <Logo />
          </div>
          <p className="max-w-md italic opacity-80">
            "Your satisfaction is our priority. Providing quality services since 2024."
          </p>
          
          <div className="flex gap-8 mt-6">
            <a className="text-2xl hover:text-[#1877F2] hover:-translate-y-1 transition-all duration-300 cursor-pointer"><FaFacebookF /></a>
            <a className="text-2xl hover:text-[#1DA1F2] hover:-translate-y-1 transition-all duration-300 cursor-pointer"><FaTwitter /></a>
            <a className="text-2xl hover:text-[#FF0000] hover:-translate-y-1 transition-all duration-300 cursor-pointer"><FaYoutube /></a>
          </div>
        </aside>
        <div className="mt-6 text-xs font-semibold uppercase tracking-wider opacity-60">
          Copyright © {new Date().getFullYear()} - All rights reserved by Elegant Essence
        </div>
      </footer>
    </div>
  );
};

export default Footer;