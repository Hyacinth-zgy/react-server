const express = require('express');
const app = express();

app.get('/',function(req,res) {
    res.send(
      `
        <html>
          <head>
            <title>hello</title>
          </head>
          <body>
            <h1>first lesson</h1>
            <p>hello word</p>
          </body>
        </html>
      `  
    )
})

const server = app.listen(3000)