

const Env = {
    PORT: process.env.PORT || 3000,
    MONGODB_URI: process.env.MONDODB_URI || 'mongodb://localhost:27017',
    CORS_ORIGIN: process.env.CORS_ORIGIN,
    JWT_SECRET: process.env.JWT_SECRET,
};

export default Env;
