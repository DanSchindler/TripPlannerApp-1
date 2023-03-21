import { Request } from 'express';
import BadRequestError from '../middleware/errors/BadRequestError';
import { detectImageLabels } from '../logic/cloudServices/googleVisionService';
import { uploadImageToCloud } from '../logic/cloudServices/cloudStorageService';

export interface ImageDataType {
    imagePath: string;
    imageLabels: string[];
}

export const uploadImage = async (req: Request) => {
    if (!('file' in req)) {
        throw new BadRequestError('image not provided');
    } else {
        const imageLabels: string[] = await detectImageLabels((req as any).file.buffer);
        const imagePath = await uploadImageToCloud((req as any).file);
        const uploadedImage: ImageDataType = { imagePath, imageLabels };
        return uploadedImage;
    }
};
