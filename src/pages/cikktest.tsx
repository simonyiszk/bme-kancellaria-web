/** @jsx jsx */

import { Grid, jsx } from 'theme-ui';

import NewsImage from '../assets/news.png';
import Article from '../components/article/Article';
import { NewsArticleTeaser } from '../components/news/NewsArticleTeaser';

export default function ArticlePage(): JSX.Element {
  return (
    <Article
      headingText="Test Article Heading"
      bodyText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti aut
        incidunt, a, tenetur dolor sint itaque non molestiae nemo rem totam
        labore ea deserunt. Amet pariatur nostrum maxime dicta vitae?"
    />
  );
}
