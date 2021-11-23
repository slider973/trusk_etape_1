import {truskbot} from "./truskbot";

export function index(): Promise<any> {
    return truskbot();
}

index().catch(
    reason => {
        console.error(reason)
    }
);