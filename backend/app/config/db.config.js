const user = encodeURIComponent(process.env.MONGO_USER || "");
const pass = encodeURIComponent(process.env.MONGO_PASS || "");
const host = process.env.MONGO_HOST || "mongodb";
const port = process.env.MONGO_PORT || "27017";
const db   = process.env.MONGO_DB || "crud_db";

module.exports = {
  url: `mongodb://${user}:${pass}@${host}:${port}/${db}?authSource=admin`
};