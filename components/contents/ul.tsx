import React from 'react';
import styles from '../../styles/Content.module.css';

const UL: React.FC = ({children}) => 
<ul
    className={styles.ul}
>
    {children}
</ul>;

export default UL;
