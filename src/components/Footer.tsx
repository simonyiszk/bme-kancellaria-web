/** @jsx jsx */

import { jsx, Styled } from 'theme-ui';

import Contact from './Contact';

export default function Footer(): JSX.Element {
  return (
    <footer sx={{ bg: 'text', color: 'background' }}>
      <Styled.h2>Kommunikáció</Styled.h2>
      <Contact
        name="Kovács Klára"
        jobTitle="Ügyvivő szakértő"
        telephone="+36 1 463 3984"
        email="kancellaria.kommunikacio@mail.bme.hu"
        address="1118 Budapest, Műegyetem rkp. 7–9., 2. em. 202"
      />

      <Styled.h2>Rendezvények, terembérlés</Styled.h2>
    </footer>
  );
}
