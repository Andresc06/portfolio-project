# Portfolio Project

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Features

- **Contact Form**: A fully functional contact form powered by `nodemailer` for sending emails.
- **Dynamic Animations**: Smooth page transitions and animations using `framer-motion`.
- **Responsive Design**: Optimized for all screen sizes using `Tailwind CSS`.
- **Reusable Components**: Modular and reusable UI components built with Radix UI primitives.
- **Project Showcase**: A slider to showcase projects with live links and GitHub repositories.

## Getting Started

### Prerequisites

Ensure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

### Running the Development Server

Start the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

Build the project for production:
```bash
npm run build
# or
yarn build
```

Start the production server:
```bash
npm run start
# or
yarn start
```

## Project Structure

```
├── app/
│   ├── about/
│   ├── contact/
│   ├── projects/
│   ├── layout.jsx
│   ├── page.jsx
│   └── api/
│       └── contact/
│           └── route.js
├── components/
│   ├── ui/
│   ├── Header.jsx
│   ├── Journey.jsx
│   ├── Skills.jsx
│   ├── Certificates.jsx
│   ├── Stats.jsx
│   ├── Photo.jsx
│   ├── Socials.jsx
│   └── WorkSliderBtns.jsx
├── lib/
│   └── utils.js
├── public/
│   └── assets/
├── styles/
│   └── globals.css
├── .env.local
├── package.json
├── README.md
└── next.config.mjs
```

## Dependencies

### Core Dependencies
- **Next.js**: Framework for React applications.
- **React**: Library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework.
- **Framer Motion**: Animation library for React.

### UI and Components
- **Radix UI**: Accessible UI primitives.
- **React Icons**: Icon library for React.

### Email Functionality
- **Nodemailer**: Library for sending emails.

### Others
- **Swiper**: Slider library for showcasing projects.
- **Class Variance Authority**: Utility for managing class names.

## Contact Form

The contact form is located at `/contact`. It uses `nodemailer` to send emails. Ensure the environment variables for email credentials are correctly configured in `.env.local`.

## Learn More

To learn more about Next.js, take a look at the following resources:
- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial.

## License

This project is licensed under the MIT License.
