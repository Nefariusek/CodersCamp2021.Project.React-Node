const MILISEC_TO_DAY = 1000 * 60 * 60 * 24;

export default class Medication {
  constructor(id, name, expirationDate, type, dosage, quantity, description, imgSource, daytime, addDate) {
    this.id = id;
    this.name = name;
    this.expirationDate = expirationDate;
    this.description = description;
    this.type = type;
    this.dosage = dosage;
    this.quantity = quantity;
    this.img = imgSource;
    this.daytime = daytime;
    this.addDate = addDate;
  }

  getExpirationDate() {
    let day = this.expirationDate.getDate();
    let month = this.expirationDate.getMonth() + 1;

    day = day > 9 ? day : `0${day}`;
    month = month > 9 ? month : `0${month}`;

    return `${day}.${month}.${this.expirationDate.getFullYear()}`;
  }

  daysUntilExpiration() {
    const today = new Date();
    return Math.ceil((this.expirationDate.getTime() - today.getTime()) / MILISEC_TO_DAY);
  }
}
