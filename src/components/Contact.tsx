import React from 'react';
import { NavLink } from 'theme-ui';

export interface ContactProps
  extends React.PropsWithoutRef<JSX.IntrinsicElements['address']> {
  name: string;
  jobTitle: string;
  telephone: string;
  email: string;
  address: string;
}

export default function Contact({
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
      <NavLink
        href={`tel:${telephone.replace(/\s/g, '-')}`}
        itemProp="telephone"
        sx={{ fontWeight: 'body' }}
      >
        {telephone}
      </NavLink>
      <br />
      <NavLink
        href={`mailto:${email}`}
        itemProp="email"
        sx={{ fontWeight: 'body' }}
      >
        {email}
      </NavLink>
      <br />
      <NavLink
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          // Truncate building-specific data, e.g. floor and room number
          address
            .split(',')
            .slice(0, 2)
            .join(','),
        )}`}
        itemProp="address"
      >
        {address}
      </NavLink>
    </address>
  );
}
