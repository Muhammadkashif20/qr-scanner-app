# QR Scanner App

A beautiful, modern QR code scanner built with React.js and Tailwind CSS.

## Features

- **Real-time QR Scanning** - Instantly scan QR codes using your device camera
- **Smart Detection** - Automatically detects QR code types (URL, Email, Phone, WiFi, Contact, Text)
- **Quick Actions** - One-click actions based on QR content (Open link, Send email, Call number)
- **Scan History** - Keep track of all your scanned QR codes
- **Copy to Clipboard** - Easily copy scanned content
- **Multiple Cameras** - Switch between front and back cameras
- **Beautiful UI** - Modern glassmorphism design with smooth animations
- **Responsive Design** - Works on desktop and mobile devices

## Getting Started

### Prerequisites

- Node.js 16+ installed
- A device with a camera (for scanning)

### Installation

1. Navigate to the project folder:
   ```bash
   cd qr-scanner-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and go to `http://localhost:5173`

### Using HTTPS (Required for mobile cameras)

For camera access on mobile devices, you may need HTTPS. You can use:

```bash
npm run dev -- --host --https
```

## Tech Stack

- **React 18** - UI Framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **html5-qrcode** - QR code scanning library

## Usage

1. Allow camera permissions when prompted
2. Point your camera at a QR code
3. The app will automatically detect and scan the QR code
4. View the result and take action (copy, open link, etc.)
5. Check your scan history anytime

## License

MIT
