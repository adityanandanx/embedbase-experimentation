import "server-only";
import axios from "axios";

const parserInstance = axios.create({
  baseURL: process.env.PARSER_BACKEND_URL,
});

export default parserInstance;
