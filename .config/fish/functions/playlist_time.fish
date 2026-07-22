function playlist_time --description 'Calculate YouTube playlist runtime'
    set -l url $argv[1]
    
    # Defaults
    set -l start 1
    set -l end 999999
    set -l speed 1
    
    if test (count $argv) -ge 2
        set start $argv[2]
    end
    if test (count $argv) -ge 3
        set end $argv[3]
    end
    if test (count $argv) -ge 4
        set speed $argv[4]
    end
    
    yt-dlp \
                --playlist-start "$start" \
                --playlist-end "$end" \
                --print "%(duration)s" \
                "$url" |
        awk -v speed="$speed" -v start="$start" -v end="$end" '
    { total += $1 }
    END {
        adjusted = total / speed
        printf "Videos: %s-%s\n", start, end
        printf "Original: %.2f hours\n", total / 3600
        printf "At %.2fx: %.2f hours (%02d:%02d:%02d)\n",
            speed,
            adjusted / 3600,
            int(adjusted / 3600),
            int((adjusted % 3600) / 60),
            int(adjusted % 60)
    }'
end
