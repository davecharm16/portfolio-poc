# Installing Strapi - Step-by-Step Guide

## Step 1: Remove Placeholder Directory

First, let's remove the empty cms directory:

```bash
# From project root
rm -rf apps/cms
```

## Step 2: Initialize Strapi

Run this command to create a new Strapi project:

```bash
# Make sure you're in the project root
cd /Users/davecharmbulaquena/Desktop/personal/portfolio

# Initialize Strapi
npx create-strapi-app@latest apps/cms --quickstart --typescript
```

### What will happen:
1. Installation starts (takes 2-3 minutes)
2. You'll see: "Participate in anonymous A/B testing?" → **Type `N` and press Enter**
3. Packages install
4. Database initializes
5. Strapi builds
6. Browser opens automatically at `http://localhost:1337/admin`

### If installation hangs:
Press `Ctrl+C` and try:
```bash
npx create-strapi-app@latest apps/cms --quickstart --typescript --skip-cloud
```

## Step 3: Create Admin User

When browser opens at `http://localhost:1337/admin`:

1. Fill in the form:
   - **First name**: Dave
   - **Last name**: Bulaquena
   - **Email**: dave@davebulaquena.com (or your preferred email)
   - **Password**: [Choose a strong password - save it!]
   - **Confirm password**: [Same password]

2. Click **"Let's start"**

3. You're now in the Strapi admin panel! 🎉

## Step 4: Create Project Content Type

### 4.1 Start Content Type Builder

1. In the left sidebar, click **"Content-Type Builder"**
2. Click **"+ Create new collection type"**
3. Enter **Display name**: `Project`
4. Click **"Continue"**

### 4.2 Add Fields

Now add these fields one by one:

#### Text Fields (Short text):
Click **"+ Add another field"** → Select **"Text"**

1. **title**
   - Name: `title`
   - Type: Short text
   - Advanced Settings → Required: ✅
   - Click "Finish"

2. **slug**
   - Name: `slug`
   - Type: Short text
   - Advanced Settings → Required: ✅, Unique: ✅
   - Click "Finish"

3. **shortDescription**
   - Name: `shortDescription`
   - Type: Short text
   - Advanced Settings → Required: ✅
   - Click "Finish"

4. **category**
   - Name: `category`
   - Type: Short text
   - Click "Finish"

5. **githubUrl**
   - Name: `githubUrl`
   - Type: Short text
   - Click "Finish"

6. **liveUrl**
   - Name: `liveUrl`
   - Type: Short text
   - Click "Finish"

7. **caseStudyUrl**
   - Name: `caseStudyUrl`
   - Type: Short text
   - Click "Finish"

#### Rich Text Field:
Click **"+ Add another field"** → Select **"Rich text (Blocks)"** or **"Rich text (Markdown)"**

8. **description**
   - Name: `description`
   - Advanced Settings → Required: ✅
   - Click "Finish"

#### Number Fields:
Click **"+ Add another field"** → Select **"Number"**

9. **order**
   - Name: `order`
   - Number format: integer
   - Default value: 0
   - Click "Finish"

#### Boolean Field:
Click **"+ Add another field"** → Select **"Boolean"**

10. **featured**
    - Name: `featured`
    - Default value: false
    - Click "Finish"

#### Date Fields:
Click **"+ Add another field"** → Select **"Date"**

11. **startDate**
    - Name: `startDate`
    - Type: date
    - Click "Finish"

12. **endDate**
    - Name: `endDate`
    - Type: date
    - Click "Finish"

#### JSON Field (for technologies array):
Click **"+ Add another field"** → Select **"JSON"**

13. **technologies**
    - Name: `technologies`
    - Click "Finish"

#### Media Fields:
Click **"+ Add another field"** → Select **"Media"**

14. **thumbnail**
    - Name: `thumbnail`
    - Type: Single media
    - Allowed types: Images only
    - Advanced Settings → Required: ✅
    - Click "Finish"

15. **images**
    - Name: `images`
    - Type: Multiple media
    - Allowed types: Images only
    - Click "Finish"

### 4.3 Save Content Type

1. Click **"Save"** (top right corner)
2. Wait for server to restart (takes ~30 seconds)
3. Success! ✅

## Step 5: Configure Public Permissions

To allow the frontend to read projects:

1. Go to **Settings** (left sidebar, bottom)
2. Click **"Users & Permissions Plugin"** → **"Roles"**
3. Click on **"Public"** role
4. Scroll down to find **"Project"**
5. Expand it and check these boxes:
   - ✅ `find` (get all projects)
   - ✅ `findOne` (get one project)
6. Click **"Save"** (top right)

## Step 6: Add Your First Project

1. Go to **"Content Manager"** (left sidebar)
2. Click **"Project"** under "Collection Types"
3. Click **"+ Create new entry"** (top right)

### Fill in the fields:

```
Title: Portfolio Website
Slug: portfolio-website
Short Description: Personal portfolio built with React, TypeScript, Vite, and Strapi CMS
Category: Web Application
Featured: ✅ (toggle on)
Order: 1
GitHub URL: https://github.com/davebulaquena/portfolio
Live URL: https://davebulaquena.com
Technologies (JSON): ["React", "TypeScript", "Vite", "Strapi", "Tailwind CSS", "TanStack Query"]
Start Date: 2024-10-01
```

**Description (Markdown):**
```markdown
A modern, full-stack portfolio website showcasing my work as a Full Stack Developer and Solutions Designer.

## Features
- Dynamic content management with Strapi CMS
- Type-safe development with TypeScript
- Dark mode support
- Responsive design
- Server-side state management with TanStack Query
- Component library with shadcn/ui

## Technical Highlights
- Monorepo architecture with pnpm workspaces
- Shared TypeScript types between frontend and backend
- Optimized build pipeline with Vite
- PostgreSQL database for production
```

**Thumbnail**: Upload a screenshot of your portfolio

4. Click **"Save"** (top right)
5. Click **"Publish"** (top right) - **Important!**

## Step 7: Test the API

Open this URL in your browser:
```
http://localhost:1337/api/projects
```

You should see JSON output with your project! 🎉

## Step 8: Update Root Package.json

The root package.json needs updating to include Strapi in the dev script.

**I'll do this for you automatically in the next step.**

## Step 9: Start Both Servers

Now you can run both frontend and Strapi:

```bash
# Terminal 1: Start Strapi
cd apps/cms
pnpm develop

# OR from root (after package.json update):
pnpm dev:cms

# Terminal 2: Start Frontend
pnpm dev:web

# OR start both:
pnpm dev
```

## Step 10: See It Live!

Visit **http://localhost:5173** and you should see:
- Your real project from Strapi
- No more "sample projects" message
- Loading skeleton appears briefly
- Real data displays!

---

## Troubleshooting

### Port 1337 already in use
```bash
lsof -ti:1337 | xargs kill -9
cd apps/cms
pnpm develop
```

### Strapi won't start
```bash
cd apps/cms
rm -rf .cache build
pnpm develop
```

### Projects not showing in frontend
1. ✅ Check Strapi is running: http://localhost:1337/admin
2. ✅ Check API works: http://localhost:1337/api/projects
3. ✅ Check Public permissions have `find` and `findOne` checked
4. ✅ Check project is **Published** (not just saved)

### Browser doesn't open automatically
Manually go to: http://localhost:1337/admin

---

## Next Steps After Success

Once you see your project in the frontend:

1. Add more of your real projects
2. Customize project fields as needed
3. Create Blog Post content type (optional)
4. Create Testimonials content type (optional)

---

## Ready to Start?

Run this command:

```bash
rm -rf apps/cms && npx create-strapi-app@latest apps/cms --quickstart --typescript
```

Then follow the steps above! I'll be here to help if you get stuck. 🚀
