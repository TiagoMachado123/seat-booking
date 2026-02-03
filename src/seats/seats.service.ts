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
    { seatNumber: 'B1', status: 'available' },
    { seatNumber: 'B2', status: 'available' },
    { seatNumber: 'C1', status: 'available' },
    { seatNumber: 'C2', status: 'available' },
    { seatNumber: 'D1', status: 'available' },
    { seatNumber: 'D2', status: 'available' },
    { seatNumber: 'E1', status: 'available' },
    { seatNumber: 'E2', status: 'available' },
  ];

  findAll() {
    return { seats: this.seats };
  }
}