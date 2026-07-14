#!/usr/bin/env bash
set -euo pipefail

mkdir -p "$HOME/.config"

brew bundle --file="$PWD/Brewfile"

for dir in "$PWD"/.config/*; do
    [ -e "$dir" ] || continue

    name=$(basename "$dir")
    ln -sfn "$dir" "$HOME/.config/$name"
done
