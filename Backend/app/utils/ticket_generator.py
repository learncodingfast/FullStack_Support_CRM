

from sqlalchemy.orm import Session

from app.models import Ticket


def generate_ticket_id(db: Session) ->str:
    last_ticket = (
        db.query(Ticket)
        .order_by(Ticket.id.desc())
        .first()
    )

    if last_ticket:
        next_number = last_ticket.id + 1
    else:
        next_number = 1

    return f"TKT-{next_number:04d}"