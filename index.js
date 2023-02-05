const express = require('express');
const app = express();
const querystring = require('querystring');
const axios = require('axios');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

console.log(process.env.REDIRECT_URI);

app.get("/login", (req, res) => {
    const queryParams = querystring.stringify({
        client_id: process.env.CLIENT_ID,
        response_type: "code",
        redirect_uri: process.env.REDIRECT_URI,
        scope: "user-read-private user-read-email",
    });

    res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`);
});

app.get('/callback', (req, res) => {
    const code = req.query.code || null;
  
    axios({
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      data: querystring.stringify({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: REDIRECT_URI
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
      },
    })
      .then(response => {
        if (response.status === 200) {
            const { access_token, refresh_token } = response.data;

            const queryParams = querystring.stringify({
                access_token,
                refresh_token,
            });

            res.redirect(`http://localhost:5173/?${queryParams}`);
            
        } else {
          res.send(response);
        }
      })
      .catch(error => {
        res.send(error);
      });
  });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});