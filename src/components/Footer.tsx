import React from 'react';
import { Box, Heading, NavLink } from 'theme-ui';

export default function Footer(): JSX.Element {
  return (
    <Box as="footer" bg="text" color="background">
      <Heading>Kommunikáció</Heading>
      <address itemScope itemType="https://schema.org/Person">
        <span itemProp="name">Kovács Klára</span> –{' '}
        <span itemProp="jobTitle">ügyvivő szakértő</span>
        <br />
        <NavLink
          href="tel:+36-1-463-3984"
          itemProp="telephone"
          sx={{ fontWeight: 'body' }}
        >
          +36 1 463 3984
        </NavLink>
        <br />
        <NavLink
          href="mailto:kancellaria.kommunikacio@mail.bme.hu"
          itemProp="email"
          sx={{ fontWeight: 'body' }}
        >
          kancellaria.kommunikacio@mail.bme.hu
        </NavLink>
        <br />
        <span itemProp="address">
          {' '}
          1118 Budapest, Műegyetem rkp. 7–9., 2. em. 202
        </span>
      </address>

      <Heading>Rendezvények, terembérlés</Heading>
    </Box>
  );
}
