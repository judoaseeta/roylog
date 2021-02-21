import React from 'react';
import Image from 'next/image';
import classnames from 'classnames/bind';
import TableItem from './tableItem';
import Contents from '../contents/';
import ZoomableImage from '../zoomableImage/';
import { PortfolioData } from '../../types';

import styles from '../../styles/Portfolio.module.css';

export const propNames = ["name","githubAddress", "hostedAddress", "npmAddress", "stacks" ];
const cx = classnames.bind(styles);
interface PortfolioProps{
    data: {
        fields: PortfolioData
    }
}
const Portfolio: React.FC<PortfolioProps> = ({ data }) =>
<section
    className={cx('container')}
>
    <div
        className={cx('medias')}
    >
        <ZoomableImage
            src={"https:" +data.fields.appImage[0].fields.file.url}
            alt={data.fields.name}
        />
    </div>
    <table
        className={cx('table')}
    >
        <tbody
            className={cx('tbody')}
        >
            {propNames.map( propName => 
                <TableItem 
                    key={propName}
                    name={propName}
                    data={data.fields[propName]}
                />    
            )}
        </tbody>
    </table>
    <div
        className={cx('description')}
    >
        {Contents(data.fields.description)}
    </div>
</section>
export default Portfolio;
