package com.cinema_website.backend.util;

import com.cinema_website.backend.dto.OrderDTO;
import com.cinema_website.backend.dto.ShowtimeDTO;
import com.cinema_website.backend.dto.TicketDTO;
import com.cinema_website.backend.model.Ticket;
import com.cinema_website.backend.service.OrderService;
import com.cinema_website.backend.service.ShowtimeService;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

public class TicketUtils {

    public static TicketDTO toTicketDTO(Ticket ticket, OrderService orderService, ShowtimeService showtimeService) {
        TicketDTO ticketDTO = new TicketDTO();
        OrderDTO orderDTO = orderService.getOrderByOrderNumber(ticket.getReferenceNo());
        ShowtimeDTO showtimeDTO = showtimeService.getShowtime(orderDTO.getShowtimeId());

        ticketDTO.setTicketId(ticket.getTicketId());
        ticketDTO.setOrder(orderDTO);
        ticketDTO.setHallName(ticket.getHallName());
        ticketDTO.setMovieTitle(ticket.getMovieTitle());
        ticketDTO.setCinemaName(ticket.getCinemaName());
        ticketDTO.setShowDate(showtimeDTO.getShowDate());
        ticketDTO.setCreatedAt(ticket.getCreatedAt().toString()); // Assuming createdAt is a String
        ticketDTO.setUpdatedAt(ticket.getUpdatedAt().toString()); // Assuming updatedAt is a String
        return ticketDTO;
    }


    public static Ticket toTicket(TicketDTO ticketDTO, OrderService orderService) {
        Ticket ticket = new Ticket();
        ticket.setTicketId(ticketDTO.getTicketId());
        ticket.setReferenceNo(ticketDTO.getOrder().getOrderNumber());
        ticket.setHallName(ticketDTO.getHallName());
        ticket.setMovieTitle(ticketDTO.getMovieTitle());
        ticket.setCinemaName(ticketDTO.getCinemaName());
        try {
            ticket.setCreatedAt(Timestamp.valueOf(ticketDTO.getCreatedAt())); // Assuming createdAt is a String
            ticket.setUpdatedAt(Timestamp.valueOf(ticketDTO.getUpdatedAt())); // Assuming updatedAt is a String
        } catch (Exception e) {
            e.printStackTrace(); // Handle the exception properly in real scenarios
        }
        return ticket;
    }

}
