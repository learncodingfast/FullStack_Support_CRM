import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api/tickets",
});

export function getTickets(params) {
  return API.get("", { params });
}

export function getTicket(ticketId) {
  return API.get(`/${ticketId}`);
}

export function createTicket(ticket) {
  return API.post("", ticket);
}

export function updateTicket(ticketId, ticket) {
  return API.put(`/${ticketId}`, ticket);
}

export function deleteTicket(ticketId) {
  return API.delete(`/${ticketId}`);
}