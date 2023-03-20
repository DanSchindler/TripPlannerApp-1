import PostsModel from '../../../models/postsModel';
import mongoose from 'mongoose';
import { PostType } from '../../../types/postType';
import LocationsModel from '../../../models/locationsModel';
import { postGenreEnum } from '../../../types/postGenreEnum';
import { createPostDTO, PostDTOType } from '../../../types/PostDTOType';
import RoutesModel from '../../../models/routesModel';

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
    const pagePosts = await PostsModel.find(filterCondition)
        .sort({ createdAt: 'desc' })
        .skip((pageInd - 1) * pageSize)
        .limit(pageSize);
    const allPostsDTO = addSpecificDataToPosts(pagePosts);
    return allPostsDTO;
}

export async function supplyUserWall(pageInd: number, pageSize: number, userId: string) {
    const pagePosts = await PostsModel.find({ uploadedBy: userId })
        .sort({ createdAt: 'desc' })
        .skip((pageInd - 1) * pageSize)
        .limit(pageSize);
    const allPostsDTO = addSpecificDataToPosts(pagePosts);
    return allPostsDTO;
}

async function addSpecificDataToPosts(posts: PostType[]): Promise<PostDTOType[]> {
    const allPostsDTO: PostDTOType[] = [];
    for (const post of posts) {
        const postDTO = createPostDTO(post);
        console.log(postDTO);
        if (post.postGenre === postGenreEnum.Location) {
            const locationDoc = await LocationsModel.findOne({ _id: post.dataID });
            postDTO.contentData = locationDoc;
        } else if (post.postGenre === postGenreEnum.Route) {
            const routeDoc = await RoutesModel.findOne({ _id: post.dataID });
            postDTO.contentData = routeDoc;
        }
        allPostsDTO.push(postDTO);
    }
    return allPostsDTO;
}
