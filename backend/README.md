# ArtPiece (Backend)

After you clone this git for back-end section you can use this command to install all dependencies.

```
  npm install
```

Before that you have to create .env file like these 

```
// You can get it from Cloundinary after you have signed in.
CLOUND_NAME = ''
API_KEY= ''
API_SECRET= ''

// Hugging Face API you can create account and then generate read API in setting.
HUG_API= ''
```

And you have to config database connection with mongoDB in ./components/img_gen.js to connect your local database.

And start runing with

```
  npm run dev
```
