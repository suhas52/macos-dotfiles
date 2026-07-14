#!/bin/bash
for dir in .config/*; do
    name=$(basename "$dir")
    ln -s "$PWD/.config/$name" "$HOME/.config/$name"
done
