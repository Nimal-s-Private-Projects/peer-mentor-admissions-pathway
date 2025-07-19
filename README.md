# Peer Mentor Admissions Landing Page

A fully responsive, production-ready landing page for connecting high school students with peer mentors from top universities.

## Project info

**URL**: https://lovable.dev/projects/4f946b37-4354-4ee9-a756-57ec2ee0aeed

## Features

- **Mobile-first responsive design** with breakpoint at 768px
- **Smooth scrolling navigation** between sections
- **Interactive counselor carousel** with navigation arrows
- **Semantic HTML5** structure for accessibility
- **Custom design system** with consistent colors and typography
- **Production-ready code** with clean, well-commented components

## Customizing Counselor Data

To replace placeholder counselor profiles with real data:

### 1. Update Counselor Information

Edit `src/components/CounselorCarousel.tsx` and modify the `counselors` array:

```javascript
const counselors = [
  {
    name: "Your Mentor Name",
    school: "University '25",
    major: "Major Field",
    admits: "School1, School2, School3",
    blurb: "Personal quote about their experience and expertise.",
    rate: "$XX/hr",
    photo: yourMentorPhoto, // Import your image
    linkedinUrl: "https://linkedin.com/in/yourmentor"
  },
  // Add more counselors...
];
```

### 2. Replace Profile Photos

1. Add new photos to `src/assets/` directory
2. Import them at the top of `CounselorCarousel.tsx`:
   ```javascript
   import yourMentorPhoto from '@/assets/your-mentor-photo.jpg';
   ```
3. Update the `photo` field in the counselor object

### 3. Customize Branding

#### Colors
Edit `src/index.css` to change the color scheme:
```css
:root {
  --navy: 208 50% 21%; /* Navy for headlines */
  --teal: 178 100% 35%; /* Teal for buttons/badges */
  --dark-gray: 0 0% 20%; /* Body text */
  --light-gray: 0 0% 96%; /* Background sections */
}
```

#### Typography
Modify font sizes and styles in `src/index.css`:
```css
h1 {
  @apply text-5xl font-bold; /* Adjust size as needed */
}
```

### 4. Update Content

- **Hero section**: Edit `src/components/Hero.tsx`
- **How It Works**: Modify steps in `src/components/HowItWorks.tsx`
- **Advantages**: Update benefits in `src/components/Advantages.tsx`
- **Footer**: Change links and company info in `src/components/Footer.tsx`

## Design System

The project uses a carefully crafted design system with:

- **Navy (#1A2A4B)**: Headlines and primary text
- **Teal (#00B3A4)**: Buttons, badges, and accent elements  
- **Dark Gray (#333333)**: Body text
- **Light Gray (#F5F5F5)**: Section backgrounds

All colors are defined as HSL CSS custom properties for easy theming and consistency.

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/4f946b37-4354-4ee9-a756-57ec2ee0aeed) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/4f946b37-4354-4ee9-a756-57ec2ee0aeed) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
