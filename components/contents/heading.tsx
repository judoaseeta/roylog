import React from 'react';
import styles from '../../styles/Content.module.css';

export const H1: React.FC = ({ children }) => 
<h1
    className={styles.heading1}
>
    {children}
</h1>;
export const H3: React.FC = ({ children }) => 
<h3
    className={styles.heading3}
>
    {children}
</h3>;
export const H4: React.FC = ({ children }) => 
<h4
    className={styles.heading4}
>
    {children}
</h4>;
