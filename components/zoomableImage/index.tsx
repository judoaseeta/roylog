import React from 'react';
import Image from 'next/image';
import classnames from 'classnames/bind';

import { Close } from '../icons';
import styles from '../../styles/ZoomableImage.module.css';


const cx = classnames.bind(styles);
interface ZoomableImageProps {
    src: string;
    alt: string;
}
const ZoomableImage:React.FC<ZoomableImageProps> = ({ src, alt }) => {
    const keyboardRef = React.useRef<HTMLDivElement | null>(null);
    const [ isTriggered, setTrigger ] = React.useState(false);
    const onZoomIn = React.useCallback(() => {
        setTrigger(true);
    },[]);
    const onZoomOut = React.useCallback(() => {
        setTrigger(false);
    },[]);
    return (
        <div
            className={cx('container',{
                zoomed: isTriggered
            })}
            ref={keyboardRef}
        >
            <div
                className={cx('innerContainer',{
                    zoomed: isTriggered
                })}
            >
                <div
                    className={cx('imageWrapper',{
                        zoomed: isTriggered
                    })}
                >
                    <Image
                        className={cx('zoomedImage')}
                        onClick={onZoomIn}
                        src={src}
                        layout="responsive"
                        width={500}
                        height={400} 
                        alt={alt}
                    />
                </div>
                <Close 
                      className={cx('zoomOutButton',{
                        zoomed: isTriggered
                    })}
                    onClick={onZoomOut}
                />
            </div>
        </div>
    );
}

export default ZoomableImage;
