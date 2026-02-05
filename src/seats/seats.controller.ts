import { Controller, Get, Param, Post, Body, Query } from '@nestjs/common';
import { SeatsService } from './seats.service';
import { CreateBookingDto } from './dto/create-booking.dto';

@Controller('api/seats')
export class SeatsController {
    constructor(private readonly seatsService: SeatsService) { }

    @Get()
    getAll() {
        return this.seatsService.findAll();
    }

    @Post()
    bookSeat(@Body() body: CreateBookingDto) {
        const result = this.seatsService.bookSeats(body.userId, body.seatNumbers);

        if (result.bookedSeats.length === 0) {
            return {
                message: 'No seats were booked. All requested seats are unavailable.',
                failedSeats: result.failedSeats,
            };
        }

        if (result.failedSeats.length > 0) {
            return {
                message: 'Some seats could not be booked.',
                failedSeats: result.failedSeats,
                bookedSeats: result.bookedSeats,
            };
        }

        return {
            message: 'Seats successfully booked.',
            bookedSeats: result.bookedSeats,
        };
    }

    @Get()
    getSeats(@Query('userId') userId?: string) {

        if (userId) {
            return this.seatsService.getUserSeats(userId);
        }
        return this.seatsService.findAll();
    }
}
