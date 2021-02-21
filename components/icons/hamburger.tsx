import React from 'react';
import { IconProps} from './index';
const Hamburger: React.FC<IconProps> = ({ className, onClick  }) => 
<svg
    className={className}
    viewBox="0 0 100 100"
    onClick={onClick}
>
    <rect 
        x={10}
        y={10}
        width={80}
        height={20}
        rx={10}
        ry={10}
    />
    <rect 
        x={10}
        y={40}
        width={80}
        height={20}
        rx={10}
        ry={10}
    />
    <rect 
        x={10}
        y={70}
        width={80}
        height={20}
        rx={10}
        ry={10}
    />
</svg>;

export default Hamburger;