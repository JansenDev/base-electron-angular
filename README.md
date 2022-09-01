# ElectronAngular

## development

`npm run start:a` + `npm run dev`

`npm run start:a` Open `http://localhost:4200` to view angular changes in browser.  
`npm run dev` Open electron in mode development

## production

`npm run start`

    "start:a": "ng serve -o ",
    "build": "ng build --base-href=./",
    "watch": "ng build --watch --configuration development",
    "test": "ng test",
    "dev": "set DEBUG=true && electron .",
    "start": "npm run build && electron ."
