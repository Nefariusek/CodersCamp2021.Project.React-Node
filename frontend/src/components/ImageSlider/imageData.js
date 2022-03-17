import { APP_NAME } from '../../constants/labels';

const SLIDE_1_PATH = './slide-1.jpg';
const SLIDE_1_TEXT = `Are you overwhelmed by your medications?\n${APP_NAME} application will help you :)`;

const SLIDE_2_PATH = './slide-2.jpg';
const SLIDE_2_TEXT = 'Easily organize your medications';

const SLIDE_3_PATH = './slide-3.jpg';
const SLIDE_3_TEXT = 'Look when you should take your medication';

const SLIDE_4_PATH = './slide-4.jpg';
const SLIDE_4_TEXT = 'Check the dosage and other details of your medication';

const SLIDE_5_PATH = './slide-5.jpg';
const SLIDE_5_TEXT = 'Check the expiry date of your medications';

const SLIDE_6_PATH = './slide-6.jpg';
const SLIDE_6_TEXT = `${APP_NAME} always with you supporting your health!\nSo register now :)`;

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
];

export default imageData;
