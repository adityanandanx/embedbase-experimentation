from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from parsers.common import parseFile
from embedbase_client.split import split_text

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
async def parse(file: UploadFile, split: bool = False):
    text = await parseFile(file)
    chunks = None
    if split:
        chunks = split_text(text, 500, 200)

    return {
        "filename": file.filename,
        "size": file.size,
        "text": text.encode("utf-8", "ignore"),
        "chunks": chunks,
        "type": file.content_type,
    }
