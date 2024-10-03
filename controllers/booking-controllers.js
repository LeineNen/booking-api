
import { booking } from "../models/booking-model.js"


export const getAllBookings = (req, res) => {
    
        res.status(200).json('These are all bookings')
    }
        
    

export const getOneBooking = (req, res) => {

        res.status(200).json('This is one booking')
    } 
        



export const postBooking = async (req, res) => {
    
        const newBooking = new booking(req.body)
        const bookings = await newBooking.save()
    
        // const booking = newBooking
    
        res.status(201).json(bookings)
    } 


export const updateBooking = (req, res) => {

     res.status(200).json('Booking has been updated')
   } 


export const deleteBooking = (req, res) => {

        res.status(200).json('Booking has been deleted')
    } 
        
    

