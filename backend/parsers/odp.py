import zipfile
from bs4 import BeautifulSoup
from fastapi import UploadFile
import tempfile


async def odp(file: UploadFile) -> str:
    with tempfile.NamedTemporaryFile(delete=False) as temp_file:
        temp_file.write(await file.read())
        temp_file.seek(0)
        odf_file = zipfile.ZipFile(temp_file.name)
        ostr = odf_file.read("content.xml")
        soup = BeautifulSoup(ostr, features="xml")

        return soup.get_text(separator="\n")
