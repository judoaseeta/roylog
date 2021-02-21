import { createClient } from 'contentful';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import LayOut from '../../components/layout';
import SecondaryNav from '../../components/secondaryNav/';
import styles from '../../styles/Posts.module.css';

interface Posts {}
export const getStaticProps: GetStaticProps = async (context) => {
    const client = createClient({
        accessToken: process.env.API_KEY,
        space:process.env.SPACE_ID
    });
    const result = await client.getEntries<Posts>({
        'content_type' :'portfolio'
    });
    return {
        props: {
            queries: result.items
        }
    }
}

const Posts = ({ queries }: InferGetStaticPropsType<typeof getStaticProps>) => {
    console.log(queries);
    return <LayOut
    metaDataProps={{
        title: "Roy Choi's posts. - 로이 최의 포스트"
    }}
    >
        <SecondaryNav />
        <section
            className={styles.container}
        >
            Posts
        </section>
    </LayOut>
}

export default Posts;
