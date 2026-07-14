#!/usr/bin/env bash
set -euo pipefail
ssh-keygen
git config --global user.email "suhasedu991@gmail.com"
git config --global user.name "suhas52"

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
echo 'eval "$('"$(command -v brew)"' shellenv)"' >> ~/.bashrc

mkdir -p "$HOME/.config"

brew bundle --file="$PWD/Brewfile"

for dir in "$PWD"/.config/*; do
    [ -e "$dir" ] || continue

    name=$(basename "$dir")
    ln -sfn "$dir" "$HOME/.config/$name"
done


for plist in macos-plists/*.plist; do
    domain=$(basename "$plist" .plist)
    defaults import "$domain" "$plist"
done

killall Dock Finder SystemUIServer cfprefsd || true
