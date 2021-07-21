# Firebase React Chakra UI Starter
A starter project for Firebase web.

## Installation
Clone the repository
```bash
git clone git@github.com:stephenbaidu/firebase-react-chakra-ui-starter.git
```
Rename the directory if you want
```bash
mv firebase-react-chakra-ui-starter my-firebase-app
```
Go to the directory (cd <your folder name> if renamed above)
```bash
cd firebase-react-chakra-ui-starter
```
Rename the git remote url to your remote url
```bash
git remote set-url origin git@github.com:<YOUR USERNAME>/<YOUR REPO NAME>.git
```
Install npm modules
```bash
npm install --prefix ./functions
yarn --cwd ./hosting install
```
Add `.env.local` with following content
```bash
REACT_APP_FIREBASE_APIKEY=<from firebase config>
REACT_APP_FIREBASE_AUTHDOMAIN=<from firebase config>
REACT_APP_FIREBASE_DATABASEURL=<from firebase config>
REACT_APP_FIREBASE_PROJECTID=<from firebase config>
REACT_APP_FIREBASE_STORAGEBUCKET=<from firebase config>
REACT_APP_FIREBASE_MESSAGINGSENDERID=<from firebase config>
REACT_APP_FIREBASE_APPID=<from firebase config>
REACT_APP_FIREBASE_MEASUREMENTID=<from firebase config>
```
To complete deployment to firebase via Github actions, add the following Secrets to your reposity on Github:
```bash
FIREBASE_TOKEN (get this via "firebase login:ci")
REACT_APP_FIREBASE_APIKEY
REACT_APP_FIREBASE_APPID
REACT_APP_FIREBASE_AUTHDOMAIN
REACT_APP_FIREBASE_MEASUREMENTID
REACT_APP_FIREBASE_MESSAGINGSENDERID
REACT_APP_FIREBASE_PROJECTID
REACT_APP_FIREBASE_STORAGEBUCKET
```
Finally, push to your remote repository
```bash
git push origin master
```

## Project Structure
- .github (contains github workflows) [Github Actions](https://github.com/features/actions)
- functions (contains your cloud functions)
- hosting (contains your react app)

Here is the tree:
```bash
├── .github
│   ├── workflows
│   │   ├── functions.yml
│   │   └── hosting.yml
├── functions
│   ├── package.json
│   ├── src
│   │   ├── common
│   │   │   ├── db.ts
│   │   │   └── types.ts
│   │   ├── fn
│   │   │   ├── auth
│   │   │   │   └── user_on_create_fn.ts
│   │   │   ├── common.ts
│   │   │   └── http
│   │   │       └── hello_world.ts
│   │   └── index.ts
│   ├── tsconfig.json
│   └── tslint.json
├── hosting
│   ├── README.md
│   ├── package.json
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src
│   │   ├── App.tsx
│   │   ├── auth
│   │   │   ├── AuthProvider.tsx
│   │   │   ├── authContext.ts
│   │   │   ├── createUserWithEmail.ts
│   │   │   ├── index.ts
│   │   │   ├── loginAnonymously.ts
│   │   │   ├── loginWithEmail.ts
│   │   │   ├── loginWithGoogle.ts
│   │   │   ├── signOut.ts
│   │   │   └── useSession.ts
│   │   ├── background.png
│   │   ├── components
│   │   │   ├── BrandingPane.tsx
│   │   │   ├── CenteredMiddleBox.tsx
│   │   │   ├── ColorModeSwitcher.tsx
│   │   │   ├── FullPageBox.tsx
│   │   │   ├── LoginPane.tsx
│   │   │   ├── Logo.tsx
│   │   │   ├── PasswordInput.tsx
│   │   │   ├── SignupPane.tsx
│   │   │   ├── TermsAndPrivacyText.tsx
│   │   │   ├── TextDivider.tsx
│   │   │   └── index.ts
│   │   ├── firebase
│   │   │   ├── config.js
│   │   │   └── index.ts
│   │   ├── hooks
│   │   │   ├── index.js
│   │   │   ├── useError.ts
│   │   │   └── useWindowDimensions.ts
│   │   ├── index.css
│   │   ├── index.tsx
│   │   ├── logo.svg
│   │   ├── react-app-env.d.ts
│   │   ├── reportWebVitals.ts
│   │   ├── routes
│   │   │   ├── Index.tsx
│   │   │   ├── auth
│   │   │   │   └── Index.tsx
│   │   │   ├── dashboard
│   │   │   │   └── Index.tsx
│   │   │   ├── login
│   │   │   │   └── Index.tsx
│   │   │   └── signup
│   │   │       └── Index.tsx
│   │   ├── setupTests.ts
│   │   ├── theme.ts
│   │   └── utils.ts
│   ├── tsconfig.json
│   └── yarn.lock
├── .firebaserc
├── .gitignore
├── firebase.json
├── firestore.indexes.json
├── firestore.rules
├── README.md
```
## Auth page
<img width="285" alt="Screen Shot 2021-07-21 at 3 03 21 AM" src="https://user-images.githubusercontent.com/2970017/126471765-58cc11bc-33c1-424a-b580-ba539d183526.png">
