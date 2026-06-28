from pydantic import BaseModel


class UserBase(BaseModel):
    userName: str

class User(UserBase):
    password: bytes

class UserPublic(UserBase):
    password: str


class Message(BaseModel):
    message: str

users: list[User] = []