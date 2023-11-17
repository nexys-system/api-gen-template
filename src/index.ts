import { Deploy, Types as T } from "@nexys/api-gen";

const token = "";

const env = T.Env.dev;

const info: T.Info = {
  title: "Name API ",
  description: "xxx API specifications",
  version: "1.0",
  env
};

// this is to generate public and private key for the JWT
// note that everytime the app is deployed the public and private keys change, to avoid this do not regenerate everytime
const jwtSecret = "default"; // TokenUtils.generateJWTAsync();
//console.log(JSON.stringify(jwtSecret));

// SSO Authentications
const oAuthParamsArray: T.OAuthParams[] = [];

// hello world endpoint
const helloWorldBlock: T.BlockWrap = {
  codeSnippet: { ts: `() => ({hello:'hello world'})` },
};

const helloWorld: T.Endpoint = {
  path: "/a",
  method: "GET",
  blocks: [helloWorldBlock],
  tag: "Hello",
};
// helo world endpoint

const endpoints: T.Endpoint[] = [helloWorld];

// this is only relevant is the wasm has changed AND if there is a wasm at all!
Deploy.sendBackendAssets("./dist/app", token).then(console.log);

// do not touch the code below this line
Deploy.deployApi(
  { info, jwtSecret, endpoints, oAuthParamsArray },
  token
).then(console.log);
