# Import Users to Budibase

This script will
1. Take a list of email addresses from a file - seprated by NEW LINE.
2. Create a new user in budibase.
3. Give the new user access to a given app.

The user will not get an invite email. If you have SSO configured, they will be able use it immediately.

## Setup

1. Install NodeJS
2. Clone this repository: `git clone git@github.com:Budibase/import-users.git`
3. `cd import-users`
4. `npm install`

## Configuration

You will need
1. A valid cookie from a Budibase administrator login
2. An appId that you want users to have access to
3. A list of email addresses
4. Your budibase URL

### Getting your cookie

1. Login to Budibase with your administrator account
2. Open your browser's dev tools, click on the network tab
3. Navigate to the `Users` section
4. Find the request to `users`
5. In `Headers`, find your `Cookie` header and copy the value
6. Paste the value into the `config.json` file in this project (inside `"cookie": "<your cookie>"`)

### Getting your AppId

1. Open Budibase
2. Open your browsers dev tools, click on the network tab.
3. Find the request to `/api/apps`
4. Click on the `Response` tab
5. Find your app inside the JSON
6. Copy the value for `appId`
7. Paste the value into the `config.json` file in this project (inside `"appId": "<your App Id>"`)

### Entering your email addresses

1. Inside this project, is a file `./data/users.txt`
2. Copy all email addresses into here, seperated by a new line e.g.

michael@acme.com
jennifer@acme.com
oliver@acme.com

3. Save the file

### Add your Budibase URL to config

Find the `budibaseUrl` field, inside `config.json`. Paste your budibase base URL in.

It should look like

https://your-domain.com
or
http://123.1.1.123:10000


## Running the import

From the root of this project, run

`node index.js`
