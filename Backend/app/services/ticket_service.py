

from datetime import datetime
from typing import Optional

from fastapi import HTTPException
from sqlalchemy import asc, desc, or_

from sqlalchemy.orm import Session
from app import models, schemas
from app.utils.ticket_generator import generate_ticket_id


def create_ticket(db: Session, ticket:schemas.TicketCreate):
    new_ticket = models.Ticket(
        ticket_id = generate_ticket_id(db),
        customer_name = ticket.customer_name,
        customer_email=ticket.customer_email,
        subject=ticket.subject,
        description=ticket.description,
        status=schemas.TicketStatus.OPEN.value,
    )

    db.add(new_ticket)
    db.commit()
    db.refresh(new_ticket)

    return new_ticket

def get_all_tickets(
        db: Session,
        page: int = 1,
        size : int =10,
        search:  Optional[str] = None,
        status: Optional[str] = None,
        sort: str= "newest"
):
    
    query = db.query(models.Ticket)
    if search :
        query = query.filter(
            or_(
                models.Ticket.ticket_id.ilike(f"%{search}%"),
                models.Ticket.customer_name.ilike(f"%{search}%"),
                models.Ticket.customer_email.ilike(f"%{search}%"),
                models.Ticket.subject.ilike(f"%{search}%"),
                models.Ticket.description.ilike(f"%{search}%"),
            )
        )

    if status:
            query = query.filter(models.Ticket.status == status)

    if sort == "oldest":
            query = query.order_by(asc(models.Ticket.created_at))
    else:
            query = query.order_by(desc(models.Ticket.created_at))

    offset = (page - 1) * size

    tickets = (
            query.offset(offset)
            .limit(size)
            .all()
        )

    total = query.count()

    return {
        "page": page,
        "size": size,
        "total": total,
        "tickets": tickets,
        }
    

def get_ticket(db: Session, ticket_id: str):

        return (
            db.query(models.Ticket)
            .filter(models.Ticket.ticket_id == ticket_id)
            .first()
        )
    
def update_ticket(
    db: Session,
    ticket_id: str,
    update_data: schemas.TicketUpdate,
):
    ticket = get_ticket(db, ticket_id)

    if ticket is None:
        raise HTTPException(
            status_code=404,
            detail="Ticket not found"
        )

    ticket.status = update_data.status.value
    ticket.updated_at = datetime.utcnow()

    if update_data.note_text:
        note = models.Note(
            ticket_id=ticket.id,
            note_text=update_data.note_text
        )

        db.add(note)

    db.commit()
    db.refresh(ticket)

    return ticket

def delete_ticket(
    db:Session,
    ticket_id:str,
    ):
    ticket = get_ticket(db, ticket_id)

    if ticket is None:
        raise HTTPException(
    status_code=404,
    detail="Ticket not found"
)

    db.delete(ticket)
    db.commit()

    return True