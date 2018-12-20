import axios from 'axios'
export const getToken = async () => {
    
    // return userToken.concat(fetchToken.data.access_token);
  };
// const qs = require("querystring");


// export const getToken = () => {

//   function authorizeURL(params) {
//     const authUrl = "https://app.smartsheet.com/b/authorize";
//     return `${authUrl}?${qs.stringify(params)}`;
//   }

//   const authorizationUri = authorizeURL({
//     response_type: "code",
//     client_id: "",
//     redirect_uri: "http://localhost:3000/callback",
//     scope: "CREATE_SHEETS WRITE_SHEETS"
//   });

//   // Initial page redirecting to Smartsheet
//   app.get("/auth", (req, res) => {
//     console.log(authorizationUri);
//     res.redirect(authorizationUri);
//   });
// };

// export default getToken;
