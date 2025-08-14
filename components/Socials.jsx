import Link from "next/link";

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const socials = [
  { href: "https://github.com/andresc06", icon: <FaGithub /> },
  { href: "https://linkedin.com/in/andresc06", icon: <FaLinkedinIn /> },
  { href: "mailto:andrescontreras370@gmail.com", icon: <SiGmail /> }
];

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link
                    key={index}
                    href={item.href}
                    className={iconStyles}
                >
                    {item.icon}
                </Link>
            );
        })}
    </div>
  );
};

export default Socials