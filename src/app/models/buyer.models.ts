export class Buyer {
    constructor(
     public id: number, 
     public email: string,
     public username: string,
     public password: string,
     public civilite: string,
     public prenom: string,
     public nom: string,
     public telephone: string,
     public adresse1: string,
     public adresse2: string,
     public codepostal: string,
     public ville: string,
     ) {}
 }