import { Statistic } from './statistic';

export class Pokemon {
    id: number;
    name : string ;
    type : "water" | "fire" | "grass";
    height: number;
    weight: number;
    ability: string;
    statistic: Statistic;
}
