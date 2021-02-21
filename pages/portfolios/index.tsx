import { createClient } from 'contentful';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import LayOut from '../../components/layout';
import Portfolio from '../../components/portfolio';

import styles from '../../styles/Portfolios.module.css';
import contentStyles from '../../styles/Content.module.css';

interface Portfolios {

}
export const getStaticProps: GetStaticProps = async (context) => {
    const client = createClient({
        accessToken: process.env.API_KEY,
        space:process.env.SPACE_ID
    });
    const result = await client.getEntries<Portfolios>({
        'content_type' :'portfolio'
    });
    return {
        props: {
            queries: result.items
        }
    }
}
const Portfolios = ({ queries }:InferGetStaticPropsType<typeof getStaticProps>) => 
<LayOut
    metaDataProps={{
        title: "Roy's Portfolios"
    }}
>
    <header>
        <h1
            className={contentStyles.heading1}
        >Portfolios</h1>
    </header>
    <section
        className={styles.container}
    >
        {queries.map( query => 
            <Portfolio 
                data={query}
                key={query.sys.id}
            />
        )}
    </section>
</LayOut>
export default Portfolios;
