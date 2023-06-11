import React, { useContext } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ToggleContext } from '../../../Provider/ToggleProvider';

const Community = () => {
  const { isDark } = useContext(ToggleContext);

  const cardBackgroundClass = isDark ? "bg-indigo-500" : "bg-base-100";
  const textColorClass = isDark ? "text-white" : "text-black";

  return (
    <div className={`my-12 py-16 ${cardBackgroundClass}`}>
      <div>
        <h2 className={`font-semibold text-5xl text-center ${textColorClass}`}>Join our Community</h2>
        <p className={`text-center text-xl py-4 ${textColorClass}`}>
          If you would like to keep up on the latest posts and courses, come by and connect with us on the following links.
        </p>
      </div>

      <div className="my-6 flex justify-evenly items-center">
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <img src="../../../../src/assets/Community/YT.png" alt="" className="w-36" />
          <p className={`text-center flex items-center justify-center gap-1 ${textColorClass} font-bold`}>
            <FaExternalLinkAlt />
            Youtube
          </p>
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <img src="../../../../src/assets/Community/Facebook.png" alt="" className="w-20" />
          <p className={`text-center flex items-center justify-center gap-1 ${textColorClass} mt-3 font-bold`}>
            <FaExternalLinkAlt />
            Facebook
          </p>
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <img src="../../../../src/assets/Community/Linkedin.png" alt="" className="w-24" />
          <p className={`text-center flex items-center justify-center gap-1 ${textColorClass} font-bold mt-2`}>
            <FaExternalLinkAlt />
            Linkedin
          </p>
        </a>
        <a href="https://telegram.org/" target="_blank" rel="noopener noreferrer">
          <img src="../../../../src/assets/Community/Telegram.png" alt="" className="w-24" />
          <p className={`text-center flex items-center justify-center gap-1 ${textColorClass} font-bold`}>
            <FaExternalLinkAlt />
            Telegram
          </p>
        </a>
      </div>
    </div>
  );
};

export default Community;
