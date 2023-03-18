import { PostType } from '../../../types/postType';
import PostsModel from '../../../models/postsModel';
import { LocationType } from '../../../types/locationType';
import LocationsModel from '../../../models/locationsModel';

export async function uploadPost(postToUpload: PostType) {
    const newPost = new PostsModel(postToUpload);
    const savedPost = await newPost.save();
    return savedPost;
}
export async function uploadLocation(locationToUpload: LocationType) {
    const newLocation = new LocationsModel(locationToUpload);
    const savedLocation = await newLocation.save();
    return savedLocation;
}
