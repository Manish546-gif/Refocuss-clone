# Refocuss Clone

A modern React application clone of the Refocuss website, featuring smooth animations, video backgrounds, and an interactive portfolio showcase. Built with React, Vite, and Framer Motion for stunning visual effects.

## 🚀 Features

- **Modern React Architecture**: Built with React 19.1.0 and Vite for fast development
- **Smooth Animations**: Powered by Framer Motion for fluid transitions and interactions
- **Responsive Design**: Tailwind CSS for modern, responsive styling
- **Interactive Portfolio**: Showcase of projects with video backgrounds and hover effects
- **Smooth Scrolling**: Locomotive Scroll for enhanced scrolling experience
- **Professional UI**: Clean, modern design inspired by the Refocuss agency website

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 4.1.10
- **Animations**: Framer Motion 12.19.1
- **Smooth Scrolling**: Locomotive Scroll 5.0.0-beta.21
- **Icons**: React Icons 5.5.0
- **Deployment**: GitHub Pages

## 📦 Project Structure

```
src/
├── App.jsx              # Main application component
├── main.jsx            # React entry point
├── index.css           # Global styles with Tailwind
├── assets/             # Video and image assets
│   ├── arqitel.mp4
│   ├── rainfall.mp4
│   ├── ttr.mp4
│   ├── yahoo.mp4
│   └── yir.mp4
└── component/          # React components
    ├── Button.jsx      # Animated button component
    ├── Cards.jsx       # Portfolio cards
    ├── Footer.jsx      # Footer section
    ├── Marquee.jsx     # Scrolling marquee text
    ├── Marquees.jsx    # Multiple marquee containers
    ├── Navbar.jsx      # Navigation header
    ├── Product.jsx     # Individual product/item
    ├── Products.jsx    # Products showcase with videos
    ├── Stripes.jsx     # Decorative stripe elements
    └── Work.jsx        # Work section with scroll-triggered images
```

## 🎨 Key Components

### Navigation
- **Navbar**: Clean navigation with logo and menu items
- **Button**: Animated button with hover effects using Framer Motion

### Portfolio Showcase
- **Work**: Scroll-triggered image gallery that reveals projects as you scroll
- **Products**: Interactive product showcase with video backgrounds
- **Cards**: Portfolio item cards with hover animations

### Visual Elements
- **Stripes**: Decorative stripe patterns
- **Marquees**: Scrolling text elements for visual interest
- **Footer**: Site footer section

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd refocuss-clone
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

### Deployment to GitHub Pages

```bash
npm run deploy
```

## 🎯 Key Features Explained

### Scroll-Triggered Animations
The Work component uses Framer Motion's `useScroll` hook to trigger image animations based on scroll position, creating a dynamic user experience.

### Video Backgrounds
Products section features multiple video backgrounds that animate smoothly as users interact with the portfolio items.

### Responsive Design
Built with Tailwind CSS, the application is fully responsive and works seamlessly across different screen sizes.

### Smooth Interactions
All interactive elements feature smooth animations and transitions for a polished user experience.

## 📱 Browser Support

This project supports all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Inspired by the Refocuss agency website design
- Built with modern React ecosystem tools
- Uses Framer Motion for smooth animations
- Tailwind CSS for responsive styling

## 📞 Contact

For questions or support, please open an issue in the GitHub repository.

---

**Note**: This is a clone project created for educational and portfolio purposes. All design elements are inspired by the original Refocuss website.
