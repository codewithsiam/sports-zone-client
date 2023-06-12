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
        <h2 className={`font-semibold text-5xl text-center text-primary ${textColorClass}`}>Join our Community</h2>
        <p className={`text-center text-xl py-4  ${textColorClass}`}>
          If you would like to keep up on the latest posts and courses, come by and connect with us on the following links.
        </p>
      </div>

      <div className="my-6 flex justify-evenly items-center">
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <img src="./youtube.jpg" alt="" className="w-36" />
          <p className={`text-center flex items-center justify-center gap-1 ${textColorClass} font-bold`}>
            <FaExternalLinkAlt />
            Youtube
          </p>
        </a>
        <a href="https://www.facebook.com/abusayedalsiam69" target="_blank" rel="noopener noreferrer">
          <img src="./fb.jpg" alt="" className="w-20" />
          <p className={`text-center flex items-center justify-center gap-1 ${textColorClass} mt-3 font-bold`}>
            <FaExternalLinkAlt />
            Facebook
          </p>
        </a>
        <a href="https://www.linkedin.com/in/abu-sayed-al-siam-411017277/" target="_blank" rel="noopener noreferrer">
          <img src="./linkedin.jpg" alt="" className="w-24" />
          <p className={`text-center flex items-center justify-center gap-1 ${textColorClass} font-bold mt-2`}>
            <FaExternalLinkAlt />
            Linkedin
          </p>
        </a>
        <a href="https://t.me/Siam_WD" target="_blank" rel="noopener noreferrer">
          <img src="./telegram.jpg" alt="" className="w-24" />
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
