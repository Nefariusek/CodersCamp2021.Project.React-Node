# CodersCamp2021.Project.React-Node

First project of CodersCamp2021. Basics of Web Development.

## Repository structure

Repository is divided into frontend and backend part.

- Root directory contains basic configuration of prettier, vscode and husky.
- React code and setup of client side is keept in `frontend` directory.
- Node code and backend part will located in `backend` directory.

## Preparation

1. Clone repository using `git clone {URL}` in the console.
2. Install node modules in `root` and `frontend` directory.

# Frontend - React

- React version > 17.0.0 (https://reactjs.org/docs/getting-started.html)
- React Router version > 6.0 (https://reactrouter.com/docs/en/v6)
- MaterialUI version > 5.0 (https://mui.com/getting-started/usage/)

## How to run app on your local device?

Prerequisites:
Node.js >=16 (https://nodejs.org/en/)

1. Navigate to the `frontend` directory using `cd frontend`.
2. Start development server with: `npm run dev` in the terminal.

By default server should be running here: localhost:3000

To stop local press `Ctrl+C`

## npm scripts

**following scripts works in `frontend` directory**

- `npm run dev`: starts vite development server;
- `npm run build`: builds for production;
- `npm run start`: starts preview of production build;
- `npm run test`: runs all tests;
- `npm run format`: formats all source files with prettier;

## Frontend structure

- index.jsx - entry point of React app;
- src/views - directory with views and containers used in the app;
- src/components - directory with components;
- src/model - directory with frontend model (eg. classes, maps);
- src/api - directory with code related to communication with APIs;
- src/common - directory with shared code (eg. formatters);
- src/constants - directory with project constants (eg. paths, labels);
- src/sass - directory with global scss styles;
- src/\_\_test\_\_ - directory with tests;

Components and Views should be placed in the sub-directory with all related files eg.:
`src/components/SuccessMessage/SuccessMessage.jsx`
`src/components/SuccessMessage/SuccessMessage.scss`

Keep tests in the same manner but inside \_\_test\_\_ directory eg.:
`src/__test__/api/dateFormatters.test.js`
`src/__test__/components/Button.test.js`

### Naming convention

- PascalCase - components, views, classes (eg. MainPage, Medication);
- camelCase - functions, variables, files not related to ones above (eg. changeMedicationFilter, isSelected);
- SCREAMING_SNAKE_CASE - constants (eg. PATH_TO_SETTINGS, ACCEPT_BUTTON_LABEL);

## Credits

Graphics designed by:

- <a href="https://dribbble.com/catalystvibes">Catalyst</a> on <a href="https://dribbble.com/shots/14078370-medicine">Dribble.com</a>

Photos by:

- <a href="https://www.pexels.com/photo/addiction-candy-face-portrait-5723610/">cottonbro</a> on <a href="https://www.pexels.com/photo/addiction-candy-face-portrait-5723610/">Pexels</a>
- <a href="https://unsplash.com/@daniloalvesd?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Danilo Alvesd</a> on <a href="https://unsplash.com/s/photos/pills?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- <a href="https://www.pexels.com/photo/20-mg-label-blister-pack-208512/">Pixabay</a> on <a href="https://www.pexels.com/photo/20-mg-label-blister-pack-208512/">Pexels</a>
- <a href="https://unsplash.com/@nci?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">National Cancer Institute</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- <a href="https://freerangestock.com/photographer/sapiduduk/4815">sapiduduk</a> on <a href="https://freerangestock.com/photographer/sapiduduk/4815">freerangestock.com</a>
- <a href="https://unsplash.com/@lilartsy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">lilartsy</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- <a href="https://unsplash.com/@laurynasm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Laurynas Mereckas</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- <a href="https://unsplash.com/@ksyfffka07?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ksenia Yakovleva</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- <a href="https://www.pexels.com/photo/anonymous-female-with-pills-in-hand-and-bottle-6798730/">Michelle</a> on <a href="https://www.pexels.com/photo/anonymous-female-with-pills-in-hand-and-bottle-6798730/">Pexels</a>
- <a href="https://unsplash.com/@charissek?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Charisse Kenion</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- <a href="https://www.pexels.com/photo/magnifier-placed-near-green-pills-7788340/">Ivan Babydov</a> on <a href="https://www.pexels.com/photo/magnifier-placed-near-green-pills-7788340/">Pexels</a>
- <a href="https://www.pexels.com/pl-pl/zdjecie/marketing-mezczyzna-kreatywny-biuro-5310566/">Malte Luk</a> on <a href="https://www.pexels.com/pl-pl/zdjecie/marketing-mezczyzna-kreatywny-biuro-5310566/">Pexels</a>
- <a href="https://unsplash.com/@lunarts?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Volodymyr Hryshchenko</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- <a href="https://unsplash.com/@martafilipczyk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Marta Filipczyk</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- <a href="https://www.kindpng.com/userpngs/18057/">Netherlands</a> on <a href="https://www.kindpng.com/imgv/ihhiiTi_register-now-clipart-png-transparent-png/">KindPNG</a>
