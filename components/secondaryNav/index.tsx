import React, { useCallback , useEffect, useState } from 'react';
import classnames from 'classnames/bind';
import styles from '../../styles/SecondaryNav.module.css';

import HiddenContainer from './hiddenContainer';
import Search from './search';
import { Hamburger, Magnify  } from '../icons';

interface SecondaryNavProps {

}
const cx = classnames.bind(styles);
const SecondaryNav: React.FC<SecondaryNavProps> = ({

}) => {
    const [ isScrolled, setIsScrolled ] = useState(false);
    const [ isSearchOn, setIsSearchOn ] = useState(false);
    const [ isCategoryOn, setIsCategoryOn ] = useState(false);

    const onCategoryClick = useCallback((e) => {
        if(isSearchOn) {
            setIsSearchOn(!isSearchOn);
            setIsCategoryOn(value => !value );
        } else {
            setIsCategoryOn(value => !value );
        }
    },[isSearchOn]);

    const onSearchClick = useCallback((e) => {
        if(isCategoryOn) {
            setIsCategoryOn(!isCategoryOn);
            setIsSearchOn(value => !value);
        } else {
            setIsSearchOn(value => !value);
        }
    }, [isCategoryOn]);
    useEffect(() => {
        const listener = () => {
            if(window.scrollY > 300) {
                setIsScrolled(true);
                setIsSearchOn(false);
                setIsCategoryOn(false);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll',listener)
        return () => window.removeEventListener('scroll',listener);
    });
    return (
    <nav
        className={cx('container', {
            fixed: isScrolled
        })}
    >
        <ul
            className={cx('inner')}
        >
            <li
                className={cx('innerItem')}
            >
                <Magnify 
                    className={cx('icon',{
                        selected: isSearchOn
                    })}
                    onClick={onSearchClick}
                />
            </li>
            <li
                className={cx('innerItem')}
            >
                <Hamburger 
                    className={cx('icon',{
                        selected: isCategoryOn
                    })}
                    onClick={onCategoryClick}
                />
            </li>
            <HiddenContainer
                open={isSearchOn}
            >
                <Search />
            </HiddenContainer>
        </ul>
    </nav>)
}

export default SecondaryNav;
