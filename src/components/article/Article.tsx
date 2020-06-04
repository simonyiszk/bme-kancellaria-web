/** @jsx jsx */

import React from 'react';
import { Grid, Heading, jsx, Styled } from 'theme-ui';

interface ArticleProps {
  headingText: string;
  bodyText: string;
}

export default function Article({
  headingText,
  bodyText,
}: ArticleProps): JSX.Element {
  return (
    <React.Fragment>
      <Heading as="h1" color="primary">
        {headingText}
      </Heading>
      <Styled.p>{bodyText}</Styled.p>
    </React.Fragment>
  );
}
