import { APP_NAME } from '../../constants/labels';

const imageData = [
  {
    imagePathOrUrl: './slide-1.jpg',
    // https://www.pexels.com/photo/addiction-candy-face-portrait-5723610/
    // Photo by cottonbro from Pexels
    text: 'Are you sometimes overwhelmed by the amount of information about your medications?',
    get alt() {
      return this.text;
    },
  },
  {
    imagePathOrUrl: './slide-2.jpg',
    // https://unsplash.com/photos/Y14ONzYtxb4
    // Photo by <a href="https://unsplash.com/@daniloalvesd?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Danilo Alvesd</a> on <a href="https://unsplash.com/s/photos/pills?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    text: 'Do you forget to take your medication on time?',
    get alt() {
      return this.text;
    },
  },
  {
    imagePathOrUrl: './slide-3.jpg',
    // https://www.pexels.com/photo/20-mg-label-blister-pack-208512/
    // Photo by Pixabay. Free to use. No attribution required.
    text: "You don't know which medications have expired?",
    get alt() {
      return this.text;
    },
  },
  {
    imagePathOrUrl: './slide-4.jpg',
    // https://unsplash.com/photos/byGTytEGjBo
    // Photo by <a href="https://unsplash.com/@nci?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">National Cancer Institute</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    text: 'And when should you visit the pharmacy to buy new ones?',
    get alt() {
      return this.text;
    },
  },
  {
    imagePathOrUrl: './slide-5.jpg',
    // https://freerangestock.com/photos/138316/cure-pill-help-pill.html
    // Photo by <a href="https://freerangestock.com/photographer/sapiduduk/4815">sapiduduk</a> on <a href="https://freerangestock.com/photographer/sapiduduk/4815">freerangestock.com</a>
    text: 'You need a help?',
    get alt() {
      return this.text;
    },
  },
  {
    imagePathOrUrl: './slide-6.jpg',
    // https://unsplash.com/photos/ZsNO9MhKXPU
    // Photo by <a href="https://unsplash.com/@lilartsy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">lilartsy</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    text: 'Now smile :)',
    get alt() {
      return this.text;
    },
  },
  {
    imagePathOrUrl: './slide-7.jpg',
    text: `${APP_NAME} application will help you :)`,
    get alt() {
      return this.text;
    },
  },
  {
    imagePathOrUrl: './slide-8.jpg',
    // https://unsplash.com/photos/1TL8AoEDj_c
    // Photo by <a href="https://unsplash.com/@laurynasm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Laurynas Mereckas</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    text: 'Easily organize your medications',
    get alt() {
      return this.text;
    },
  },
  {
    imagePathOrUrl: './slide-9.jpg',
    // https://unsplash.com/photos/cfIkM5JgGgE
    // Photo by <a href="https://unsplash.com/@ksyfffka07?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ksenia Yakovleva</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    text: 'Check when you should take your medication',
    get alt() {
      return this.text;
    },
  },
  {
    imagePathOrUrl: './slide-10.jpg',
    // https://www.pexels.com/photo/anonymous-female-with-pills-in-hand-and-bottle-6798730/
    // Photo by Michelle Leman from Pexels
    text: 'Check the dosage of the drug',
    get alt() {
      return this.text;
    },
  },
  {
    imagePathOrUrl: './slide-11.jpg',
    // https://unsplash.com/photos/5vl1eKNp98s
    // Photo by <a href="https://unsplash.com/@charissek?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Charisse Kenion</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    text: 'Check the expiry date of your medications',
    get alt() {
      return this.text;
    },
  },

  {
    imagePathOrUrl: './slide-12.jpg',
    // https://www.pexels.com/photo/magnifier-placed-near-green-pills-7788340/
    // Photo by Ivan Babydov from Pexels
    text: 'Find knowledge about drugs in the lexicon',
    get alt() {
      return this.text;
    },
  },
  {
    imagePathOrUrl: './slide-13.jpg',
    // https://www.pexels.com/pl-pl/zdjecie/marketing-mezczyzna-kreatywny-biuro-5310566/
    // Zdjęcie autorstwa Malte Luk z Pexels
    text: 'And even more stuff you will find in this app',
    get alt() {
      return this.text;
    },
  },
  {
    imagePathOrUrl: './slide-14.jpg',
    // https://unsplash.com/photos/aXbfOFQ_juU
    // Photo by <a href="https://unsplash.com/@lunarts?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Volodymyr Hryshchenko</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    text: 'Information about all your medications in one place',
    get alt() {
      return this.text;
    },
  },
  {
    imagePathOrUrl: './slide-15.jpg',
    // https://unsplash.com/photos/mN5-yjVGBAI
    // Photo by <a href="https://unsplash.com/@martafilipczyk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Marta Filipczyk</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    text: `${APP_NAME} always with you supporting your health!`,
    get alt() {
      return this.text;
    },
  },
];

export default imageData;
