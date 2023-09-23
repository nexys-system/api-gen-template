import { Deploy, Types as T } from "@nexys/api-gen";

const token = "";

const info: T.Info = {
  title: "Name API ",
  description: "xxx API specifications",
  version: "1.0",
};

// this is to generate public and private key for the JWT
// note that everytime the app is deployed the public and private keys change, to avoid this do not regenerate everytime
const jwtSecret = "default"; // TokenUtils.generateJWTAsync();
//console.log(JSON.stringify(jwtSecret));

// SSO Authentications
const oAuthParamsArray: T.OAuthParams[] = [];

const endpoints: T.Endpoint[] = [];

// this is only relevant is the wasm has changed AND if there is a wasm at all!
Deploy.sendBackendAssets("./dist/app", token).then(console.log);

// do not touch the code below this line
Deploy.deployApi(
  { info, token, jwtSecret, endpoints, oAuthParamsArray },
  token
).then(console.log);
