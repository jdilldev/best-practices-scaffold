# Electron App/React App Scaffold
https://jdilldev.github.io/best-practices-scaffold/

This is boilerplate for a react app that can also be used as an electron application. I am particularaly pleased with the way I implemented hot reload functionality, as I am a champion for the developer experience (DX). (I followed this tutotiral: https://shivekkhurana.medium.com/a-gluten-free-electron-react-setup-ft-live-reload-f6e5bbbd964)

I wanted this to be a container of best practices, but without much content it was kind of difficult to implement client and server side rendering because I hardly have any content to chunk/lazy load.

I will continue to add different features to it as an exercise, but it is pretty bare.

## To modify and run locally
Clone the repo, and `yarn install`
Each branch has only the dependencies it needs, so if you download routes, then switch to CSR-optimization, you will likely need to do a `yarn install` the first time in order to download the necessary packages.

## Features
- react frontend
- electron app
- fully responsive for mobile, tablet, and desktop viewports
- animations for menu
- authentication/login (dummy credentials)
- routing
- lazy loading

## ToDos
- server side rendering (with loadable components+node, next, or deno)
- add data
- make some API calls
- add redux store
- optimize performance
- try brotli out

![Screen Shot 2022-01-14 at 9 36 13 PM](https://user-images.githubusercontent.com/92639901/149605851-aeeed0a4-f6fb-4786-912e-b02f48baec46.png)

