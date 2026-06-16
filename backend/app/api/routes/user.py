from fastapi import APIRouter
from app.models import User


router = APIRouter(prefix="/user")


@router.get("/")
async def get_user():
    return User(userName="nasser", password="1234")
