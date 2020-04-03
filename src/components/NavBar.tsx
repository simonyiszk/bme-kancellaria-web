/** @jsx jsx */

import { Box, Flex, Image, jsx, Link, Styled } from 'theme-ui';

import Logo from '../assets/bme-kancellaria-logo.svg';

export type NavBarProps = React.PropsWithoutRef<JSX.IntrinsicElements['nav']>;

export function Navbar(props: NavBarProps): JSX.Element {
  return (
    <nav
      sx={{
        minHeight: '6rem',
        height: 'auto',
        m: 'auto',
        width: '90%',
      }}
    >
      <Flex sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
        <Image src={Logo} sx={{ height: '4rem', my: 'auto' }} />
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
      </Flex>
    </nav>
  );
}
