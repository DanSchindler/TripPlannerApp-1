import PostsModel from '../../../models/postsModel';
import mongoose from 'mongoose';

export async function supplyFilteredPosts(
    pageInd: number,
    pageSize: number,
    filtered_cities: string[]
) {
    let filterCondition: mongoose.mquery;
    if (filtered_cities.length == 0) {
        filterCondition = {};
    } else {
        filterCondition = { cities: { $in: filtered_cities } };
    }
    const pagePosts = PostsModel.find(filterCondition)
        .sort({ createdAt: 'desc' })
        .skip((pageInd - 1) * pageSize)
        .limit(pageSize);
    return pagePosts;
}
