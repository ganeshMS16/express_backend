import { config as conf} from "dotenv";
conf()

const _config={
    port:process.env.PORT,
    mongoDbConnection:process.env.MONGO_CONNECTION_URL,
    hashPass:process.env.HASH_PASSWORD
}

export const config=Object.freeze(_config)