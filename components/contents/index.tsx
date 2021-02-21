import React from 'react';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents,Options } from '@contentful/rich-text-react-renderer';
import { H1,H3, H4 } from './heading';
import { Bold } from './marks';
import P from './paragraph';
import UL from './ul';
const options:Options = {
    renderMark: {
        [MARKS.BOLD] : text => <Bold>{text}</Bold>
    },
    renderNode: {
        [BLOCKS.HEADING_1]: (node,text) => {
            return <H1>{text}</H1>
        },
        [BLOCKS.HEADING_3]: (node,text) => {
            return <H3>{text}</H3>
        },
        [BLOCKS.HEADING_4]: (node,text) => {
            return <H4>{text}</H4>
        },
        [BLOCKS.PARAGRAPH] : (node, text) => <P>{text}</P>,
        [BLOCKS.UL_LIST] : (node,text) => <UL>{text}</UL>
    }
}

const Contents = (content: any) => documentToReactComponents(content,options);

export default Contents;
