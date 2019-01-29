export class Announce {
    constructor(
        public id: number,
        public seller: string,
        public image: string,
        public description: string,
        public note: number,
        public postDate,
        public pieceName: string,
        public model: string,
        public brand: string,
        public cylinder: string,
        public year: string,
        public price: string,
        public charge: number,
    ) { }
}
