from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from parsers.common import parseFile

app = FastAPI()


origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.post("/parse")
async def parse(file: UploadFile):
    text = await parseFile(file)

    return {
        "filename": file.filename,
        "size": file.size,
        "text": text.encode("utf-8", "ignore"),
        "type": file.content_type,
    }
