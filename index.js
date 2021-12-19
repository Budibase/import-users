const config = require("./config.json");
const fetch = require("node-fetch");
const fs = require("fs-extra");
const {EOL} = require('os');

const headers = {
  "Cookie": config.cookie,
  "content-type": "application/json"
};

async function run() {

  const file = await fs.readFile(config.importCsv, "utf8");

  for (let email of file.split(EOL)) {
    if(email && email.length)
      await createUser(email);
  }
}

async function createUser(email) {

  const createBody = {
    email,
    forceResetPassword: true,
    password: "rturh25a8s",
    roles: {}
  };
  createBody.roles[config.appId] = config.defaultRole

  const createOpts = {
    method: "POST",
    body: JSON.stringify(createBody),
    headers
  }

  const userResult = await fetch(`${config.budibaseUrl}/api/global/users`, createOpts);


  const userResponse = await userResult.text();
  if (userResult.status === 200) {
    console.log(`user created: ${email}`);
  } else {
    console.log(`user creation failed: ${email}`);
  }
}

run();
