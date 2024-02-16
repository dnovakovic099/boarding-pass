import {Pin} from "./Pin.ts";

export interface CheckInStep {
    stepOrder: number;
    image: string;
    description: string;
    pin: Pin[];
}
