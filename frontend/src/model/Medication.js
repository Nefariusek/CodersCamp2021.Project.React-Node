const MILISEC_TO_DAY = 1000 * 60 * 60 * 24;

export default class Medication {
  constructor(name, expirationDate, description, category, dosage) {
    this.name = name;
    this.expirationDate = expirationDate;
    this.description = description;
    this.category = category;
    this.dosage = dosage;
  }

  daysUntilExpiration() {
    const today = new Date();
    return Math.ceil((this.expirationDate.getTime() - today.getTime()) / MILISEC_TO_DAY);
  }
}
