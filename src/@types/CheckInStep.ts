import { Pin } from "./Pin.ts";

export interface CheckInStep {
    stepOrder: number;
    image: string;
    title: string;
    description: string;
    pin: Pin[];
}
