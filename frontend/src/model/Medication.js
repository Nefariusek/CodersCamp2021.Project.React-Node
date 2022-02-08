const MILISEC_TO_DAY = 1000 * 60 * 60 * 24;

export default class Medication {
  constructor(name, expirationDate, category, dosage, quantity, description, imgSource) {
    this.name = name;
    this.expirationDate = expirationDate;
    this.description = description;
    this.category = category;
    this.dosage = dosage;
    this.quantity = quantity;
    this.img = imgSource;
  }

  getExpirationDate() {
    let day = this.expirationDate.getDate();
    day = day > 9 ? day : `0${day}`;
    let month = this.expirationDate.getMonth() + 1;
    month = month > 9 ? month : `0${month}`;
    return `${day}.${month}.${this.expirationDate.getFullYear()}`;
  }

  daysUntilExpiration() {
    const today = new Date();
    return Math.ceil((this.expirationDate.getTime() - today.getTime()) / MILISEC_TO_DAY);
  }
}
