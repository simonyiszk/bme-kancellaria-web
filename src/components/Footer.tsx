import React from 'react';
import { Link, Styled } from 'theme-ui';

import { Contact } from './Contact';

export type FooterProps = React.PropsWithoutRef<
  JSX.IntrinsicElements['footer']
>;

export function Footer(props: FooterProps): JSX.Element {
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

      <Styled.h2>Hasznos oldalak</Styled.h2>
      <ul>
        <li>
          <Link href="https://kth.bme.hu/" variant="inverted">
            KTH
          </Link>
        </li>
        <li>
          <Link href="https://www.bme.hu/" variant="inverted">
            BME.hu
          </Link>
        </li>
        <li>
          <Link href="https://telefon.bme.hu/" variant="inverted">
            Telefonkönyv
          </Link>
        </li>
        <li>
          <Link href="https://www.mnb.hu/arfolyamok" variant="inverted">
            MNB árfolyamok
          </Link>
        </li>
        <li>
          <Link
            href="https://www.mnb.hu/Jegybanki_alapkamat_alakulasa"
            variant="inverted"
          >
            Jegybanki alapkamat
          </Link>
        </li>
        <li>
          <Link
            href="https://nav.gov.hu/nav/szolgaltatasok/uzemanyag/uzemanyagarak"
            variant="inverted"
          >
            NAV üzemanyagárak
          </Link>
        </li>
      </ul>

      <Styled.h2>Szolgáltatások</Styled.h2>
      <ul>
        <li>
          <Link href="https://www.omikk.bme.hu/" variant="inverted">
            Könyvtár
          </Link>
        </li>
        <li>
          <Link href="https://net.bme.hu/" variant="inverted">
            BMENET
          </Link>
        </li>
        <li>
          <Link href="https://muegyetemiallasborze.hu/" variant="inverted">
            Műegyetemi Állásbörze
          </Link>
        </li>
        <li>
          <Link href="https://www.bme.hu/allaspalyazatok" variant="inverted">
            Álláspályázatok
          </Link>
        </li>
      </ul>
    </footer>
  );
}
