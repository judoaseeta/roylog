import React from 'react';
import { IconProps } from './index';
const Close: React.FC<IconProps> = ({ className, onClick  }) => 
<svg
    className={className}
    viewBox="0 0 100 100"
    onClick={onClick}
>
    <rect 
        x={0}
        y={10}
        width={Math.hypot(100,100)}
        height={20}
        transform="translate(15,-15) rotate(45)"
    />
    <rect 
        x={0}
        y={70}
        width={Math.hypot(100,100)}
        height={20}
        transform="translate(-55,45) rotate(-45)"
    />
</svg>;

export default Close;