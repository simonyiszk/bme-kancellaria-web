// Source: https://github.com/emotion-js/emotion/blob/master/packages/styled-base/types/helper.d.ts
type PropsOf<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = JSX.LibraryManagedAttributes<C, React.ComponentPropsWithoutRef<C>>;
