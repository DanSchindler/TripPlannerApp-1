import { ObjectId, Schema } from 'mongoose';
import { LocationType } from '../types/locationType';

export interface ILocationSchema extends LocationType {
    _id: ObjectId;
}

export const LocationSchema = new Schema<LocationType>({
    picturePath: { type: String, required: true },
    location: {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true },
    },
    description: { type: String, required: true },
});

export default LocationSchema;
