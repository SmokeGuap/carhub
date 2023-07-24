# CarHub

Website to search a car

## Screenshots
<img src="https://github.com/SmokeGuap/carhub/assets/87711568/7363418e-9ead-4a69-b0ed-0e2d8a32caa7" width="500">
<img src="https://github.com/SmokeGuap/carhub/assets/87711568/16e22871-20c2-4efd-9953-77d2612bdff1" width="500">
<img src="https://github.com/SmokeGuap/carhub/assets/87711568/844cc3df-dec7-4b61-b9c4-f310967c5a17" width="500">

P.S. At the moment API from `cdn.imagin.studio` doesn't work for my country, and there are no car pictures in the screenshots.

## Used technologies

- Next
- Typescript
- Tailwind CSS

## How to run

You have to  write X-RapidAPI-Key, X-RapidAPI-Host to `utils/index.ts` file, like:
`  const headers = {
    'X-RapidAPI-Key': '5708121a2amshfe2a866c100a4efp1cf749jsnde76b00f2dab',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };
  `


In the project directory, you can run: `npm run dev`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

