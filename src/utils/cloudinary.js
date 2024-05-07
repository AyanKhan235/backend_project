import {v2 as cloudinary} from 'cloudinary';
import fs from 'from'
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath)=>{
    try{
        if(!localFilePath) return null;
        // upload the file on cloudinary 
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        // file has been uploaded successfully
        console.log("File is Uploaded on Cloudinary", response.url);
        return response;
        
    }
    catch(error){
        // if not uploaded then remove file from server
        fs.unlinkSync(localFilePath); // remove the locallySaved temporory file
         return null;
    }
}

 export {uploadOnCloudinary}