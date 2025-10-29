export default ({env}) => ({
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          credentials: {
            accessKeyId: env('MINIO_ACCESS_KEY'),
            secretAccessKey: env('MINIO_SECRET_KEY'),
          },
          s3Options: {
            region: env('MINIO_REGION', 'us-east-1'),
            endpoint: env('MINIO_ENDPOINT'),
            forcePathStyle: true
          },
          params: {
            ACL: 'private',
            signedUrlExpires: env('MINIO_SIGNED_URL_EXPIRES', 15 * 60),
            Bucket: env('MINIO_BUCKET'),
          },
          actionOptions: {
            upload: {},
            uploadStream: {},
            delete: {}
          }
        }
      }
    }
  });