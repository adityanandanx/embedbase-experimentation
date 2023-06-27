from fastapi import UploadFile
from parsers import pdf, md, docx, odt, ods, odp, pptx, xlsx, ocr, txt


async def parseFile(file: UploadFile) -> str:
    match file.content_type:
        # Text
        case "text/plain":
            return await txt(file)
        case "text/markdown":
            return await md(file)

        # Pdf
        case "application/pdf":
            return await pdf(file)

        # Microsoft office
        case "application/msword":
            return await docx(file)
        case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
            return await docx(file)
        case "application/vnd.ms-powerpoint":
            return await pptx(file)
        case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
            return await pptx(file)
        case "application/vnd.ms-excel":
            return await xlsx(file)
        case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
            return await xlsx(file)

        # Open office
        case "application/vnd.oasis.opendocument.spreadsheet":
            return await ods(file)
        case "application/vnd.oasis.opendocument.text":
            return await odt(file)
        case "application/vnd.oasis.opendocument.presentation":
            return await odp(file)

        # Images
        case "image/jpeg":
            return await ocr(file)

        # Fallback
        case "application/octet-stream":
            ext = file.filename.split(".")[1].lower()
            if ext == "odp":
                return await odp(file)
            elif ext == "ts":
                return await txt(file)
            else:
                return file.content_type + " NOT SUPPORTED"

        case _:
            return file.content_type + " NOT SUPPORTED"
