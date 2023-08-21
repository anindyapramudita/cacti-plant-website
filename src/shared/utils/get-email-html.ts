export const getEmailHTML = (name: string, token: string) => {
  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Reset Password</title>
      <style type="text/css">
          .wrapper {
              padding: 0 0 10px 0;
              text-align: center;
              font-family: Arial, Helvetica, sans-serif;
          }
  
          .link-button {
              cursor: pointer;
              text-decoration: none;
              color: white;
              font-size: 12px;
              background-color: #123132;
              padding: 1em 2em;
              cursor: pointer;
          }
  
          .image {
              border-radius: 50%;
              width: 120px;
              height: 120px;
              object-fit: cover;
              display: block;
              margin-left: auto;
              margin-right: auto;
          }
  
          .heading {
              font-size: 20px;
              margin: 10px 0 15px 0;
              font-weight: 500;
          }
  
          .subtitle {
              color: #1B2224;
              font-size: 12px;
              font-weight: 100;
              margin: 0 0 20px 0;
          }

      </style>
  </head>
  
  <body>
      <div class="wrapper">
          <img src="https://i.pinimg.com/564x/23/bc/50/23bc509901d4c6d1140f8325873c622d.jpg" alt="email-image" class="image"/>
          <h1 class="heading">We got you, ${name}!</h1>
          <h3 class="subtitle">Click the button below to reset you password :</h3>
          <a href="http://localhost:3000/reset-password/${token}" class="link-button" style="color:white;">
            Reset Password
          </a>
      </div>
  </body>
  
  </html>`;
};
