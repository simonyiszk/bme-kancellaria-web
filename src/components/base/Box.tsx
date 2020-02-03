import React from 'react';
import { CSSProperties } from 'treat';

// Source: https://github.com/typescript-cheatsheets/react-typescript-cheatsheet/blob/master/ADVANCED.md#extracting-prop-types-of-a-component
type ApparentComponentProps<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = C extends React.JSXElementConstructor<infer P>
  ? JSX.LibraryManagedAttributes<C, P>
  : React.ComponentProps<C>;

export interface BoxProps<C extends React.ElementType = React.ElementType>
  extends SpacingProps,
    ColorProps {
  as?: C;
}

interface SpacingProps {
  padding?: CSSProperties['padding'];
}

interface ColorProps {
  color?: CSSProperties['color'];
  bgColor?: CSSProperties['backgroundColor'];
  opacity?: CSSProperties['opacity'];
}

export function Box<
  C extends
    | keyof JSX.IntrinsicElements
    | React.ComponentType<C extends React.ComponentType<infer P> ? P : never>
>({
  as,
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  style,
  padding,
  color,
  bgColor,
  opacity,
  ...restProps
}: BoxProps<C> &
  React.PropsWithoutRef<ApparentComponentProps<C>>): JSX.Element {
  const Element: React.ElementType = as || 'div';
  return (
    <Element
      // TODO: Use treat instead of inline styles
      style={{
        ...style,
        padding,
        color,
        backgroundColor: bgColor,
        opacity,
      }}
      {...restProps}
    />
  );
}
