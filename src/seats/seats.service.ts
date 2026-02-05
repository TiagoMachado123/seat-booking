import { Injectable } from '@nestjs/common';

export interface Seat {
    seatNumber: string;
    status: 'available' | 'booked';
    userId?: string;
}

@Injectable()
export class SeatsService {
    private seats: Seat[] = [
        { seatNumber: 'A1', status: 'available' },
        { seatNumber: 'A2', status: 'available' },
        { seatNumber: 'A3', status: 'available' },
        { seatNumber: 'B1', status: 'available' },
        { seatNumber: 'B2', status: 'available' },
        { seatNumber: 'B3', status: 'available' },
    ];

    findAll() {
        return { seats: this.seats };
    }

    bookSeats(userId: string, seatNumbers: string[]) {
        const bookedSeats: string[] = [];
        const failedSeats: string[] = [];

        for (const seatNum of seatNumbers) {
            const seat = this.seats.find((s) => s.seatNumber === seatNum);

            if (seat && seat.status === 'available') {
                seat.status = 'booked';
                seat.userId = userId;
                bookedSeats.push(seatNum);
            } else {
                failedSeats.push(seatNum);
            }
        }


        return { bookedSeats, failedSeats };
    }

    getUserSeats(userId: string) {
        const userSeats = this.seats.filter((seat) => seat.userId === userId);

        return {
            userId: userId,
            bookedSeats: userSeats,
        };
    }
}