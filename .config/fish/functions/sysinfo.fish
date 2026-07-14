function sysinfo
    while true
        # --- Power ---
        set power (/Applications/Stats.app/Contents/Resources/smc list -p | grep PPBR | awk '{printf "%.2fw", $2}')
        
        # --- CPU/GPU Temps ---
        set temps (/Applications/Stats.app/Contents/Resources/smc list -t | awk '
            /^\[(Tp|Te)/ {cpu_sum+=$2; cpu_n++; if($2>cpu_max) cpu_max=$2}
            /^\[Tg/      {gpu_sum+=$2; gpu_n++; if($2>gpu_max) gpu_max=$2}
            END {
                printf "| CPU  | %6.1f°C | %6.1f°C |\n", cpu_sum/cpu_n, cpu_max
                printf "| GPU  | %6.1f°C | %6.1f°C |\n", gpu_sum/gpu_n, gpu_max
            }')
        
        # --- Battery Temp ---
        set batt_raw (ioreg -rn AppleSmartBattery)
        set vtemp (string match -rg '"VirtualTemperature" = ([0-9]+)' $batt_raw)[1]
        if test -n "$vtemp"
            set batt_c (math "$vtemp / 100")
        else
            set batt_c "N/A"
        end
        
        # --- Render ---
        # Box is 32 chars wide (between the outer | |)
        set output \
                        "+==================================+" \
                        (printf "| Power    %-24s |" $power) \
                        "+----------------------------------+" \
                        "|         |    AVG    |    MAX     |" \
                        "+----------------------------------+" \
                        $temps \
                        "+----------------------------------+" \
                        (printf "| Battery  %-24s |" (printf "%.2f°C" $batt_c)) \
                        "+==================================+"
        
        set lines (count $output)
        printf "%s\n" $output
        sleep 1
        printf "\033[%dA" $lines
    end
end
