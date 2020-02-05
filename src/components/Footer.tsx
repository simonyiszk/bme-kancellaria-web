import React from 'react';
import { Box, Heading, NavLink } from 'theme-ui';

import Contact from './Contact';

export default function Footer(): JSX.Element {
  return (
    <Box as="footer" bg="text" color="background">
      <Heading>Kommunikáció</Heading>
      <Contact
        name="Kovács Klára"
        jobTitle="Ügyvivő szakértő"
        telephone="+36 1 463 3984"
        email="kancellaria.kommunikacio@mail.bme.hu"
        address="1118 Budapest, Műegyetem rkp. 7–9., 2. em. 202"
      />

      <Heading>Rendezvények, terembérlés</Heading>
    </Box>
  );
}
