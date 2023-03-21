import * as Multer from 'multer';
import { Storage } from '@google-cloud/storage';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';
import { KEY_FILE, PROJECT_ID } from '../../utils/config';

export const multer = Multer({
    storage: Multer.memoryStorage(),
    limits: {
        fileSize: 2 * 1024 * 1024,
    },
});

// Set up Google Cloud Storage
const storage = new Storage({
    projectId: PROJECT_ID,
    keyFilename: KEY_FILE,
});

const bucket = storage.bucket('tripapp_post_images');

export function uploadImageToCloud(file: Express.Multer.File): Promise<string> {
    return new Promise((resolve, reject) => {
        if (!file) {
            reject('Image is missing.');
        }
        const imageName = uuidv4() + path.extname(file.originalname);
        const blob = bucket.file(imageName);
        const blobStream = blob.createWriteStream();

        blobStream.on('error', (error: any) => {
            reject(`Unable to upload file: ${error}`);
        });

        blobStream.on('finish', () => {
            const publicUrl = blob.publicUrl();
            resolve(publicUrl);
        });

        blobStream.end(file.buffer);
    });
}
