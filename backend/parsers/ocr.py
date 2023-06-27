import tempfile
from fastapi import UploadFile
from PIL import Image
import pytesseract


async def ocr(file: UploadFile):
    with tempfile.NamedTemporaryFile(delete=False) as temp_file:
        temp_file.write(await file.read())
        temp_file.seek(0)
        text: str = pytesseract.image_to_string(Image.open(temp_file.name))
        text = "\n".join(text.split("\n"))
        return text
