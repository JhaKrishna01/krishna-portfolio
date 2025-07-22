# Krishna Nand Jha - Portfolio

A modern, responsive portfolio website showcasing Krishna's skills, experience, and projects in AI/ML and full-stack development.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark theme and gradient accents
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Beautiful animations using Framer Motion
- **Interactive Elements**: Hover effects, smooth scrolling, and interactive components
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Fast Performance**: Optimized for speed and performance

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks and functional components
- **Framer Motion**: Smooth animations and transitions
- **React Icons**: Beautiful icon library
- **CSS3**: Modern styling with gradients and glassmorphism effects
- **HTML5**: Semantic markup for better accessibility

## 📋 Sections

1. **Hero Section**: Introduction with animated text and social links
2. **About**: Personal background and education details
3. **Skills**: Technical skills with progress bars and soft skills
4. **Experience**: Work experience with timeline design
5. **Projects**: Featured projects with detailed descriptions
6. **Contact**: Contact form and contact information
7. **Footer**: Social links and additional information

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd krishna-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎨 Customization

### Colors
The color scheme uses a purple-blue gradient theme. You can customize colors in `src/index.css`:

```css
.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Content
Update the content in each component file:
- `src/components/Hero.js` - Hero section content
- `src/components/About.js` - About section content
- `src/components/Skills.js` - Skills and technologies
- `src/components/Experience.js` - Work experience
- `src/components/Projects.js` - Project details
- `src/components/Contact.js` - Contact information

## ⚠️ EmailJS Setup Note

**Important:** For the contact form to work, you must hardcode your EmailJS credentials (Service ID, Template ID, and Public Key) directly in `src/components/Contact.js`. Using environment variables (like a `.env` file) may not work in all setups, especially with Create React App or some deployment environments.

**How to set up:**
1. Open `src/components/Contact.js`.
2. Replace the values for `service_xxx`, `template_xxx`, and `publicKey_xxx` with your actual EmailJS credentials in both `emailjs.init(...)` and `emailjs.send(...)`.
3. Do **not** rely on `.env` for these values unless you have verified it works in your environment.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: jha.krishna1357@gmail.com
- **LinkedIn**: [krishna-nand-jha](https://www.linkedin.com/in/krishna-nand-jha/)
- **GitHub**: [JhaKrishna01](https://github.com/JhaKrishna01)

---

Made with ❤️ by Krishna Nand Jha 

To see your portfolio live, you have two main options:

### 1. Local Preview (on your computer)
You can run your React app locally to preview all changes before deploying:

```sh
npm start
```
This will open your portfolio in your browser at http://localhost:3000.

---

### 2. Deploy to GitHub Pages, Vercel, or Netlify (recommended for public sharing)

#### **A. GitHub Pages**
- Easiest for static React sites.
- You’ll need to install `gh-pages` and add a few lines to your `package.json`.
- I can guide you through this if you want.

#### **B. Vercel or Netlify**
- Free, fast, and automatic deployments from your GitHub repo.
- Just sign up, connect your repo, and deploy.
- Great for custom domains and continuous deployment.

---

**Which option would you like?**
- Local preview (npm start)
- Deploy to GitHub Pages
- Deploy to Vercel
- Deploy to Netlify

Let me know your preference and I’ll walk you through it step by step! 

Great choice! Let’s deploy your React portfolio to **GitHub Pages**. Here’s a step-by-step guide:

---

### 1. Install `gh-pages`
This package helps deploy your build folder to GitHub Pages.

```sh
npm install --save gh-pages
```

---

### 2. Update `package.json`
- **Add a `homepage` field** at the top (replace with your actual GitHub username and repo name):

```json
"homepage": "https://JhaKrishna01.github.io/krishna-portfolio"
```

- **Add deploy scripts** under `"scripts"`:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

---

### 3. Deploy
After saving the above changes, run:

```sh
npm run deploy
```

---

