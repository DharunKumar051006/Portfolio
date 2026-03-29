# Quick Start Guide

## ⚡ Get Your Portfolio Running in 5 Minutes

### Step 1: Install Dependencies
Open PowerShell in your project directory and run:
```powershell
npm install
```

### Step 2: Start Development Server
```powershell
npm run dev
```

### Step 3: Open in Browser
Navigate to: `http://localhost:5173`

You should see your portfolio website! 🎉

---

## 📝 Customization Checklist

- [ ] Update your name in `src/components/Hero.jsx`
- [ ] Replace profile image with your own
- [ ] Edit about section in `src/components/About.jsx`
- [ ] Add your skills in `src/components/Skills.jsx`
- [ ] Add your projects in `src/components/Projects.jsx`
- [ ] Update experience in `src/components/Experience.jsx`
- [ ] Add your education in `src/components/Education.jsx`
- [ ] Update achievements in `src/components/Achievements.jsx`
- [ ] Add your contact info in `src/components/Contact.jsx`
- [ ] Update social links in `src/components/Footer.jsx` and `src/components/Hero.jsx`

---

## 🎨 File Structure at a Glance

```
src/
├── App.jsx                    Main component (imports all sections)
├── components/
│   ├── Navbar.jsx            Navigation bar
│   ├── Hero.jsx              Welcome section
│   ├── About.jsx             About me
│   ├── Skills.jsx            Technical skills
│   ├── Projects.jsx          Project showcase
│   ├── Experience.jsx        Work history
│   ├── Education.jsx         Education background
│   ├── Achievements.jsx      Awards & certifications
│   ├── Contact.jsx           Contact form
│   └── Footer.jsx            Footer
└── main.jsx                  React entry point
```

---

## 🚀 Build for Production

When ready to deploy:
```powershell
npm run build
```

This creates an optimized `dist` folder ready for hosting.

---

## 💻 Component Editing Tips

### Each component has this structure:
```jsx
export default function SectionName() {
  return (
    <section id="section-id" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Your content */}
      </div>
    </section>
  )
}
```

### Common Tailwind Classes Used:
- `py-20` - Vertical padding
- `px-4` - Horizontal padding
- `text-white` - Text color
- `bg-orange-500` - Orange background
- `rounded-2xl` - Rounded corners
- `hover:` - Hover effects
- `transition-all` - Smooth transitions
- `md:` - Responsive breakpoint

---

## 🎯 Deployment Options

### GitHub Pages
1. Push to GitHub
2. Enable GitHub Pages in repository settings
3. Select `main` branch and `/docs` folder

### Vercel (Recommended)
1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

### Netlify
1. Push to GitHub
2. Connect repository in [Netlify](https://netlify.com)
3. Auto-deploy on push

---

## 📞 Need Help?

Refer to the full README.md for detailed information about:
- Component explanations
- Customization guides
- Best practices
- Browser support

Happy building! 🚀
