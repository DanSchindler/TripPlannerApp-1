import { PostType } from './postType';
import { LocationType } from './locationType';

export interface RouteType extends PostType {
    googleMapping: string;
    description: GeolocationCoordinates;
    distance: number;
    duration: number;
    wayPoints: LocationType[];
}
