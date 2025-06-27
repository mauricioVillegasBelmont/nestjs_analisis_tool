#!/usr/bin/env python3
# pdf2html.py

import sys
import os
from io import BytesIO

from _pdf_module import extract_images, get_html_from_file, write_file, remove_header_body_tags,remove_nl
from _soup_module import soup_helper_edit


app_dir = sys.argv[1]
pdf_file = sys.argv[2]
assets_path = sys.argv[3]
output_path = sys.argv[4]
output_filename = sys.argv[5]



def main():
    try:
        file = os.path.join(app_dir, pdf_file)
        output_file = os.path.join(app_dir, output_path, output_filename)   

        assets_output_dir = os.path.join(app_dir, assets_path)
        prefix = os.path.splitext(output_filename)[0]
        image_names = extract_images(assets_output_dir, file, prefix)


        html_content = get_html_from_file(file)
        html_content = soup_helper_edit(html_content, image_names, assets_path)
        html_content = remove_header_body_tags(html_content)
        html_content = remove_nl(html_content)

        write_file(output_file, html_content)
        print(1)
    except Exception as e:
        print(f"pdf2html Error: {e}")


if __name__ == "__main__":
    main()