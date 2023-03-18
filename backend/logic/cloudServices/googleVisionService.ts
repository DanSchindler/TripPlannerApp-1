import { ImageAnnotatorClient } from '@google-cloud/vision';
import { KEY_FILE, PROJECT_ID } from '../../utils/config';


const vision = require('@google-cloud/vision');

const client = new vision.ImageAnnotatorClient({
    projectId: PROJECT_ID,
    keyFilename: KEY_FILE,
  });

  
  
export async function detecteImageLabels(buffer: Buffer):Promise<string[]> {
  
    // Performs label detection on the image file

    const [result] = await client.labelDetection(buffer);
    const labels = result.labelAnnotations;
    if (!labels || labels.length === 0) {
        console.log('No labels found for the image');
        console.log(result);
        throw new Error('No labels found for the image');
      

    }
    else{
        return labels.filter((label: { score: number; }) => label.score > 0.65).map((label: any) => label.description);
    }

  }