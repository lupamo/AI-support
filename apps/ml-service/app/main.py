from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class TicketBody(BaseModel):
	ticket_id: str
	text: str

@app.post("/ml/health")
def health_check():
	return {"status": "ok", "service": "ML service"}

@app.post("/ml/classify")
def classify_ticket(ticket: TicketBody):
	#Dummy classification logic
	category = "General Inquiry"
	if "billing" in ticket.text.lower():
		category = "Billing"
	elif 'password' in ticket.text.lower():
		category = "Technical"
	return {"ticket_id": ticket.ticket_id, "category": category, "confidence": 0.8}
