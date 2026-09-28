from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Vaani API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def base():
    return {"status":"ok", "message":"Welcome to Vaani"}


@app.get("/health")
def health():
    """Lets the frontend (and later, the deployment platform) check the server is alive."""
    return {"status":"ok", "service":"vaani-backend"}