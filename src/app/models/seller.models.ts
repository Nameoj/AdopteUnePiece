export class Seller {
    constructor(
     public id: number,
     public email: string,
     public password: string,
     public raisonSociale: string,
     public siretNumber: string,
     public sirenNumber: string,
     public telephone: string,
     public adresse: string,
     public codepostal: string,
     public ville: string,
     public managingDirectorName: string,
     public managingDirectorSurname: string,
     public managingDirectorPhone: string,
    ) {}
}