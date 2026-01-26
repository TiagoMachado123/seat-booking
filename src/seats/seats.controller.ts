import { Controller, Get, Param } from '@nestjs/common';

@Controller('api/seats')
export class SeatsController {

    @Get()
    getSayHello(): string {
        return 'Boas';
    }

    @Get(':id')
    getSpecificSeat(@Param('id') seatNumber:string ){
        return `Seat number: ${seatNumber}`;
    }
}
