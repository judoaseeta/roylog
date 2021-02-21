import React from 'react';
import Head from 'next/head';
import Nav from './nav';
import styles from '../styles/Layout.module.css';

interface LayOutProps {
    metaDataProps? :{
        title? : string;
        description?: string;
    }
}
const LayOut:React.FC<LayOutProps> = ({ 
    children,
    metaDataProps: {
        title = "Roy's blog",
        description = "Roy Choi's blog."
    } ={}
}) => {
    return (
        <div
            className={styles.container}
        >  
            <Head>
                <title>{title}</title>
                <meta 
                    name="Author"
                    content="Roy Byeongjun Choi"
                />
                <meta 
                    name="description" 
                    content={description}  
                />
                // OPEN GRAPH
                <meta 
                    property="og:title"
                    content={title}
                />
                <meta 
                    property="og:description" 
                    content={description}
                />
                <meta 
                    name="twitter:title" 
                    content={title}
                />
            </Head>
            <header>
                <Nav />
            </header>
            <main>
                {children}
            </main>
        </div>
    )
}

export default LayOut;
