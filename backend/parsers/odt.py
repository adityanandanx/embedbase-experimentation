import tempfile
import zipfile
from bs4 import BeautifulSoup
from fastapi import UploadFile


async def odt(file: UploadFile) -> str:
    with tempfile.NamedTemporaryFile(delete=False) as temp_file:
        temp_file.write(await file.read())
        temp_file.seek(0)
        odf_file = zipfile.ZipFile(temp_file.name)
        ostr = odf_file.read("content.xml")
        text = BeautifulSoup(ostr, features="xml").get_text("\n")

        return text
