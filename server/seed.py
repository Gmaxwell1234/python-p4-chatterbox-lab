# server/seed.py
from app import app
from models import db, Message

with app.app_context():
    db.drop_all()
    db.create_all()

    m1 = Message(body="Hello 👋", username="Liza")
    m2 = Message(body="Hi brother", username="Duane")
    m3 = Message(body="let's get this chat app working", username="Liza")
    m4 = Message(body="ngl, this looks like a lot 😬", username="Duane")
    m5 = Message(body="You got this! 💪", username="Liza")

    db.session.add_all([m1, m2, m3, m4, m5])
    db.session.commit()
