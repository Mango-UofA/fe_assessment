# BoreDM Drilling Log - Front-End Assessment

A React-PDF implementation of the BoreDM drilling log header (Form B-17) that exactly recreates the provided design specification.

## 🎯 Live Demo

- **Local**: http://localhost:3000
- **CodeSandbox**: [Deploy using CODESANDBOX_GUIDE.md](./CODESANDBOX_GUIDE.md)

## 📋 Assessment Requirements

✅ **Exact visual match** to the provided image  
✅ **Built in React** using hooks and functional components  
✅ **Runnable via CodeSandbox**  
✅ **Outputs Result.pdf** with download functionality  
✅ **All code authored by me** - 100% original implementation  

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm start
```

Opens at http://localhost:3000 with:
- Live PDF preview
- Download button for Result.pdf
- Hot reload for development

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
fe_assessment/
├── public/
│   └── index.html              # HTML template
├── src/
│   ├── App.js                  # Main app with PDFViewer and download
│   ├── DrillingLog.js          # React-PDF document component
│   └── index.js                # Entry point
├── package.json                # Dependencies and scripts
├── sandbox.config.json         # CodeSandbox configuration
├── README.md                   # This file
├── SUBMISSION.md               # Detailed submission document
└── CODESANDBOX_GUIDE.md        # Deployment guide
```

## 🎨 Design Implementation

### Header Section
- **Logo**: `||| BOREDM` in Helvetica-Bold (24pt)
- **Title**: "Riverside Condominiums" (18pt bold)
- **Subtitle**: "General Location - Project" (13pt bold)
- **Page Number**: "B-17" (22pt bold) + "Page 1 of 1" (10pt)

### Data Fields
All fields implemented with precise spacing and alignment:

| Field | Value |
|-------|-------|
| Drilling Firm | BoreDM Drilling |
| Project No. | 25-3332 |
| Remarks | - |
| Driller | PA |
| Date Drilled | 03/05/2025 |
| Logged By | LA |
| Boring Depth | - |
| Water | ✓ N/A |
| Boring Elevation | N/A |
| Hammer Type | - |
| Brand Address | 4909 N. 44th St, Phoenix, AZ 85018 |

### Styling Details
- **Border Width**: 2pt solid black
- **Page Size**: A4 (595 x 842 points)
- **Font**: Helvetica and Helvetica-Bold
- **Cell Proportions**: 40% / 33.33% / 26.67%
- **Custom Elements**: Checkbox with checkmark

## 🛠 Technologies Used

- **React** 18.2.0 - UI framework
- **@react-pdf/renderer** 3.1.14 - PDF generation
- **react-scripts** 5.0.1 - Build tooling

## 📝 Key Features

### 1. Exact Visual Match
Carefully matched all aspects of the original image:
- Font families, sizes, and weights
- Border widths and positions
- Cell dimensions and padding
- Text alignment and spacing

### 2. React-PDF Components
- `<Document>` - PDF wrapper
- `<Page>` - A4 page layout
- `<View>` - Container elements
- `<Text>` - Text content
- `StyleSheet.create()` - CSS-like styling

### 3. Download Functionality
One-click download button using `PDFDownloadLink`:
- Generates `Result.pdf`
- Client-side PDF creation
- No server required

### 4. Clean Code
- Well-organized component structure
- Comprehensive comments
- Semantic naming
- Maintainable and scalable

## 🔧 Development Notes

### Assumptions Made
1. **Font**: Used Helvetica (standard PDF font) for compatibility
2. **Logo**: Interpreted slashes as vertical bars `|||`
3. **Page Size**: A4 format (standard for forms)
4. **Margins**: Added padding for better presentation

### Challenges Solved
1. **Precise Layout**: Used flexbox with exact percentages
2. **Checkbox**: Custom implementation with border styling
3. **Typography**: Matched font sizes and weights precisely
4. **Borders**: Consistent 2pt borders throughout

## 📤 Deployment to CodeSandbox

See [CODESANDBOX_GUIDE.md](./CODESANDBOX_GUIDE.md) for detailed instructions.

**Quick steps:**
1. Fork the template: https://codesandbox.io/p/sandbox/busy-allen-x3cn8t
2. Replace files in `src/` folder
3. Update `package.json` if needed
4. Test and download Result.pdf
5. Submit sandbox URL

## ✅ Testing Checklist

- [x] Visual match to original image
- [x] PDF generation works
- [x] Download button functional
- [x] Responsive layout
- [x] Border alignment correct
- [x] Text spacing accurate
- [x] Checkbox displays properly
- [x] All data fields present
- [x] No console errors
- [x] Clean code quality

## 📧 Submission

**Form**: https://docs.google.com/forms/d/e/1FAIpQLScY8vmXq1aPG6HFTCGg5pg2s-3658CajLKvDNDTFjadKHH22Q/viewform

**Include:**
- CodeSandbox URL
- Completion time
- Any assumptions made

## 📄 License

This project was created for the BoreDM Front-End Developer Assessment.

## 👤 Author

Completed as part of the front-end developer application to BoreDM.

---

**Ready for submission!** 🎉

For questions: careers@boredmlogs.com
