import { PostType } from './postType';
import { LocationType } from './locationType';

export interface RouteType extends PostType {
    googleMapping: string;
    description: string;
    distance: number;
    duration: number;
    wayPoints: LocationType[];
}
