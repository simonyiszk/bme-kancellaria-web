/** @jsx jsx */

import { Link } from 'gatsby';
import { Flex, Heading, Image, jsx, Styled } from 'theme-ui';

export interface NewsArticleTeaserProps {
  title: string;
  summary: string;
  datePublished: {
    raw: string;
    pretty: string;
  };
  thumbnailURL: string; // TODO: Use gatsby-image
  articleLink: string;
}

export function NewsArticleTeaser({
  title,
  summary,
  datePublished,
  thumbnailURL,
  articleLink,
}: NewsArticleTeaserProps): JSX.Element {
  return (
    <article sx={{ width: '100%' }}>
      <Link sx={{ textDecoration: 'none', color: 'inherit' }} to={articleLink}>
        <Heading as="h3" sx={{ mb: 2 }}>
          {title}
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
            <time dateTime={datePublished.raw} sx={{ color: 'darkgray' }}>
              {datePublished.pretty}
            </time>

            <Styled.p sx={{ mb: 0 }}>{summary}</Styled.p>
          </Flex>
          <Image
            src={thumbnailURL}
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
      </Link>
    </article>
  );
}
