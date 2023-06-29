// deploy setup
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    // database for development
    return {
      env: {
        mongodb_username: "admin",
        mongodb_password: "Admin123",
        mongodb_clustername: "atlascluster",
        mongodb_database: "nextjs-blog-dev",
      },
    };
  }

  // database for production
  return {
    env: {
      mongodb_username: "admin",
      mongodb_password: "Admin123",
      mongodb_clustername: "atlascluster",
      mongodb_database: "nextjs-blog",
    },
  };
};
