import React from 'react';
import styles from '../../styles/Content.module.css';

const P:React.FC = ({ children }) => 
<p
    className={styles.paragraph}
>
    {children}
</p>;

export default P;
