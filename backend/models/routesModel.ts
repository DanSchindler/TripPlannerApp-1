import { model } from 'mongoose';
import RouteSchema, { IRouteSchema } from '../schema/routeSchema';
import { routesDBName } from './utils';

const RoutesModel = model<IRouteSchema>(routesDBName, RouteSchema);
export default RoutesModel;
