import { blockType } from './base';

export interface PrivacyPolicyInterface {
    _id: string;

    author: string;
    body: Array<any>;
    logo: logoImage;
    publishedAt: string;
    slug: string;
    title: string;
}

export interface logoImage {
    _type: blockType.image;
    asset: {
        _ref: string;
        _type: blockType.reference;
    };
}
