/** @jsx jsx */

import { Grid, jsx } from 'theme-ui';

import NewsImage from '../assets/news.png';
import { NewsArticleTeaser } from '../components/news/NewsArticleTeaser';

export default function NewsPage(): JSX.Element {
  return (
    <Grid
      sx={theme => ({
        gridColumnGap: 12,
        gridRowGap: 8,
        gridTemplateColumns: 'repeat(auto-fill, 52ch)',
        mx: 'auto',
        width: '90%',
        justifyContent: 'center',
        justifyItems: 'center',
      })}
    >
      {Array(9)
        .fill(0)
        .map(() => {
          return (
            <NewsArticleTeaser
              title="Modern gyárak éjszakája a Műegyetemen"
              summary="Az ITM által szervezett oszágos rendezvény keretében az Ipar 4.0
            Technológiai Központ is több időpontban várja szeretettel az
            érdeklődőket november 15-én."
              thumbnailURL={NewsImage}
              datePublished={{ raw: '2019-10-29', pretty: '2019. október 29.' }}
              articleLink="/cikktest"
            />
          );
        })}
    </Grid>
  );
}
