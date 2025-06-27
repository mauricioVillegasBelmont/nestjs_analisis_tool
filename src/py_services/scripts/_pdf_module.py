#!/usr/bin/env python3
# _pdf_module.py

import re
import os

from pdfminer.high_level import extract_pages
from pdfminer.pdfinterp import PDFResourceManager, PDFPageInterpreter
from pdfminer.converter import TextConverter, XMLConverter, HTMLConverter
from pdfminer.layout import LAParams, LTImage
from pdfminer.high_level import extract_text
from pdfminer.pdfpage import PDFPage

from io import BytesIO
from io import StringIO

from PIL import Image




def get_html_from_buffer(pdf_buffer):
    rsrcmgr = PDFResourceManager()
    retstr = BytesIO()
    laparams = LAParams()
    device = HTMLConverter(rsrcmgr, retstr, codec='utf-8', laparams=laparams)

    interpreter = PDFPageInterpreter(rsrcmgr, device)
    for page in PDFPage.get_pages(
        pdf_buffer,
        pagenos=None,
        maxpages=0,
        password='',
        caching=True,
        check_extractable=True,
    ):
        interpreter.process_page(page)
    text = retstr.getvalue().decode()
    device.close()
    retstr.close()
    return text

def get_pdf_text(pdf_buffer):
    return extract_text(pdf_buffer)

def get_html_from_file(pdf_file):
    pdf_buffer = open(pdf_file, 'rb')
    text = get_html_from_buffer(pdf_buffer)
    pdf_buffer.close()
    return text

def write_file(file,content):
    os.makedirs(os.path.dirname(file), exist_ok=True)
    with open(file, 'w', encoding='utf-8') as html_file:
        html_file.write(content)
    return




def remove_header_body_tags(html):
    html = re.sub(r'<\/?(html|head|meta|body|title|aside|nav|link|script|noscript)[^>]*>', '', html, flags=re.IGNORECASE)
    return html.strip()

def remove_nl(html):
    html = html.replace('\n', ' ').replace('\r', '')
    return html

def remove_inline_styles(html):
    html = re.sub(r'\s*style\s*=\s*"[^"]*"', '', html, flags=re.IGNORECASE)
    return html




def extract_images(output_dir, file,  name_prefix):
    os.makedirs(output_dir, exist_ok=True)
    image_index = 1
    image_paths = []
    for page_layout in extract_pages(file):
        for element in page_layout: 
            if isinstance(element, LTImage):
                image_data = element.stream.get_data()
                image = Image.open(BytesIO(image_data)).convert('RGB')
                image_name = f'{name_prefix}_{image_index}.webp'
                image_path = os.path.join(output_dir, image_name)
                image.save(image_path, 'WEBP')
                image_paths.append(image_name)
                image_index += 1
    return image_paths
