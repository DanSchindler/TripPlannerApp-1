import { ObjectId, Schema } from 'mongoose';
import { RouteType } from '../types/routeType';
import { locationsDBName } from '../models/utils';

export interface IRouteSchema extends RouteType {
    _id: ObjectId;
}

const RouteSchema = new Schema<RouteType>({
    googleMapping: { type: String, required: true },
    description: {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true },
    },
    distance: { type: Number, required: true },
    duration: { type: Number, required: true },
    wayPoints: [{ type: Schema.Types.ObjectId, ref: locationsDBName }],
});

export default RouteSchema;
