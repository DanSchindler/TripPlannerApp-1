import * as multer from 'multer';
import { Storage } from '@google-cloud/storage';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';
import { KEY_FILE, PROJECT_ID } from './config';

// Set up Google Cloud Storage
const storage = new Storage({
    projectId: PROJECT_ID,
    keyFilename: KEY_FILE, 
  });

  const bucket = storage.bucket('tripapp_post_images');


