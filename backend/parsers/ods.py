import zipfile
from bs4 import BeautifulSoup
from fastapi import UploadFile
import tempfile


async def ods(file: UploadFile) -> str:
    with tempfile.NamedTemporaryFile(delete=False) as temp_file:
        temp_file.write(await file.read())
        temp_file.seek(0)
        odf_file = zipfile.ZipFile(temp_file.name)
        ostr = odf_file.read("content.xml")
        soup = BeautifulSoup(ostr, features="xml")

        table = soup.find("table:table")
        data_rows = table.find_all("table:table-row")

        rows = []
        text = ""
        for row in data_rows:
            row_data = [cell.text for cell in row.find_all("table:table-cell")]
            text += ", ".join(row_data)
            text += "\n"
            rows.append(row_data)

        return text
