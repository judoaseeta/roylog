import Head from 'next/head'
import styles from '../styles/Home.module.css'
import LayOut from '../components/layout';

export default function Home() {
	return (
		<LayOut>
			<div className={styles.container}>
				<main className={styles.main}>
					<h1>Hello World2</h1>
				</main>
			</div>
		</LayOut>
	)
}
