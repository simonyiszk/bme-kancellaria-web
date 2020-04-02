/** @jsx jsx */

import { Box, Flex, Image, jsx, Link, Styled } from 'theme-ui';

import Logo from '../assets/bme-kancellaria-logo.svg';

export type NavProps = React.PropsWithoutRef<JSX.IntrinsicElements['nav']>;

export function Navbar(props: NavProps): JSX.Element {
  return (
    <nav
      sx={{
        minHeight: '96px',
        height: 'auto',
        m: 'auto',
        width: '90%',
      }}
    >
      <Flex sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
        <Image src={Logo} sx={{ height: '64px', m: 'auto 0' }} />
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
