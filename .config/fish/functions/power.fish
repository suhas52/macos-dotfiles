function power
    /Applications/Stats.app/Contents/Resources/smc list -p | grep PSTR | awk '{printf "%.2fw\n", $2}'
end
