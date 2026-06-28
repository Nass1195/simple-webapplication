from datetime import datetime, timedelta, timezone
from fastapi import APIRouter, Depends, HTTPException, status
from app.models import User, UserPublic, UserBase, Message, users
from fastapi.security import OAuth2PasswordBearer
import bcrypt
import jwt


router = APIRouter(prefix="/user")

SECRET_KEY = "very_super_secret_key"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="user/login")


def create_access_token(data: dict):
    to_encode = data.copy()

    expire = datetime.now(timezone.utc) + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})

    encoded_jwt = jwt.encode(to_encode, key=SECRET_KEY, algorithm=ALGORITHM)

    return encoded_jwt

def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, key= SECRET_KEY, algorithms=[ALGORITHM])
        user_name: str = payload.get("sub")
        if user_name == None:
            raise credentials_exception
        return user_name
    except jwt.PyJWTError:
        raise credentials_exception

@router.post("/login")
async def login_user(user: UserPublic):

    user_name = user.userName
    user_password = None

    for tmp in users:
        if tmp.userName  == user_name:
            user_password = tmp.password
            break

    if user_password is None:
       raise HTTPException(status_code=400, detail="User is not registered")

    password = user.password
    password_bytes = password.encode('utf-8')

    if bcrypt.checkpw(password_bytes, user_password):
        access_token = create_access_token(data={"sub": user_name})

        return {
            "access_token": access_token, 
            "token_type": "bearer",
            "message": "login successful"
        }

    raise HTTPException(status_code=400, detail="Invalid password")

@router.post("/register")
async def add_user(user: UserPublic):
    user_name = user.userName

    for tmp in users:
        if tmp.userName  == user_name:
            return Message(message="user name is already used")
        
    password = user.password
    password_bytes = password.encode('utf-8')

    hashed_password = bcrypt.hashpw(password_bytes, bcrypt.gensalt())

    users.append(User(userName=user_name, password=hashed_password))


    return Message(message="User Added")


@router.get("/profile")
async def get_profile(current_user: str = Depends(get_current_user)):
    return {"message": f"Welcome to your profile, {current_user}!"}
