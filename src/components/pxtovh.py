import re
import sys

def convert_px_to_vh(match, viewport_height):
    px_value = float(match.group(1))
    vh_value = (px_value / viewport_height) * 100
    return f"{vh_value:.2f}vh"

def update_css_file(file_path, viewport_height):
    with open(file_path, 'r') as file:
        css_content = file.read()

    # Use regular expression to find and replace pixel values
    updated_css = re.sub(r'(\d+(\.\d+)?)px', lambda match: convert_px_to_vh(match, viewport_height), css_content)

    with open(file_path, 'w') as file:
        file.write(updated_css)

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python3 script.py <path to file>")
        sys.exit(1)

    css_file_path = sys.argv[1]
    viewport_height = 720  # You can change this to your actual viewport height

    update_css_file(css_file_path, viewport_height)
    print(f"CSS file '{css_file_path}' updated successfully.")