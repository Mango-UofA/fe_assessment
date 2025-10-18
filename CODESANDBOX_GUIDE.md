# How to Deploy to CodeSandbox

## Method 1: Import from GitHub (Recommended)

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "BoreDM Front-End Assessment - Drilling Log PDF"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Import to CodeSandbox**:
   - Go to https://codesandbox.io/
   - Click "Import" or "Create"
   - Select "Import from GitHub"
   - Enter your repository URL
   - CodeSandbox will automatically detect it's a React app and set it up

## Method 2: Upload Files Directly

1. **Go to the template**: https://codesandbox.io/p/sandbox/busy-allen-x3cn8t
2. **Fork the sandbox**
3. **Replace files**:
   - Replace `src/App.js` with your App.js
   - Replace `src/DrillingLog.js` with your DrillingLog.js (create if doesn't exist)
   - Update `package.json` dependencies if needed

## Method 3: Manual Setup

1. **Create new React sandbox**: https://codesandbox.io/s/new
2. **Select "React" template**
3. **Upload your files**:
   - Drag and drop all files from `src/` folder
   - Update `package.json` to include `@react-pdf/renderer`
4. **Install dependencies**: CodeSandbox will auto-install

## After Deployment

1. **Verify the PDF displays correctly**
2. **Test the download button**
3. **Copy the sandbox URL**
4. **Submit via the Google Form**: https://docs.google.com/forms/d/e/1FAIpQLScY8vmXq1aPG6HFTCGg5pg2s-3658CajLKvDNDTFjadKHH22Q/viewform

## Submission Checklist

- [ ] PDF matches the original image exactly
- [ ] Download button generates Result.pdf
- [ ] CodeSandbox URL is publicly accessible
- [ ] Code is clean and well-commented
- [ ] All code is original (authored by you)
- [ ] Submitted before deadline

## Example Sandbox URL Format
```
https://codesandbox.io/p/sandbox/boredm-drilling-log-xxxxx
```

## Troubleshooting

### If dependencies don't install:
- Check `package.json` has correct versions
- Click "Restart Sandbox" in CodeSandbox

### If PDF doesn't render:
- Check browser console for errors
- Verify `@react-pdf/renderer` is installed
- Make sure DrillingLog.js is imported correctly

### If you get errors:
- Ensure React version compatibility (18.x)
- Check that all imports are correct
- Verify file structure matches the original template

---

**Good luck with your submission!**
