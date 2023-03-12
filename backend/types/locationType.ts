import { PostType } from './postType';

export interface LocationType extends PostType {
    picturePath: string;
    location: GeolocationCoordinates;
    description: string;
}
