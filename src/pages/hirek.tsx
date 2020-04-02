/** @jsx jsx */

import { Grid, jsx } from 'theme-ui';

import { NewsArticleTeaser } from '../components/NewsArticleTeaser';

export default function NewsPage(): JSX.Element {
  return (
    <Grid
      sx={theme => ({
        display: 'grid',
        gridColumnGap: '36px',
        gridRowGap: '40px',
        gridTemplateColumns: 'repeat(auto-fill, 500px)',
        margin: '0 auto',
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
