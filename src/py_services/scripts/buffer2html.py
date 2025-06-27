#!/usr/bin/env python3
# pdf2html.py

import sys
from io import BytesIO

from _pdf_module import extract_images, get_html_from_buffer,remove_header_body_tags, remove_nl
from _soup_module import soup_helper_edit




assets_path = sys.argv[1]  # relative path for images
output_filename_prefix = sys.argv[2]


def main():
    try:
        pdf_stream = BytesIO(sys.stdin.buffer.read())
        pdf_stream.seek(0)
        image_names = extract_images(assets_path, pdf_stream, output_filename_prefix)

        pdf_stream.seek(0)
        html_content = get_html_from_buffer(pdf_stream)
         
        html_content = soup_helper_edit(html_content, image_names, assets_path)
        html_content = remove_header_body_tags(html_content)
        html_content = remove_nl(html_content)

        
        # print(image_names)
        print(str(html_content))
    except Exception as e:
        print(f"buffer2html Error: {e}", file=sys.stderr)
        sys.exit(1)



if __name__ == "__main__":
    main()