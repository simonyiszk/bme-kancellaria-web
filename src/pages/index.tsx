/** @jsx jsx */

import { jsx, Link, Styled } from 'theme-ui';

import Layout from '../components/Layout';

export default function IndexPage(): JSX.Element {
  return (
    <Layout>
      <Styled.h1>Lorem ipsum</Styled.h1>
      <Styled.p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
        consectetur vero dolore a vel iste placeat ducimus, perferendis
        praesentium illo rem nisi, ratione recusandae expedita saepe eveniet.
        Tenetur, corporis dignissimos.
      </Styled.p>
      <Styled.p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        cum eligendi laborum ex quam sapiente maxime quasi numquam tenetur,
        laudantium nulla dolor id quis recusandae molestiae eius ad error ipsam.
      </Styled.p>
      <Styled.h2 sx={{ ':hover': { color: 'primary' } }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </Styled.h2>
      <Styled.p>
        Lorem ipsum <Link href="https://www.bme.hu/">dolor sit amet</Link>{' '}
        consectetur, adipisicing elit. Soluta, ad quasi totam repudiandae amet
        laborum vel a atque laboriosam officia magni. Eos hic velit impedit amet
        doloribus tempore repellendus nam!
      </Styled.p>
      <Styled.p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
        dolorem quibusdam ut vel ipsam voluptatem repudiandae vitae laudantium
        beatae earum tempore libero accusantium pariatur voluptates sint animi
        eveniet, enim facere.
      </Styled.p>
      <Styled.h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </Styled.h3>
      <Styled.p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur odio
        quidem nostrum. Assumenda odit, accusantium expedita excepturi
        asperiores perferendis, consequuntur, numquam voluptatum magnam tempore
        recusandae placeat quam necessitatibus. Error, obcaecati.
      </Styled.p>
    </Layout>
  );
}
