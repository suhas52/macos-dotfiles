function hear
    set file $argv[1]
    command hear -l ja-JP -d -p -i $file
end
