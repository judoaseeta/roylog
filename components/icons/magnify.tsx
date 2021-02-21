import React from 'react';
import { IconProps } from './index';

const Magnify: React.FC<IconProps> = ({ className,onClick  }) => 
<svg
    className={className}
    viewBox="0 0 100 100"
    onClick={onClick}
    fill="transparent"
>
    <circle
        cx={40}
        cy={40}
        r={35}
    ></circle>
    <circle
        cx={40}
        cy={40}
        r={25}
        fill="black"
    ></circle>
    <rect
        x={65}
        y={65}
        width={30}
        height={15}
        transform="translate(65,-30) rotate(45)"
    ></rect>
</svg>;

export default Magnify;
