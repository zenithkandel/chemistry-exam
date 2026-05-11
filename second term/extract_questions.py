import os
import pytesseract
from PIL import Image

# IMPORTANT FOR WINDOWS: You must install Tesseract OCR first!
# Download from: https://github.com/UB-Mannheim/tesseract/wiki
# Update the path below if you installed it somewhere else:
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

def extract_text_from_image(image_path):
    text = ""
    try:
        img = Image.open(image_path)
        text = pytesseract.image_to_string(img)
    except Exception as e:
        print(f"Error reading Image {image_path}: {e}")
    return text

def process_files(input_dir, output_file):
    with open(output_file, 'w', encoding='utf-8') as outfile:
        # Loop through all files in the input directory
        for filename in os.listdir(input_dir):
            file_path = os.path.join(input_dir, filename)
            
            # Skip directories
            if os.path.isdir(file_path):
                continue
                
            extracted_text = ""
            if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
                print(f"Processing Image: {filename}")
                extracted_text = extract_text_from_image(file_path)
            else:
                print(f"Skipping unsupported file type: {filename}")
                continue
                
            # Write extracted text to the master output file, separating it by source file
            if extracted_text.strip():
                outfile.write(f"\n{'='*60}\n")
                outfile.write(f"SOURCE FILE: {filename}\n")
                outfile.write(f"{'='*60}\n\n")
                outfile.write(extracted_text)
                outfile.write("\n")

if __name__ == '__main__':
    # 1. Place all your PNG, JPG, JPEG question papers in this folder
    INPUT_DIRECTORY = "./papers" 
    
    # 2. The consolidated output will be placed here
    OUTPUT_TEXT_FILE = "./extracted_questions.txt"
    
    if not os.path.exists(INPUT_DIRECTORY):
        os.makedirs(INPUT_DIRECTORY)
        print(f"Created empty directory: '{INPUT_DIRECTORY}'.")
        print("Please place your images inside this folder and run the script again.")
    else:
        print(f"Starting extraction from '{INPUT_DIRECTORY}'...")
        process_files(INPUT_DIRECTORY, OUTPUT_TEXT_FILE)
        print(f"Extraction complete! Check the file: {OUTPUT_TEXT_FILE}")
