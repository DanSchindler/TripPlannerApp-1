import { model } from 'mongoose';
import LocationSchema, { ILocationSchema } from './schema/locationSchema';
import { locationsDBName } from './models/utils';

const LocationsModel = model<ILocationSchema>(locationsDBName, LocationSchema);
export default LocationsModel;
