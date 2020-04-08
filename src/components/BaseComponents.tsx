/** @jsx jsx */

import { jsx, Styled } from 'theme-ui';

interface Content {
  children?: React.ReactNode;
}

export default function FooterHeader({
  children,
  ...props
}: Content): JSX.Element {
  return (
    <Styled.h2
      sx={{
        borderBottom: '1px solid',
        borderColor: 'darkgray',
        pb: 2,
      }}
      {...props}
    >
      {children}
    </Styled.h2>
  );
}
