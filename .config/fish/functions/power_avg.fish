function power_avg
    set cmd "/Applications/Stats.app/Contents/Resources/smc list -p | grep PPBR | awk '{printf \"%.2fw\n\", \$2}'"
    
    set -l count 0
    set -l sum 0
    
    echo "Collecting power usage once per second. Press Ctrl+C to stop."
    echo
    
    while true
        set output (sh -c $cmd)
        
        set power (string match -r '[0-9.]+' $output | head -n1)
        
        if test -n "$power"
            set count (math $count + 1)
            set sum (math "$sum + $power")
            set avg (math "$sum / $count")
            
            printf "Sample %d: %.2f W | Average: %.2f W\n" $count $power $avg
        end
        
        sleep 1
    end
end
