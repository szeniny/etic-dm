process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
 const fs = require('fs');
 const path = require('path');
 const axios = require('axios');
 const { wrapper } = require('axios-cookiejar-support');
 const { CookieJar } = require('tough-cookie');

 // Create a new cookie jar
 const jar = new CookieJar();
 const client = wrapper(axios.create({ jar }));

 async function callEndpoints() {
   try {
     // Call the first endpoint
     const response1 = await client.get('https://devgreen.aistudio.consulting/api/auth/csrf');
     console.log('Response from endpoint 1:', response1.data);

   } catch (error) {
     console.error('Error calling endpoints:', error);
   }
 }
 callEndpoints();