import { CSSProperties } from 'treat';

import { BoxProps } from './Box';

export interface WrapperProps<C extends React.ElementType = React.ElementType>
  extends BoxProps<C> {
  // TODO: Defaults to `auto`
  marginInline?: CSSProperties['marginInline'];
}
