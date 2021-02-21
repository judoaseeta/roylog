import React from 'react';
import { 
    Javascript,
    Typescript,
    ReactJs,
    Html5,
    CssThree,
    Reactrouter,
    Sass,
    Github,
    Internetarchive,
    Jest,
    Testinglibrary,
    Npm,
    Travisci,
    NextDotJs
} from '@icons-pack/react-simple-icons';

interface TechStacksProp {
    stackName: string;  
    className?: string;
}
const TechStacks: React.FC<TechStacksProp> = ({ stackName,className }) => {
    const lowered = stackName.toLowerCase();
    switch(lowered) {
        case 'javascript' :
            return <Javascript className={className} />;
        case 'typescript' :
            return <Typescript className={className} />;
        case "react" :
            return <ReactJs className={className} />;
        case "html5" :
            return <Html5 className={className} />;
        case "css" :
            return <CssThree className={className} />;
        case "reactrouter" :
            return <Reactrouter className={className} />;
        case "react-router" :
            return <Reactrouter className={className} />;
        case "sass" :
            return <Sass className={className} />;
        case "scss" :
            return <Sass className={className} />;
        case "github" :
            return <Github className={className} />;
        case "npm" :
            return <Npm className={className} />;
        case "jest" :
            return <Jest className={className} />;
        case "testing-library" :
            return <Testinglibrary className={className} />;
        case "travisci" :
            return <Travisci className={className} />;
        case "nextjs" :
            return <NextDotJs className={className} />;
        default :
            return <Javascript className={className} />;
    }
};

export default TechStacks;