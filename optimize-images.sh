#!/bin/bash

find public/content -type f \( -name "*.jpg" -o -name "*.png" \) -print0 | while IFS= read -r -d $'\0' file; do
    echo "Converting and resizing $file"
    convert "$file" -resize 1920x\> -quality 80 "${file%.*}.webp"
    rm "$file"
done
