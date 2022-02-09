import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const socials = [
  {
    name: 'Twitter',
    link: 'https://twitter.com/amromoorie',
    icon: <FontAwesomeIcon size="lg" icon={faTwitter} />,
  },
  {
    name: 'Instagram',
    link: 'https://instagram.com/amromoorie',
    icon: <FontAwesomeIcon size="lg" icon={faInstagram} />,
  },
  {
    name: 'LinkedIn',
    link: 'https://linkedin.com/in/amromoorie',
    icon: <FontAwesomeIcon size="lg" icon={faLinkedin} />,
  },
  {
    name: 'Github',
    link: 'https://github.com/amromoorie',
    icon: <FontAwesomeIcon size="lg" icon={faGithub} />,
  },
];

export default function Socials() {
  return (
    <>
      <div className="flex flex-row m-1 space-x-6 items-center">
        {socials.map((item, idx) => (
          <div key={idx} className='w-6'>
            <Link  href={item.link} >
          <a key={item.name}  rel="noopener noreferrer" target="_blank">
            {item.icon}
          </a>
            </Link>
            </div>
        ))}
      </div>
    </>
  );
}
