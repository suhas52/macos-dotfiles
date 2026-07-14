if status is-interactive
# Commands to run in interactive sessions can go here
eval "$(/opt/homebrew/bin/brew shellenv)"
end

# Added by LM Studio CLI (lms)
set -gx PATH $PATH /Users/suhas/.lmstudio/bin
# End of LM Studio CLI section

# CrossOver wine export
export '__CFBundleIdentifier'='com.codeweavers.CrossOver' export 'TMPDIR'='/var/folders/30/6523pm0d0g1glrb5dlk1560c0000gn/T/' export 'CX_BOTTLE_PATH'='/Users/suhas/Library/Application Support/CrossOver/Bottles' export 'XPC_FLAGS'='0x0' export 'PYTHONPATH'='/Applications/CrossOver.app/Contents/SharedSupport/CrossOver/lib/python' export 'COMMAND_MODE'='unix2003' export 'CX_MANAGED_BOTTLE_PATH'='/Library/Application Support/CrossOver/Bottles' export 'XPC_SERVICE_NAME'='application.com.codeweavers.CrossOver.411055.419806' export 'SSH_AUTH_SOCK'='/var/run/com.apple.launchd.IvvYL8Vrdd/Listeners' export 'OSLogRateLimit'='64' export 'CX_ROOT'='/Applications/CrossOver.app/Contents/SharedSupport/CrossOver' export 'CX_APP_BUNDLE_PATH'='/Applications/CrossOver.app' export CX_BOTTLE='VN' export PATH='/Applications/CrossOver.app/Contents/SharedSupport/CrossOver/bin'":$PATH" export 'LaunchInstanceID'='E29F5E0F-17FC-4140-A186-E648315137C4'
