from typing import Optional

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app import schemas
from app.database import get_db
from app.services import ticket_service


router = APIRouter(
    prefix = "/api/tickets",
    tags = ["Tickets"]
)


@router.post(
    "",
    response_model= schemas.TicketResponse,
    status_code = 201)
def create_ticket(
        ticket:schemas.TicketCreate,
        db:Session = Depends(get_db),
        ):
        return ticket_service.create_ticket(db, ticket)

@router.get(
        ""
)
def get_all_tickets(
    page: int=1,
    size: int=10,
    search: Optional[str] = None,
    status: Optional[str] = None,
    sort: str = "newest",
    db: Session = Depends(get_db),
    ):
    
      return ticket_service.get_all_tickets(
        db=db,
        page=page,
        size=size,
        search=search,
        status=status,
        sort=sort,
    )

@router.get(
    "/{ticket_id}",
    response_model=schemas.TicketResponse,
)

def get_ticket(
    ticket_id: str,
    db: Session = Depends(get_db),
    ):
       
    ticket = ticket_service.get_ticket(db, ticket_id)

    if ticket is None:
        raise HTTPException(
        status_code=404,
    detail="Ticket not found"
)

    return ticket

@router.put(
    "/{ticket_id}",
    response_model=schemas.TicketResponse,
)
def update_ticket(
    ticket_id: str,
    ticket_update: schemas.TicketUpdate,
    db: Session = Depends(get_db),
):

    ticket = ticket_service.update_ticket(
        db,
        ticket_id,
        ticket_update,
    )

    if ticket is None:
        raise HTTPException(
            status_code=404,
            detail="Ticket not found"
        )

    return ticket

@router.delete("/{ticket_id}")
def delete_ticket(
    ticket_id: str,
    db: Session = Depends(get_db),
):

    deleted = ticket_service.delete_ticket(
        db,
        ticket_id,
    )

    if deleted is None:
        raise HTTPException(
            status_code=404,
            detail="Ticket not found"
        )

    return {
        "message": "Ticket deleted successfully"
    }