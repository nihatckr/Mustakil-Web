import { createIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { motion } from 'framer-motion';

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: 'rgba(255, 255, 255, 0)',
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: '#0BC5EA',
  },
};

export const MustakilIcon = ({ ...props }) => {
  return (
    <NextLink href={'/'} {...props}>
      <Link {...props}>
        <LogoIconSvg width={'100%'} />
      </Link>
    </NextLink>
  );
};
export const LogoIconSvg = createIcon({
  displayName: 'UpDownIcon',
  viewBox: '0 0 210.09 31.21',
  path: (
    <g>
      <motion.path
        stroke={'#76E4F7'}
        variants={icon}
        d='M259.32,479H247.7V448.13h11.62Z'
        transform='translate(-247.7 -448.13)'
        initial='hidden'
        animate='visible'
        transition={{
          default: { duration: 1, ease: 'easeInOut' },
          fill: { duration: 1, ease: [1, 0, 0.8, 1] },
        }}
      />
      <motion.path
        stroke={'#76E4F7'}
        variants={icon}
        d='M274.68,459.74V479H263.06V448.13h0A11.61,11.61,0,0,1,274.68,459.74Z'
        transform='translate(-247.7 -448.13)'
        initial='hidden'
        animate='visible'
        transition={{
          default: { duration: 1, ease: 'easeInOut' },
          fill: { duration: 1, ease: [1, 0, 0.8, 1] },
        }}
      />
      <motion.path
        stroke={'#76E4F7'}
        variants={icon}
        d='M290.17,459.74V479H278.55V448.13h0A11.61,11.61,0,0,1,290.17,459.74Z'
        transform='translate(-247.7 -448.13)'
        initial='hidden'
        animate='visible'
        transition={{
          default: { duration: 1, ease: 'easeInOut' },
          fill: { duration: 1, ease: [1, 0, 0.8, 1] },
        }}
      />

    </g>
  ),
});
