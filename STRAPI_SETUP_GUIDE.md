# Strapi CMS Setup Guide

## Step 1: Initialize Strapi

Run this command from the **project root**:

```bash
cd apps
npx create-strapi-app@latest cms --quickstart --typescript --skip-cloud
```

### During Installation:
1. When asked **"Participate in anonymous A/B testing?"** → Type `N` and press Enter
2. Wait for installation (takes 2-3 minutes)
3. Strapi will automatically start and open in your browser

### First Launch:
1. Browser opens at `http://localhost:1337/admin`
2. Create your **first admin user**:
   - First Name: Dave
   - Last Name: Bulaquena
   - Email: dave@davebulaquena.com (or your preferred email)
   - Password: Choose a strong password (save it!)
3. Click **Let's start**

---

## Step 2: Configure Database (PostgreSQL for Production)

For **local development**, Strapi uses SQLite (already configured).

For **production on Railway**, we'll use PostgreSQL (configured later in deployment).

---

## Step 3: Create Content Types

### 3.1 Create "Project" Content Type

1. In Strapi admin, go to **Content-Type Builder** (left sidebar)
2. Click **"+ Create new collection type"**
3. Enter **Display name**: `Project`
4. Click **Continue**

#### Add Fields to Project:

**Text Fields:**
- `title` (Short text, Required)
- `slug` (Short text, Required, Unique)
- `shortDescription` (Short text, Required)
- `category` (Short text)
- `githubUrl` (Short text)
- `liveUrl` (Short text)
- `caseStudyUrl` (Short text)

**Rich Text:**
- `description` (Rich text - Markdown, Required)

**Number:**
- `order` (Number - integer, Default: 0)
- `readingTime` (Number - integer)

**Boolean:**
- `featured` (Boolean, Default: false)

**Date:**
- `startDate` (Date)
- `endDate` (Date)

**JSON:**
- `technologies` (JSON - will store array of strings)

**Media:**
- `thumbnail` (Single media, Required)
- `images` (Multiple media)

**Advanced Settings** (for each field):
- Make `title`, `slug`, `description`, `shortDescription`, `thumbnail` **Required**
- Make `slug` **Unique**

4. Click **Save** (top right)
5. Wait for server restart

### 3.2 Create "Blog Post" Content Type

1. Click **"+ Create new collection type"**
2. Display name: `BlogPost`

#### Add Fields:

**Text:**
- `title` (Short text, Required)
- `slug` (Short text, Required, Unique)
- `excerpt` (Short text, Required)
- `author` (Short text, Default: "Dave Charm Bulaquena")
- `seoTitle` (Short text)
- `seoDescription` (Short text)

**Rich Text:**
- `content` (Rich text - Markdown, Required)

**Number:**
- `readingTime` (Number - integer)

**Boolean:**
- `featured` (Boolean, Default: false)

**Media:**
- `coverImage` (Single media, Required)

**Relation:**
- Add relation to `Category` (Many-to-Many)
- Add relation to `Tag` (Many-to-Many)

Click **Save**

### 3.3 Create "Category" Content Type

1. Display name: `Category`

**Fields:**
- `name` (Short text, Required)
- `slug` (Short text, Required, Unique)
- `description` (Long text)

Click **Save**

### 3.4 Create "Tag" Content Type

1. Display name: `Tag`

**Fields:**
- `name` (Short text, Required)
- `slug` (Short text, Required, Unique)

Click **Save**

### 3.5 Create "Testimonial" Content Type

1. Display name: `Testimonial`

**Fields:**
- `name` (Short text, Required)
- `title` (Short text, Required)
- `company` (Short text, Required)
- `content` (Long text, Required)
- `linkedinUrl` (Short text)
- `order` (Number - integer, Default: 0)
- `featured` (Boolean, Default: false)
- `avatar` (Single media)

Click **Save**

---

## Step 4: Configure Permissions

### Make API Publicly Readable:

1. Go to **Settings** → **Users & Permissions Plugin** → **Roles**
2. Click on **Public** role
3. Expand each content type (Project, BlogPost, Category, Tag, Testimonial)
4. Check these permissions for each:
   - ✅ `find` (find all entries)
   - ✅ `findOne` (find one entry)
5. Click **Save** (top right)

This allows the frontend to read data without authentication.

---

## Step 5: Add Sample Data

### Add a Sample Project:

1. Go to **Content Manager** → **Project** → **Create new entry**
2. Fill in:
   - **Title**: "E-Commerce Platform"
   - **Slug**: "e-commerce-platform"
   - **Short Description**: "Full-stack e-commerce with payment processing"
   - **Description**: (Add detailed markdown)
   - **Category**: "Web Application"
   - **Technologies**: `["React", "Node.js", "PostgreSQL", "Stripe"]`
   - **Featured**: true
   - **Order**: 1
   - **GitHub URL**: Your GitHub link
   - **Live URL**: Your demo link
   - Upload **Thumbnail** (any project screenshot)
3. Click **Save**
4. Click **Publish** (top right)

### Add a Sample Blog Post:

1. **Content Manager** → **BlogPost** → **Create new entry**
2. Fill sample data
3. **Save** and **Publish**

### Add Categories and Tags:

Create a few categories:
- Frontend
- Backend
- DevOps
- Design

Create a few tags:
- React
- TypeScript
- AWS
- etc.

---

## Step 6: Test API Endpoints

Open these URLs in your browser:

```
http://localhost:1337/api/projects
http://localhost:1337/api/blog-posts
http://localhost:1337/api/categories
http://localhost:1337/api/tags
http://localhost:1337/api/testimonials
```

You should see JSON responses with your data!

---

## Step 7: Update Frontend Environment

1. Ensure `.env.local` in `apps/web/` has:
   ```
   VITE_STRAPI_API_URL=http://localhost:1337
   ```

2. This is already configured in your project!

---

## Step 8: Start Both Servers

From project root:

```bash
# Terminal 1: Start Strapi
pnpm dev:cms

# Terminal 2: Start Frontend
pnpm dev:web

# Or start both together:
pnpm dev
```

---

## Common Issues & Solutions

### Issue: Port 1337 already in use
**Solution:**
```bash
# Kill process on port 1337
lsof -ti:1337 | xargs kill -9
```

### Issue: Strapi won't start
**Solution:**
```bash
cd apps/cms
rm -rf .cache build
pnpm develop
```

### Issue: Can't see data in frontend
**Solution:**
1. Check Strapi is running on port 1337
2. Check Public role has `find` and `findOne` permissions
3. Check data is **Published** (not just saved)

---

## Next Steps After Setup

Once Strapi is running with sample data:

1. **I'll help you** connect the frontend Projects component to the Strapi API
2. **I'll create** the API service functions
3. **I'll update** the Projects component to fetch real data
4. **You'll see** your real projects displayed with live data!

---

## Quick Start Commands

```bash
# Initialize Strapi (first time only)
cd apps
npx create-strapi-app@latest cms --quickstart --typescript --skip-cloud

# After initialization, from project root:
pnpm dev:cms          # Start Strapi admin
pnpm dev:web          # Start frontend
pnpm dev              # Start both (after setup complete)
```

---

## When You're Ready

After completing Steps 1-6 above, let me know and I'll:
1. Create the API service layer in the frontend
2. Update the Projects component to use real Strapi data
3. Add loading states and error handling
4. Test the integration end-to-end

You're about to have a fully dynamic CMS-powered portfolio! 🚀
