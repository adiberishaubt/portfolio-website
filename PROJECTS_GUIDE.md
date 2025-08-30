# Adding Projects to Your Portfolio

This guide will help you easily add new projects to your portfolio website.

## 📁 File Location

All projects are managed in: `src/data/projects.ts`

## 🚀 How to Add a New Project

### 1. Open the Projects File

Navigate to `src/data/projects.ts` in your code editor.

### 2. Add Your Project

Add a new project object to the `projects` array:

```typescript
{
  title: 'Your Project Name',
  description: 'A detailed description of what your project does, its features, and what you learned.',
  image: '/project-image.jpg', // Add your project screenshot here
  technologies: ['React', 'TypeScript', 'Node.js'], // List all technologies used
  githubUrl: 'https://github.com/username/repo-name',
  liveUrl: 'https://your-project.com', // Optional: if you have a live demo
  category: 'Web Application', // Choose from existing categories
  featured: true // Set to true to highlight important projects
}
```

### 3. Available Categories

- `'Web Application'` - Web apps and websites
- `'Backend Development'` - Server-side and API projects
- `'Full-Stack Development'` - Complete applications
- `'Frontend Development'` - UI/UX focused projects
- `'Portfolio'` - Portfolio and showcase projects
- `'Task Management'` - Productivity and management tools

### 4. Add New Categories (Optional)

If you want to add a new category:

1. Add it to the `categories` array in `src/data/projects.ts`
2. The Projects component will automatically include it in the filter

## 📸 Adding Project Images

### Option 1: Use Placeholder (Current Setup)
Projects currently use a gradient placeholder with the first letter of the project name.

### Option 2: Add Real Screenshots
1. Add your project screenshot to the `public/` folder
2. Update the `image` field in your project object
3. Example: `image: '/project-screenshot.png'`

## 🔗 Project Links

### GitHub Repository
- Always include the `githubUrl` for code access
- Use the full repository URL

### Live Demo (Optional)
- Include `liveUrl` if your project is deployed
- Leave empty string `''` if no live demo available

## 📝 Project Description Tips

Write descriptions that:
- Explain what the project does
- Highlight key features
- Mention what you learned
- Keep it professional but engaging
- Aim for 2-3 sentences

### Good Example:
```
"A comprehensive task management application with real-time updates, 
user authentication, and collaborative features. Built with React 
and Firebase, demonstrating modern web development practices and 
state management."
```

## 🛠️ Technologies

List all relevant technologies:
- Programming languages
- Frameworks and libraries
- Databases
- Tools and services
- APIs used

## ⭐ Featured Projects

Set `featured: true` for your best projects. These will be highlighted and can be used for special showcases.

## 🔄 After Adding Projects

1. **Test locally**: Run `npm run dev` to see your changes
2. **Build**: Run `npm run build` to ensure no errors
3. **Deploy**: Push to GitHub and deploy to Vercel

## 📱 Responsive Design

Your projects automatically:
- Display in a responsive grid
- Show technology tags
- Include hover effects
- Work on all device sizes

## 🎯 Best Practices

1. **Keep descriptions concise** but informative
2. **Use consistent formatting** for technology tags
3. **Update regularly** as you complete new projects
4. **Quality over quantity** - showcase your best work
5. **Include diverse projects** to show range of skills

## 🚨 Troubleshooting

### Build Errors
- Check TypeScript syntax in `projects.ts`
- Ensure all required fields are present
- Verify import/export statements

### Missing Projects
- Check if the project object is properly formatted
- Verify the category matches exactly
- Ensure the project is in the `projects` array

## 📚 Example Project Entry

```typescript
{
  title: 'E-commerce Platform',
  description: 'A full-stack e-commerce solution with user authentication, 
  product management, shopping cart, and payment integration. Built with 
  React, Node.js, and MongoDB.',
  image: '/ecommerce-screenshot.jpg',
  technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
  githubUrl: 'https://github.com/username/ecommerce-app',
  liveUrl: 'https://my-ecommerce-app.vercel.app',
  category: 'Full-Stack Development',
  featured: true
}
```

---

**Happy coding! 🎉**

Your portfolio will automatically update with new projects once you add them to the `projects.ts` file.
