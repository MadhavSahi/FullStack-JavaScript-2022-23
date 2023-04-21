import s3 from "../config/s3.config.js";

//in aws S3...everything is an object...every file _ image,video, are objects..it will stored as path
export const s3FileUpload=async({bucketname,key,body,contentType})=>{
    return await s3.upload({
        Bucket:bucketname,
        Key:key,
        Body:body,
        ContentType:contentType,
    }).promise()
};;

//to delete file path.
export const s3FileDelete=async({bucketname,key,body,contentType})=>{
    return await s3.deleteObject({
        Bucket:bucketname,
        Key:key,
    }).promise()
};
