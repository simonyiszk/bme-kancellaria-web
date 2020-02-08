/** @jsx jsx */

import { BoxProps, Flex, jsx } from 'theme-ui';

// TODO: Use `FlexProps` instead of `BoxProps`
export interface ClusterProps extends BoxProps {
  gap?: number;
  rowGap?: number;
  columnGap?: number;
}

export function Cluster({
  gap,
  rowGap,
  columnGap,
  ...restProps
}: ClusterProps): JSX.Element {
  const mt = rowGap ?? gap;
  const ml = columnGap ?? gap;

  return (
    <Flex
      sx={{
        flexWrap: 'wrap',
        mt: mt != null ? -mt : undefined,
        ml: ml != null ? -ml : undefined,
        '> *': {
          mt,
          ml,
        },
      }}
      {...restProps}
    />
  );
}
