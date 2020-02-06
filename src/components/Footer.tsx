import React from 'react';
import { Styled } from 'theme-ui';

import Contact from './Contact';

export type FooterProps = React.PropsWithoutRef<
  JSX.IntrinsicElements['footer']
>;

export default function Footer(props: FooterProps): JSX.Element {
  return (
    <footer {...props}>
      <Styled.h2>Kommunikáció</Styled.h2>
      <Contact
        name="Kovács Klára"
        jobTitle="Ügyvivő szakértő"
        telephone="+36 1 463 3984"
        email="kancellaria.kommunikacio@mail.bme.hu"
        address="1118 Budapest, Műegyetem rkp. 7–9., 2. em. 202"
      />

      <Styled.h2>Rendezvények, terembérlés</Styled.h2>
      <Contact
        name="Major Sándor"
        jobTitle="Igazgatási ügyintéző"
        telephone="+36 1 463 3868"
        email="rendezveny@mail.bme.hu"
        address="1118 Budapest, Műegyetem rkp. 7–9., 2. em. HSZI"
      />
    </footer>
  );
}
