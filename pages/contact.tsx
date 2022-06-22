import type { NextPage } from 'next';
import { Heading } from '@chakra-ui/react';

import Layout from '../components/Layout';
import ContactPage from '../components/ContatPage';

const Contact: NextPage = () => {
  return (
    <Layout>
      <ContactPage />
    </Layout>
  );
};

export default Contact;
