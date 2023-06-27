from fastapi import UploadFile


async def txt(file: UploadFile) -> str:
    return (await file.read()).decode()
