import { Injectable } from "@nestjs/common";

@Injectable()
export class SeatsService {
    private seats = ['A1', 'A2', 'B1', "B2", "C1", "C2", "D1", "D2", "E1", "E2"];

    findAll() {
        return this.seats;
    }
}
