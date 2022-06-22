import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { FiTwitter } from 'react-icons/fi';
import { FaBehance } from 'react-icons/fa';
export const socials = [
  {
    id: 1,
    label: 'Facebook',
    href: '/',
    color: '#0099ff',
    icon: FaFacebookF,
  },
  {
    id: 2,
    label: 'Linkedin',
    href: '/',
    color: '#22cc88',
    icon: FaLinkedinIn,
  },
  {
    id: 3,
    label: 'Instagram',
    href: '/',
    color: '#ffaa00',
    icon: GrInstagram,
  },
  { id: 4, label: 'Twitter', href: '/', color: '#ffaa00', icon: FiTwitter },
  { id: 5, label: 'Behance', href: '/', color: '#ffaa00', icon: FaBehance },
];
export const menus = [
  { id: 2, label: 'About', href: '/about', color: '#0099ff' },
  { id: 3, label: 'Project', href: '/projects', color: '#22cc88' },
  { id: 4, label: 'Contact', href: '/contact', color: '#ffaa00' },
];
