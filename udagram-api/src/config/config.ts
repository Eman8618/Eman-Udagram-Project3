import * as dotenv from "dotenv";
dotenv.config();

// ENV variables 
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

export const config = {
  username: `${process.env.POSTGRES_USERNAME}`,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  dbport:Number(process.env.POSTGRES_PORT),
  port: Number(process.env.PORT),
  POSTGRES_HOST: process.env.POSTGRES_HOST,
  dialect: "postgres",
  AWS_DEFAULT_REGION: process.env.AWS_DEFAULT_REGION,
  aws_profile: process.env.AWS_PROFILE,
  aws_media_bucket: process.env.AWS_BUCKET,
  AWS_ACCESS_KEY_ID:process.env.AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY:process.env.AWS_SECRET_ACCESS_KEY,
  url: process.env.URL,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
