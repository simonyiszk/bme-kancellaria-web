/** @jsx jsx */

import { Heading, Image, jsx, Styled } from 'theme-ui';

import NewsImage from '../assets/news.png';

export interface NewsArticleTeaserProps {
  title: string;
  summary: string;
  datePublished: {
    raw: string;
    pretty: string;
  };
  thumbnailURL: string; // TODO: Use gatsby-image
}

export function NewsArticleTeaser({
  title,
  summary,
  datePublished,
  thumbnailURL,
}: NewsArticleTeaserProps): JSX.Element {
  return (
    <article sx={{ maxWidth: '500px', width: 'auto' }}>
      <Heading as="h3" sx={{ mb: 2 }}>
        Modern gyárak éjszakája a Műegyetemen
      </Heading>
      <div
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          maxHeight: '300px',
        }}
      >
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            maxHeight: '200px',
            maxWidth: '372px',
          }}
        >
          <time dateTime="2019-10-29" sx={{ color: 'darkgray' }}>
            2019. október 29.
          </time>

          <Styled.p sx={{ mb: 0 }}>
            Az ITM által szervezett oszágos rendezvény keretében az Ipar 4.0
            Technológiai Központ is több időpontban várja szeretettel az
            érdeklődőket november 15-én.
          </Styled.p>
        </div>
        <Image
          src={NewsImage}
          sx={{
            marginTop: '5px',
            width: '128px',
            height: '128px',
            border: '2px solid darkgray',
            borderRadius: '10px',
          }}
        />
      </div>
    </article>
  );
}
