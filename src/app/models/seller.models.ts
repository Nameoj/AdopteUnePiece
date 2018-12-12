export class Seller {
    constructor(
    public id: number, 
    public email: string,
    public password: string,
    public raisonSociale: string,
    public siret: string,
    public siren: string,
    public telephone: string,
    public adresse: string,
    public codepostal: string,
    public ville: string,
    public nomgerant: string,
    public prenomgerant: string,
    public telgerant: string
    ) {}
}