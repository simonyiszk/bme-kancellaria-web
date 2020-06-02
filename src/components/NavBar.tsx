/** @jsx jsx */

import { Box, Flex, Image, jsx, Link, Styled } from 'theme-ui';

import { ReactComponent as Logo } from '../assets/bme-kancellaria-logo.svg';

export type NavBarProps = React.PropsWithoutRef<JSX.IntrinsicElements['nav']>;

export function Navbar(props: NavBarProps): JSX.Element {
  return (
    <nav
      sx={{
        position: 'sticky',
        top: '0',
        bg: 'white',
        borderBottom: '1px solid',
        borderBottomColor: 'lightgray',
        zIndex: '1300',
      }}
    >
      <Flex
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
          pt: 2,
          width: '90%',
          mx: 'auto',
        }}
      >
        <a href="/" sx={{ height: '100%' }}>
          <Logo
            sx={{ height: '3rem', my: 'auto', color: 'original' }}
            alt="Logo"
          />
        </a>
        <Link href="/" variant="nav">
          Intranet
        </Link>
        <Link href="/hirek" variant="nav">
          Hírek
        </Link>
        <Link href="/rendezvenyek" variant="nav">
          Rendezvények
        </Link>
        <Link href="/projektek" variant="nav">
          Projektek
        </Link>
        <Link href="/adatok" variant="nav">
          Közérdekű adatok
        </Link>
        <Link href="/kapcsolat" variant="nav">
          Kapcsolat
        </Link>
      </Flex>
    </nav>
  );
}
