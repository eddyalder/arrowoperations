# ⚡ Arrow Operations

<div align="center">

![Arrow Operations](public/favicon.png)

**A cyberpunk-themed arrow key sequence game inspired by Helldivers stratagems**

[Play Now](https://arrowops.dev) • [Report Bug](https://github.com/eddyalder/key-strat-hero/issues) • [Request Feature](https://github.com/eddyalder/key-strat-hero/issues)

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat&logo=vercel)](https://arrowops.dev)
[![React](https://img.shields.io/badge/React-18.2.0-61dafb?style=flat&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-3178c6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.1.0-646cff?style=flat&logo=vite)](https://vitejs.dev/)

</div>

---

## 🎮 About

Arrow Operations is an intense reflex-based game where you must input arrow key sequences before time runs out. Featuring progressive difficulty, time-based scoring, and a stunning cyberpunk aesthetic with neon visuals and smooth animations.

### ✨ Features

- ⚡ **Time-Based Scoring** - Race against the clock for maximum points
- 📈 **Progressive Difficulty** - Sequences get longer and time limits decrease
- 🎯 **Dual Input Support** - Use Arrow Keys or WASD
- 🎨 **Cyberpunk Aesthetic** - Neon colors, glowing effects, and grid backgrounds
- 🔊 **Sound Effects** - Audio feedback for correct, incorrect, and completed sequences
- 📱 **Responsive Design** - Play on desktop or mobile
- 💾 **High Score Tracking** - Persistent high scores via localStorage
- 🌐 **PWA Support** - Installable as a progressive web app

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ (recommended)
- npm 8+

### Installation

```bash
# Clone the repository
git clone https://github.com/eddyalder/key-strat-hero.git

# Navigate to project directory
cd key-strat-hero

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 🎯 How to Play

1. **Start the Mission** - Click "INITIATE OPERATION" to begin
2. **Watch the Sequence** - Arrow directions will appear on screen
3. **Input Quickly** - Use Arrow Keys (↑ ↓ ← →) or WASD to match the sequence
4. **Beat the Clock** - Complete sequences before time runs out
5. **Score Points** - Earn points based on remaining time and sequence length
6. **Level Up** - Sequences get longer and time limits decrease as you progress

### Scoring System

- **Base Score** = Time Remaining × Time Multiplier (10)
- **Bonus** = Sequence Length × Length Multiplier (50)
- **Total** = Base Score + Bonus

## 🛠️ Tech Stack

### Core
- **React 18.2** - UI framework
- **TypeScript 5.2** - Type safety
- **Vite 5.1** - Build tool and dev server

### Styling
- **Vanilla CSS** - Custom cyberpunk design system
- **CSS Grid & Flexbox** - Responsive layouts
- **CSS Animations** - Smooth transitions and effects

### Analytics & SEO
- **Vercel Analytics** - User tracking and insights
- **Open Graph & Twitter Cards** - Social media previews
- **JSON-LD Structured Data** - Rich search results
- **PWA Manifest** - Installable web app

## 📁 Project Structure

```
key-strat-hero/
├── public/
│   ├── favicon.png          # App icon
│   ├── manifest.json        # PWA manifest
│   ├── robots.txt           # SEO directives
│   └── sitemap.xml          # Site structure
├── src/
│   ├── assets/
│   │   └── sounds/          # Game sound effects
│   ├── components/
│   │   ├── GameDisplay/     # Arrow sequence display
│   │   ├── GameOver/        # Game over screen
│   │   ├── ScoreBoard/      # Score tracking
│   │   └── Timer/           # Countdown timer
│   ├── constants/
│   │   └── stratConstants.tsx  # Game configuration
│   ├── data/
│   │   └── Strat.tsx        # Type definitions
│   ├── utils/
│   │   └── sounds.ts        # Sound utility
│   ├── App.tsx              # Main game logic
│   ├── App.css              # App-specific styles
│   ├── index.css            # Global styles & design system
│   └── main.tsx             # Entry point
└── index.html               # HTML template
```

## 🎨 Design System

The game uses a custom cyberpunk design system with:

- **Color Palette**
  - Neon Cyan: `#00f0ff`
  - Neon Magenta: `#ff00ff`
  - Neon Pink: `#ff006e`
  - Neon Purple: `#9d00ff`
  - Neon Green: `#00ff9f`

- **Typography**
  - Display: Orbitron (headings)
  - Body: Rajdhani (content)

- **Effects**
  - Glowing text shadows
  - Animated scanlines
  - Grid backgrounds
  - Smooth transitions

## 🔧 Configuration

Game difficulty can be adjusted in `src/constants/stratConstants.tsx`:

```typescript
export const GAME_CONFIG: GameConfig = {
  initialTime: 10000,           // Starting time (ms)
  timeDecrease: 500,            // Time reduction per level
  minTime: 3000,                // Minimum time limit
  initialSequenceLength: 4,     // Starting sequence length
  maxSequenceLength: 7,         // Maximum sequence length
  lengthIncreaseInterval: 3,    // Sequences before length increase
  timeMultiplier: 10,           // Score multiplier for time
  lengthMultiplier: 50          // Score multiplier for length
};
```

## 📊 SEO & Analytics

The app includes comprehensive SEO optimization:

- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card support
- ✅ JSON-LD structured data
- ✅ Sitemap and robots.txt
- ✅ Vercel Analytics integration
- ✅ PWA manifest for mobile installation

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 Author

**Edward Alder**

- Website: [edwardalder.dev](https://www.edwardalder.dev/)
- GitHub: [@eddyalder](https://github.com/eddyalder)

## 🙏 Acknowledgments

- Inspired by Helldivers stratagem input system
- Built with modern web technologies
- Deployed on Vercel

---

<div align="center">

**[Play Arrow Operations](https://arrowops.dev)** 🎮

Made with ⚡ by [Edward Alder](https://www.edwardalder.dev/)

</div>
