import React from 'react';

// Source: https://github.com/typescript-cheatsheets/react-typescript-cheatsheet/blob/master/ADVANCED.md#extracting-prop-types-of-a-component
type ApparentComponentProps<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = C extends React.JSXElementConstructor<infer P>
  ? JSX.LibraryManagedAttributes<C, P>
  : React.ComponentProps<C>;

export interface BoxProps<C = React.ElementType> {
  as?: C;
}

export function Box<
  C extends
    | keyof JSX.IntrinsicElements
    | React.ComponentType<C extends React.ComponentType<infer P> ? P : never>
>({
  as,
  ...restProps
}: BoxProps<C> &
  React.PropsWithoutRef<ApparentComponentProps<C>>): JSX.Element {
  const Element: React.ElementType = as || 'div';
  return <Element {...restProps} />;
}
