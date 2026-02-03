import { Controller, Get, Param, Post, Body } from '@nestjs/common';
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
    bookSeat(@Body() bookingData: CreateBookingDto) {
        return `O user ${bookingData.userId} quer reservar: ${bookingData.seatNumbers}`;
    }
    // @Get()
    // getSayHello(): string {
    //     return 'Boas';
    // }

    // @Get(':id')
    // getSpecificSeat(@Param('id') seatNumber:string ){
    //     return `Seat number: ${seatNumber}`;
    // }
}
