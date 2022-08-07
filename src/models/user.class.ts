export class User {
  firtstName: string;
  lastName: string;
  birthDate: number;
  street: string;
  zipCode: number;
  city: string;

  constructor(obj?: any) {
    this.firtstName = obj ? obj.firtstName : '';
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
}
