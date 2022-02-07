import { APP_NAME } from '../../constants/labels';

const SLIDE_1_PATH = './slide-1.jpg';
// https://www.pexels.com/photo/addiction-candy-face-portrait-5723610/
// Photo by cottonbro from Pexels
const SLIDE_1_TEXT = 'Are you sometimes overwhelmed by the amount of information about your medications?';

const SLIDE_2_PATH = './slide-2.jpg';
// https://unsplash.com/photos/Y14ONzYtxb4
// Photo by <a href="https://unsplash.com/@daniloalvesd?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Danilo Alvesd</a> on <a href="https://unsplash.com/s/photos/pills?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
const SLIDE_2_TEXT = 'Do you forget to take your medication on time?';

const SLIDE_3_PATH = './slide-3.jpg';
// https://www.pexels.com/photo/20-mg-label-blister-pack-208512/
// Photo by Pixabay. Free to use. No attribution required.
const SLIDE_3_TEXT = "You don't know which medications have expired?";

const SLIDE_4_PATH = './slide-4.jpg';
// https://unsplash.com/photos/byGTytEGjBo
// Photo by <a href="https://unsplash.com/@nci?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">National Cancer Institute</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
const SLIDE_4_TEXT = 'And when should you visit the pharmacy to buy new ones?';

const SLIDE_5_PATH = './slide-5.jpg';
// https://freerangestock.com/photos/138316/cure-pill-help-pill.html
// Photo by <a href="https://freerangestock.com/photographer/sapiduduk/4815">sapiduduk</a> on <a href="https://freerangestock.com/photographer/sapiduduk/4815">freerangestock.com</a>
const SLIDE_5_TEXT = 'You need a help?';

const SLIDE_6_PATH = './slide-6.jpg';
// https://unsplash.com/photos/ZsNO9MhKXPU
// Photo by <a href="https://unsplash.com/@lilartsy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">lilartsy</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
const SLIDE_6_TEXT = 'Now smile :)';

const SLIDE_7_PATH = './slide-7.jpg';
const SLIDE_7_TEXT = `${APP_NAME} application will help you :)`;

const SLIDE_8_PATH = './slide-8.jpg';
// https://unsplash.com/photos/1TL8AoEDj_c
// Photo by <a href="https://unsplash.com/@laurynasm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Laurynas Mereckas</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
const SLIDE_8_TEXT = 'Easily organize your medications';

const SLIDE_9_PATH = './slide-9.jpg';
// https://unsplash.com/photos/cfIkM5JgGgE
// Photo by <a href="https://unsplash.com/@ksyfffka07?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ksenia Yakovleva</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
const SLIDE_9_TEXT = 'Check when you should take your medication';

const SLIDE_10_PATH = './slide-10.jpg';
// https://www.pexels.com/photo/anonymous-female-with-pills-in-hand-and-bottle-6798730/
// Photo by Michelle Leman from Pexels
const SLIDE_10_TEXT = 'Check the dosage of the drug';

const SLIDE_11_PATH = './slide-11.jpg';
// https://unsplash.com/photos/5vl1eKNp98s
// Photo by <a href="https://unsplash.com/@charissek?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Charisse Kenion</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
const SLIDE_11_TEXT = 'Check the expiry date of your medications';

const SLIDE_12_PATH = './slide-12.jpg';
// https://www.pexels.com/photo/magnifier-placed-near-green-pills-7788340/
// Photo by Ivan Babydov from Pexels
const SLIDE_12_TEXT = 'Find knowledge about drugs in the lexicon';

const SLIDE_13_PATH = './slide-13.jpg';
// https://www.pexels.com/pl-pl/zdjecie/marketing-mezczyzna-kreatywny-biuro-5310566/
// Zdjęcie autorstwa Malte Luk z Pexels
const SLIDE_13_TEXT = 'And even more stuff you will find in this app';

const SLIDE_14_PATH = './slide-14.jpg';
// https://unsplash.com/photos/aXbfOFQ_juU
// Photo by <a href="https://unsplash.com/@lunarts?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Volodymyr Hryshchenko</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
const SLIDE_14_TEXT = 'Information about all your medications in one place';

const SLIDE_15_PATH = './slide-15.jpg';
// https://unsplash.com/photos/mN5-yjVGBAI
// Photo by <a href="https://unsplash.com/@martafilipczyk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Marta Filipczyk</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
const SLIDE_15_TEXT = `${APP_NAME} always with you supporting your health!`;

const imageData = [
  {
    imagePathOrUrl: SLIDE_1_PATH,
    text: SLIDE_1_TEXT,
    get alt() {
      return this.text;
    },
  },
  {
    imagePathOrUrl: SLIDE_2_PATH,
    text: SLIDE_2_TEXT,
    get alt() {
      return this.text;
    },
  },
  {
    imagePathOrUrl: SLIDE_3_PATH,
    text: SLIDE_3_TEXT,
    get alt() {
      return this.text;
    },
  },
  {
    imagePathOrUrl: SLIDE_4_PATH,
    text: SLIDE_4_TEXT,
    get alt() {
      return this.text;
    },
  },
  {
    imagePathOrUrl: SLIDE_5_PATH,
    text: SLIDE_5_TEXT,
    get alt() {
      return this.text;
    },
  },
  {
    imagePathOrUrl: SLIDE_6_PATH,
    text: SLIDE_6_TEXT,
    get alt() {
      return this.text;
    },
  },
  {
    imagePathOrUrl: SLIDE_7_PATH,
    text: SLIDE_7_TEXT,
    get alt() {
      return this.text;
    },
  },
  {
    imagePathOrUrl: SLIDE_8_PATH,
    text: SLIDE_8_TEXT,
    get alt() {
      return this.text;
    },
  },
  {
    imagePathOrUrl: SLIDE_9_PATH,
    text: SLIDE_9_TEXT,
    get alt() {
      return this.text;
    },
  },
  {
    imagePathOrUrl: SLIDE_10_PATH,
    text: SLIDE_10_TEXT,
    get alt() {
      return this.text;
    },
  },
  {
    imagePathOrUrl: SLIDE_11_PATH,
    text: SLIDE_11_TEXT,
    get alt() {
      return this.text;
    },
  },
  {
    imagePathOrUrl: SLIDE_12_PATH,
    text: SLIDE_12_TEXT,
    get alt() {
      return this.text;
    },
  },
  {
    imagePathOrUrl: SLIDE_13_PATH,
    text: SLIDE_13_TEXT,
    get alt() {
      return this.text;
    },
  },
  {
    imagePathOrUrl: SLIDE_14_PATH,
    text: SLIDE_14_TEXT,
    get alt() {
      return this.text;
    },
  },
  {
    imagePathOrUrl: SLIDE_15_PATH,
    text: SLIDE_15_TEXT,
    get alt() {
      return this.text;
    },
  },
];

export default imageData;