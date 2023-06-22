import "server-only";
import { createClient } from "embedbase-js";

// you can find the api key at https://embedbase.xyz
const apiKey = process.env.EMBEDBASE_API_KEY!;
// this is using the hosted instance
const url = process.env.EMBEDBASE_URL!;
console.log(apiKey, url);

const embedbase = createClient(url, apiKey);

export default embedbase;
