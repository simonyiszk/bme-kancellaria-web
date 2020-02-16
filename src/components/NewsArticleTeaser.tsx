/** @jsx jsx */

import { Heading, jsx, Styled } from 'theme-ui';

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
    <article>
      <Heading as="h2" sx={{ fontSize: 'l', lineHeight: 'h3', mb: 2 }}>
        Modern gyárak éjszakája a Műegyetemen
      </Heading>
      <time dateTime="2019-10-29" sx={{ color: 'darkgray' }}>
        2019. október 29.
      </time>

      <Styled.p sx={{ mb: 0 }}>
        Az ITM által szervezett oszágos rendezvény keretében az Ipar 4.0
        Technológiai Központ is több időpontban várja szeretettel az
        érdeklődőket november 15-én.
      </Styled.p>
    </article>
  );
}
