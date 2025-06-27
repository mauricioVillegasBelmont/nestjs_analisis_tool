#!/usr/bin/env python3
# _soup_module.py

from bs4 import BeautifulSoup, Comment
import os
import re

def extract_font_size(tag):
    style = tag.get('style', '')
    match = re.search(r'font-size\s*:\s*(\d+(\.\d+)?)(pt|px)', style)
    if match:
        return float(match.group(1))
    return 0.0


def soup_helper_edit(html, image_names, assets_rel_pat):
    soup = BeautifulSoup(html, 'html.parser')
    soup = add_markup(soup)
    soup = soup_semantic_structure(soup)
    soup = soup_process_image_tags(soup, image_names, assets_rel_pat)
    soup = soup_remove_empty_tags(soup)
    return str(soup)

def add_markup(soup):
    comment = Comment(" PDF_TO_HTML_ANALIZED: v{{VESION}}, hash={{DOCUMENT_HASH}} ")
    if soup.html:
        soup.html.insert_before(comment)
        return soup
    else:
        first_tag = next((el for el in soup.contents if el.name), None)
        first_tag.insert_before(comment)
    return soup

def soup_semantic_structure(soup):
    for span in soup.find_all('span'):
        font_size = extract_font_size(span)
        text = span.get_text(strip=True)
        if font_size >= 14:
            h = soup.new_tag("h1")
            h.string = text
            span.replace_with(h)
        elif font_size >= 11:
            h = soup.new_tag("h2")
            h.string = text
            span.replace_with(h)
    return soup

def soup_process_image_tags(soup, image_names, assets_rel_path):
    img_tags = soup.find_all('img')
    for idx, tag in enumerate(img_tags):
        if idx < len(image_names):
            tag['src'] = os.path.join(assets_rel_path, image_names[idx])
    return soup

def soup_remove_empty_tags(soup):
    for tag in soup.find_all():
        if isinstance(tag, Comment):
            continue
        if tag.name not in ['img', 'br'] and not tag.text.strip():
            tag.decompose()
    return soup