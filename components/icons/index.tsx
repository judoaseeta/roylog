import Hamburger from './hamburger';
import Magnify from './magnify';
import Close from './close';
export interface IconProps {
    className:string;
    onClick: React.MouseEventHandler
}
export {
    Hamburger,
    Magnify,
    Close
}