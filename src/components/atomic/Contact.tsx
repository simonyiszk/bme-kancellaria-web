/** @jsx jsx */

import { jsx, Link } from 'theme-ui';

export interface ContactProps
  extends React.PropsWithoutRef<JSX.IntrinsicElements['address']> {
  name: string;
  jobTitle: string;
  telephone: string;
  email: string;
  address: string;
}

export function Contact({
  name,
  jobTitle,
  telephone,
  email,
  address,
  ...props
}: ContactProps): JSX.Element {
  return (
    <address
      itemScope
      itemType="https://schema.org/Person"
      sx={{ fontStyle: 'normal' }}
      {...props}
    >
      <span itemProp="name">{name}</span> –{' '}
      <span itemProp="jobTitle" sx={{ textTransform: 'lowercase' }}>
        {jobTitle}
      </span>
      <br />
      <Link
        href={`tel:${telephone.replace(/\s/g, '-')}`}
        itemProp="telephone"
        variant="inverted"
      >
        {telephone}
      </Link>
      <br />
      <Link href={`mailto:${email}`} itemProp="email" variant="inverted">
        {email}
      </Link>
      <br />
      <Link
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          // Truncate building-specific data, e.g. floor and room number
          address
            .split(',')
            .slice(0, 2)
            .join(','),
        )}`}
        itemProp="address"
        variant="inverted"
      >
        {address}
      </Link>
    </address>
  );
}
