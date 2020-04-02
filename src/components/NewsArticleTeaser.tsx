/** @jsx jsx */

import { Flex, Heading, Image, jsx, Styled } from 'theme-ui';

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
    <article sx={{ width: '100%' }}>
      <Heading as="h3" sx={{ mb: 2 }}>
        Modern gyárak éjszakája a Műegyetemen
      </Heading>
      <Flex
        sx={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Flex
          sx={{
            flexDirection: 'column',
            pr: 4,
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
        </Flex>
        <Image
          src={NewsImage}
          sx={{
            mt: 1,
            minWidth: '128px',
            width: '128px',
            height: '128px',
            border: '2px solid darkgray',
            borderRadius: '10px',
          }}
        />
      </Flex>
    </article>
  );
}
