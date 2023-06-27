import tempfile
from fastapi import UploadFile
import pandas as pd


async def xlsx(file: UploadFile) -> str:
    with tempfile.NamedTemporaryFile(delete=False) as temp_file:
        temp_file.write(await file.read())
        temp_file.seek(0)
        df = pd.read_excel(temp_file.name)
        return df.to_csv(lineterminator="\n")
