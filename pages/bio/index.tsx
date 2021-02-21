import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { createClient } from 'contentful';
import Contents from '../../components/contents';
import LayOut from '../../components/layout';
import styles from '../../styles/Bio.module.css';

interface Bio {
    content: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
    const client = createClient({
        accessToken: process.env.API_KEY,
        space:process.env.SPACE_ID
    });
    const result = await client.getEntry<Bio>('3PV8S4iPZYXjRrjrlm9iHA');
    const bio = result
    return {
        props: {
            bio:bio.fields
        }
    }
}
const Bio = ({ bio }: InferGetStaticPropsType<typeof getStaticProps>) => 
<LayOut>
    <section 
        className={styles.container}
    >
        {Contents(bio.content)}
    </section>
</LayOut>;

export default Bio;
