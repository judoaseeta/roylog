import React from 'react';
import styles from '../styles/Nav.module.css';
import Link from 'next/link';

const routes = [
    ["Portfolios","/portfolios"],
    ["Posts", "/posts"],
    ["Bio", "/bio"],
    ["Resume", "/resume"]
]

const Nav:React.FC = ({ children }) => 
<nav
    className={styles.container}
>
    <div
        className={styles.innerContainer}
    >
        <h1
            className={styles.title}
        >
            Roy's Blog
        </h1>
        <ul 
            className={styles.navs}
        >
            {
                routes.map( route => 
                    <li
                        className={styles.navItem}
                        key={route[1]}
                    >
                        <Link
                            href={route[1]}
                            
                        >
                            <a>{route[0]}</a>
                        </Link>
                    </li>
                )
            }
        </ul>
    </div>
</nav>;

export default Nav;
