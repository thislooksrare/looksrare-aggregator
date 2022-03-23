const dev = {
  apiHost: "http://localhost:3001",
};

const prod = {
  apiHost: "https://dao-api-ifjuivengq-uc.a.run.app",
};

const config = process.env.REACT_APP_STAGE === "production" ? prod : dev;

export const apiHost = config.apiHost;
export const cdnUrl = "https://cache.21dao.xyz";
export const rpcHost = "https://ssc-dao.genesysgo.net/";
