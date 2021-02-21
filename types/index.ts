import { Entry, EntryCollection, RichTextContent, AssetCollection  } from 'contentful';
export interface PortfolioData {
    appImage:AssetCollection,
    description: RichTextContent,
    githubAddress: string;
    hostedAddress: string;
    name: string;
    stacks: string[];
}