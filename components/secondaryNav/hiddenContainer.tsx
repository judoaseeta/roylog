import React from 'react';
import classnames from 'classnames/bind';
import styles from '../../styles/SecondaryNav.module.css';

const cx = classnames.bind(styles);

const HiddenContainer: React.FC<{
    open: boolean
}> =({ children, open }) => 
<div
    className={cx('hiddenContainer',{
        on: open
    })}
>
    {children}
</div>;

export default HiddenContainer;
