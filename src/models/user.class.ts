export class User {
  firtstName: string;
  lastName: string;
  birthDate: number;
  street: string;
  zipCode: number;
  city: string;
  email: string;

  constructor(obj?: any) {
    this.firtstName = obj ? obj.firtstName : '';
    this.email = obj ? obj.email : '';
    this.lastName = obj ? obj.lastName : '';
    this.birthDate = obj ? obj.birthDate : '';
    this.street = obj ? obj.street : '';
    this.zipCode = obj ? obj.zipCode : '';
    this.city = obj ? obj.city : '';

    //Erklärung schnell Schreibweise
    /* obj ? obj.city : ''; Die Schreibweise ist eine schnelle If/Else abfrage.
        //Es wird gefragt ob das obj existiert wenn ja dann kommt obj.city rein und wenn nicht dann kommt der leere '' rein.
    */
  }
  public toJSON() {
    return {
      firtstName: this.firtstName,
      lastName: this.lastName,
      birthDate: this.birthDate,
      street: this.street,
      zipCode: this.zipCode,
      city: this.city,
      email: this.email,
    };
  }
}
