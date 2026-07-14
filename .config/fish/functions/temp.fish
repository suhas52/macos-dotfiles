function temp
    while true
        set output (/Applications/Stats.app/Contents/Resources/smc list -t | awk '
                                       /^\[(Tp|Te)/ {cpu_sum+=$2; cpu_n++; if($2>cpu_max) cpu_max=$2}
                                       /^\[Tg/ {gpu_sum+=$2; gpu_n++; if($2>gpu_max) gpu_max=$2}
                                       END {
                                           printf "+------+--------+--------+\n"
                                           printf "| CHIP |  AVG   |  MAX   |\n"
                                           printf "+------+--------+--------+\n"
                                           printf "| CPU  | %6.1f | %6.1f |\n", cpu_sum/cpu_n, cpu_max
                                           printf "| GPU  | %6.1f | %6.1f |\n", gpu_sum/gpu_n, gpu_max
                                           printf "+------+--------+--------+\n"
                                       }')
        
        set lines (count $output)
        printf "%s\n" $output
        sleep 1
        printf "\033[%dA" $lines
    end
end
