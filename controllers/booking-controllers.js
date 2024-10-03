
import { booking } from "../models/booking-model.js"


export const getAllBookings = (req, res, next) => {
    try {
        res.status(200).json('These are all bookings')
    } catch (error) {next(error);
        
    }
}

export const getOneBooking = (req, res, next) => {
    try {
        res.status(200).json('This is one booking')
    } catch (error) {next(error);
        
    }
}



export const postBooking = async (req, res, next) => {
    try {
        const newBooking = new booking()
        const bookings = await newBooking.save(req.body)
    
        // const booking = newBooking
    
        res.status(201).json(bookings)
    } catch (error) {next(error);
        
    }
}


export const updateBooking = (req, res) => {
   try {
     res.status(200).json('Booking has been updated')
   } catch (error) {next(error);
    
   }
}

export const deleteBooking = (req, res) => {
    try {
        res.status(200).json('Booking has been deleted')
    } catch (error) {next(error);
        
    }
}
