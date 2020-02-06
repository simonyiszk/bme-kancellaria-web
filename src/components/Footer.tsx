import React from 'react';
import { NavLink, Styled } from 'theme-ui';

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
          <NavLink href="https://kth.bme.hu/">KTH</NavLink>
        </li>
        <li>
          <NavLink href="https://www.bme.hu/">BME.hu</NavLink>
        </li>
        <li>
          <NavLink href="https://telefon.bme.hu/">Telefonkönyv</NavLink>
        </li>
        <li>
          <NavLink href="https://www.mnb.hu/arfolyamok">MNB árfolyamok</NavLink>
        </li>
        <li>
          <NavLink href="https://www.mnb.hu/Jegybanki_alapkamat_alakulasa">
            Jegybanki alapkamat
          </NavLink>
        </li>
        <li>
          <NavLink href="https://nav.gov.hu/nav/szolgaltatasok/uzemanyag/uzemanyagarak">
            NAV üzemanyagárak
          </NavLink>
        </li>
      </ul>

      <Styled.h2>Szolgáltatások</Styled.h2>
      <ul>
        <li>
          <NavLink href="https://www.omikk.bme.hu/">Könyvtár</NavLink>
        </li>
        <li>
          <NavLink href="https://net.bme.hu/">BMENET</NavLink>
        </li>
        <li>
          <NavLink href="https://muegyetemiallasborze.hu/">
            Műegyetemi Állásbörze
          </NavLink>
        </li>
        <li>
          <NavLink href="https://www.bme.hu/allaspalyazatok">
            Álláspályázatok
          </NavLink>
        </li>
      </ul>
    </footer>
  );
}
