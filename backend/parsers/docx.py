import tempfile
from fastapi import UploadFile
from docx import Document


async def docx(file: UploadFile):
    with tempfile.NamedTemporaryFile(delete=False) as temp_file:
        temp_file.write(await file.read())
        temp_file.seek(0)

        doc = Document(temp_file.name)
        full_text = [para.text for para in doc.paragraphs]
        return "\n".join(full_text)
