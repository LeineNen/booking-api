
import { Router } from 'express'
import { getAllBookings, getOneBooking, postBooking, updateBooking, deleteBooking } from '../controllers/booking-controllers.js'

export const bookingRouter = Router()

bookingRouter.get('/bookings', getAllBookings)

bookingRouter.get('/bookings/:id', getOneBooking)




// Use Routes
bookingRouter.post('/booking', postBooking);

bookingRouter.patch('/booking/:id', updateBooking);

bookingRouter.delete('/booking/:id', deleteBooking)





