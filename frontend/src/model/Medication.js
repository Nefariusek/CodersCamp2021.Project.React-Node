const MILISEC_TO_DAY = 1000 * 60 * 60 * 24;

export default class Medication {
  constructor(name, expirationDate, type, dosage, quantity, description, imgSource, daytime) {
    this.name = name;
    this.expirationDate = expirationDate;
    this.description = description;
    this.category = type;
    this.dosage = dosage;
    this.quantity = quantity;
    this.img = imgSource;
    this.daytime = daytime;
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
