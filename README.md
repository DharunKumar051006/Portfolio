# Dharun Kumar - Modern Portfolio Website

A modern, responsive, and fully functional portfolio website built with React and Tailwind CSS. Features a dark premium design with orange accents, smooth animations, and a clean component-based architecture.

## 🎨 Features

- **Modern Design**: Dark premium UI with orange accents
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Component-Based**: Reusable, beginner-friendly components
- **Smooth Animations**: Subtle fade-in and slide-in animations
- **Clean Architecture**: Well-organized file structure
- **Interactive Elements**: Hover effects, smooth transitions, and interactive forms
- **Performance Optimized**: Fast loading and smooth scrolling

## 📋 Sections Included

1. **Navbar** - Fixed navigation with mobile menu
2. **Hero** - Eye-catching introduction section
3. **About** - Personal background and achievements
4. **Skills** - Technical skills with proficiency bars
5. **Projects** - Showcase of featured projects
6. **Experience** - Work history and achievements
7. **Education** - Academic background and certifications
8. **Achievements** - Awards and recognitions
9. **Contact** - Contact form and information
10. **Footer** - Quick links and social media

## 🛠️ Tech Stack

- **React** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool
- **Lucide React** - Beautiful icons
- **JavaScript ES6+** - Modern JavaScript

## 📁 Project Structure

```
dharun-portfolio/
├── index.html              # Main HTML file
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── src/
│   ├── main.jsx          # Entry point
│   ├── App.jsx           # Main app component
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Skills.jsx
│       ├── Projects.jsx
│       ├── Experience.jsx
│       ├── Education.jsx
│       ├── Achievements.jsx
│       ├── Contact.jsx
│       └── Footer.jsx
└── README.md             # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Navigate to the project directory**
   ```bash
   cd "d:\DharunKumar Portfolio"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - The site will be available at `http://localhost:5173`
   - Any changes you make will hot-reload automatically

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

## 🎨 Customization

### Change Personal Information
Edit each component file to add your own:
- Name and title in `Hero.jsx`
- About content in `About.jsx`
- Skills in `Skills.jsx`
- Projects in `Projects.jsx`
- Experience in `Experience.jsx`
- Education in `Education.jsx`
- Achievements in `Achievements.jsx`
- Contact info in `Contact.jsx`

### Update Colors
The primary accent color is orange (`#f97316`). To change it:
- Search for `orange-500` and `orange-600` in component files
- Update the Tailwind classes to your preferred color

### Add Your Own Images
Replace image URLs in components:
- Profile image in `Hero.jsx`
- Project images in `Projects.jsx`

### Update Social Links
Edit the social links in `Footer.jsx` and `Hero.jsx` with your actual URLs.

## 📝 Key Components Explained

### Navbar
- Fixed positioning for always-visible navigation
- Mobile menu that toggles on smaller screens
- Smooth scroll-to-section navigation

### Hero Section
- Large, impactful introduction
- Call-to-action buttons
- Social media links
- Responsive grid layout

### Skills Section
- Categorized skill cards
- Proficiency bars with animations
- Hover effects on skill items

### Projects Section
- Card-based project showcase
- Hover zoom effect on images
- Technology tags
- Quick links to live demos and source code

### Forms
- Contact form with validation
- State management with React hooks
- Success message feedback

## 🎯 Best Practices Used

1. **Component Reusability** - Components are designed to be easily modifiable
2. **Responsive Design** - Mobile-first approach with Tailwind CSS
3. **Accessibility** - Semantic HTML and proper link labels
4. **Performance** - Optimized images and lazy loading potential
5. **Code Organization** - Clear separation of concerns
6. **Animation Performance** - Using CSS transforms for smooth animations

## 💡 Customization Tips

### Add More Sections
Create a new component file and import it in `App.jsx`:
```jsx
// Create your-section.jsx
export default function YourSection() {
  return (
    <section id="your-section" className="py-20 px-4">
      {/* Your content */}
    </section>
  )
}
```

### Modify Styling
- Use Tailwind's utility classes directly in components
- Custom animations are defined in `index.html`
- Extend Tailwind config in `vite.config.js` if needed

### Add Interactivity
- Use React hooks (useState, useEffect) for state management
- Add event listeners with onClick, onChange handlers
- Implement form handling with controlled components

## 📦 Dependencies

- `react@18.2.0` - React library
- `react-dom@18.2.0` - React DOM renderer
- `lucide-react@0.294.0` - Icon library
- `@vitejs/plugin-react@4.0.0` - Vite React plugin
- `vite@4.4.5` - Build tool

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📧 Contact & Support

For questions or issues, feel free to reach out:
- Email: hello@dharunkumar.com
- GitHub: [Your GitHub Profile]
- LinkedIn: [Your LinkedIn Profile]

## 📄 License

This project is open source and available for personal and commercial use.

## 🙌 Credits

- Built with React and Tailwind CSS
- Icons from Lucide React
- Design inspired by modern portfolio trends

---

**Happy Coding!** 🚀

For more information about React, visit [react.dev](https://react.dev)
For more information about Tailwind CSS, visit [tailwindcss.com](https://tailwindcss.com)
