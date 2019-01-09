export class Announce {
    constructor(
        public id: number,
        public title: string,
        public seller: string,
        public image: string,
        public description: string,
        public note: string,
        public postDate: string,
        public price: number
    ) {}
}