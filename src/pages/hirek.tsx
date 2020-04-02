/** @jsx jsx */

import { Grid, jsx } from 'theme-ui';

import { NewsArticleTeaser } from '../components/NewsArticleTeaser';

export default function NewsPage(): JSX.Element {
  return (
    <Grid
      sx={theme => ({
        gridColumnGap: 12,
        gridRowGap: 8,
        gridTemplateColumns: 'repeat(auto-fill, 60ch)',
        mx: 'auto',
        width: '90%',
        justifyContent: 'center',
        justifyItems: 'center',
      })}
    >
      <NewsArticleTeaser />
      <NewsArticleTeaser />
      <NewsArticleTeaser />
      <NewsArticleTeaser />
      <NewsArticleTeaser />
      <NewsArticleTeaser />
      <NewsArticleTeaser />
      <NewsArticleTeaser />
    </Grid>
  );
}
