# Adding Projects to Strapi

## ✅ Great News!

Your Strapi API authentication is working! The API is responding successfully but you don't have any projects created yet.

## Quick Start: Add Your First Project

1. **Open Strapi Admin** (if not already open):
   - Go to http://localhost:1337/admin
   - Login with your credentials

2. **Navigate to Content Manager**:
   - Click "Content Manager" in the left sidebar
   - Click "Project" under Collection Types

3. **Create a New Project**:
   - Click "+ Create new entry" button
   - Fill in the fields:

### Required Fields:
- **Title**: e.g., "Portfolio Website"
- **Description**: Brief overview of the project
- **Content**: Detailed project description (supports markdown)

### Optional Fields:
- **Featured**: Toggle ON to show on homepage
- **Technologies**: Click "Add an entry", type tech name (e.g., "React", "TypeScript")
- **URL**: Live project URL
- **GitHub**: GitHub repository URL
- **Order**: Number for sorting (lower = appears first)
- **Image**: Upload project screenshot/logo
  - Click "Add new assets"
  - Drop image or browse
  - Select and click "Finish"

4. **Publish the Project**:
   - Click "Save" (top right)
   - Click "Publish" (it will change from Draft to Published)
   - ⚠️ **IMPORTANT**: Projects must be Published (not just Saved) to appear in the API

5. **Check Your Website**:
   - Go to http://localhost:5173
   - Scroll to Projects section
   - Your project should now appear!

## Example Project Data

Here's an example to get you started:

```
Title: Full Stack Portfolio
Description: Personal portfolio website with headless CMS
Featured: ✓ (ON)
Technologies:
  - React
  - TypeScript
  - Strapi
  - TailwindCSS
  - Vite
URL: https://davebulaquena.com
GitHub: https://github.com/davebulaquena/portfolio
Order: 1
```

## Troubleshooting

### Project not showing on website?
- ✅ Make sure project is **Published** (not Draft)
- ✅ Check Featured toggle if filtering for featured projects
- ✅ Refresh your browser

### Still seeing "Showing sample projects"?
- This means the API returned 0 projects
- Add at least one published project in Strapi
- The message will disappear automatically

## Next Steps

After adding a few projects:
1. Add more content types (Blog Posts, Testimonials)
2. Customize project fields if needed (Settings → Content-Type Builder)
3. Deploy to production (Vercel + Railway)

---

**Current Status**: ✅ API Authentication Working | ⏳ Need to create projects in Strapi
