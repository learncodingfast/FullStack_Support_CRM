from datetime import datetime
from enum import Enum
from typing import List, Optional

from pydantic import BaseModel, ConfigDict, EmailStr, Field



class TicketStatus(str, Enum):
    OPEN = "open"
    IN_PROGRESS = "In Progress"
    CLOSED = "Closed"

class NoteCreate(BaseModel):
    note_text:str = Field(..., min_length=3, max_lenght=1000)

class NoteResponse(BaseModel):
    id: int
    note_text : str
    created_at : datetime

    model_config = ConfigDict(from_attributes=True)


class TicketCreate(BaseModel):
    customer_name: str = Field(..., min_length=1, max_length=100)
    customer_email: EmailStr
    subject: str = Field(..., min_length=1, max_length=100)
    description: str = Field(..., min_length=10)

class TicketUpdate(BaseModel):

    status: TicketStatus

    note_text: Optional[str] = Field(
        default=None,
        min_length=3,
        max_length=1000
    )


class TicketResponse(BaseModel):
    ticket_id: str

    customer_name: str

    customer_email: EmailStr

    subject: str

    description: str

    status: TicketStatus

    created_at: datetime

    updated_at: datetime

    notes: List[NoteResponse] = []

    model_config = ConfigDict(from_attributes=True)
