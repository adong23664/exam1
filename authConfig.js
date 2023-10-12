const msalConfig = {
  auth: {
    // 'Application (client) ID' of app registration in Azure portal - this value is a GUID
    clientId: "8e7a6053-0a4d-4c64-849e-612f52269cec",
    // Full directory URL, in the form of https://login.microsoftonline.com/<tenant-id>
    authority:
      "https://login.microsoftonline.com/5571c7d4-286b-47f6-9dd5-0aa688773c8e",
    // Full redirect URL, in form of http://localhost:3000
    redirectUri: "http://localhost:3000",
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case msal.LogLevel.Error:
            console.error(message);
            return;
          case msal.LogLevel.Info:
            console.info(message);
            return;
          case msal.LogLevel.Verbose:
            console.debug(message);
            return;
          case msal.LogLevel.Warning:
            console.warn(message);
            return;
        }
      },
    },
  },
};

const loginRequest = {
  scopes: ["User.Read"],
};

const tokenRequest = {
  scopes: ["User.Read", "Mail.Read"],
  forceRefresh: false, // Set this to "true" to skip a cached token and go to the server to get a new token
};
