function rcp --wraps='rclone copy -P --checkers 8 --transfers 4' --description 'alias rcp=rclone copy -P --checkers 8 --transfers 4'
    rclone copy -P --checkers 8 --transfers 4 $argv
end
