# Adi Berisha - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This website showcases my professional experience, education, skills, and projects in a clean, minimalistic design.

## 🚀 Features

- **Modern Design**: Clean, professional, and minimalistic UI/UX
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Interactive Components**: Smooth animations and hover effects
- **Professional Sections**: 
  - Hero section with personal introduction
  - About Me with personal information
  - Work Experience timeline
  - Education & Training history
  - Technical Skills & Language proficiency
  - Featured Projects showcase
  - Contact form and information
- **Performance Optimized**: Built with Vite for fast development and build times

## 🛠️ Technologies Used

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Heroicons (SVG)
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About me section
│   ├── Experience.tsx  # Work experience
│   ├── Education.tsx   # Education history
│   ├── Skills.tsx      # Skills & languages
│   ├── Projects.tsx    # Projects showcase
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer section
├── App.tsx             # Main app component
├── main.tsx            # App entry point
└── index.css           # Global styles & Tailwind
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-website
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

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🌐 Deployment to Vercel

This project is optimized for Vercel deployment. Here's how to deploy:

### Option 1: Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to configure your project

### Option 2: Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect it's a Vite project
6. Click "Deploy"

### Environment Variables

No environment variables are required for basic functionality.

## 📝 Customization

### Personal Information

Update the following files with your information:
- `src/components/About.tsx` - Personal details
- `src/components/Experience.tsx` - Work experience
- `src/components/Education.tsx` - Education history
- `src/components/Skills.tsx` - Skills and languages
- `src/components/Projects.tsx` - Your projects

### Styling

- Colors: Modify `tailwind.config.js` for custom color schemes
- Typography: Update `src/index.css` for custom fonts
- Layout: Adjust component classes for different layouts

### Projects

Update the `projects` array in `src/components/Projects.tsx` with your actual GitHub projects:

```typescript
const projects = [
  {
    title: 'Your Project Name',
    description: 'Project description',
    image: '/project-image.jpg',
    technologies: ['React', 'TypeScript', 'Tailwind'],
    githubUrl: 'https://github.com/username/repo',
    liveUrl: 'https://your-project.com',
    category: 'Web Application'
  }
  // Add more projects...
];
```

## 🎨 Design Features

- **Color Scheme**: Professional blue and gray palette
- **Typography**: Clean, readable Inter font
- **Spacing**: Consistent spacing using Tailwind's spacing scale
- **Animations**: Subtle hover effects and transitions
- **Cards**: Modern card-based layout for content sections
- **Responsive**: Mobile-first responsive design

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

- TypeScript for type safety
- Functional components with hooks
- Tailwind CSS for styling
- Consistent component structure

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome!

## 📞 Contact

- **Email**: adii.berisha2004@gmail.com
- **LinkedIn**: [linkedin.com/in/adi-berisha](https://linkedin.com/in/adi-berisha)
- **GitHub**: [github.com/adiberishaubt](https://github.com/adiberishaubt)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
