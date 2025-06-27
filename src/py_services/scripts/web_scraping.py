import urllib3

import sys
from io import BytesIO

from _pdf_module import extract_images, get_html_from_buffer,remove_header_body_tags, remove_nl
from _soup_module import soup_helper_edit

url = sys.argv[1]

def main():
    try:
      response = urllib3.request("GET", url)
      if response.status == 200:
        return response.data
      else:
        raise ValueError(f"scrap:{url}, status:{response.status}, error:{response.error}")
      print(1)
    except Exception as e:
      print(f"web_scraping Error: {e}")

if __name__ == "__main__":
    main()