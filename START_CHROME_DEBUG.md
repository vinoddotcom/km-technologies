# Chrome Remote Debugging Setup

## Option 1: Quick Start Command (Run this in PowerShell)

```powershell
Start-Process "chrome.exe" --remote-debugging-port=9222 --user-data-dir="$env:TEMP\chrome-debug" "http://localhost:3000/contact"
```

## Option 2: If Chrome is Already Running

1. Close all Chrome windows completely
2. Then run:

```powershell
$chromePath = "C:\Program Files\Google\Chrome\Application\chrome.exe"
if (Test-Path $chromePath) {
    Start-Process $chromePath --remote-debugging-port=9222 --user-data-dir="$env:TEMP\chrome-debug" "http://localhost:3000/contact"
} else {
    # Try alternate path
    Start-Process "chrome.exe" --remote-debugging-port=9222 --user-data-dir="$env:TEMP\chrome-debug" "http://localhost:3000/contact"
}
```

## Option 3: Manual Steps

1. Close Chrome completely
2. Press `Win + R`
3. Paste this and press Enter:
   ```
   chrome.exe --remote-debugging-port=9222 --user-data-dir="%TEMP%\chrome-debug" http://localhost:3000/contact
   ```

## Verify It's Working

After Chrome starts, you should see:
- A new Chrome window opens
- The contact page loads at http://localhost:3000/contact
- Chrome is now ready for DevTools MCP connection

## Then Tell Me

Once Chrome is running, just say "retry" or "test now" and I'll connect to review the page!
