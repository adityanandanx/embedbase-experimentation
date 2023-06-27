import PyPDF2
from fastapi import UploadFile


async def pdf(file: UploadFile) -> str:
    reader = PyPDF2.PdfReader(file.file)
    text = ""
    for page in range(len(reader.pages)):
        page_obj = reader.pages[page]
        text += page_obj.extract_text()
    return text
