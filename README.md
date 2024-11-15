## Modern Next.js Application

A production-ready Next.js application template with TypeScript, Tailwind CSS, and shadcn/ui components.

### Features

- ⚡️ Next.js 13 with App Router
- 🎨 Tailwind CSS for styling
- 🔒 TypeScript for type safety
- 📦 shadcn/ui components
- 🌙 Dark mode support
- 🔍 SEO optimized
- 📱 Responsive design
- 🧪 Jest and React Testing Library
- 🔄 State management with Zustand
- ✨ ESLint and Prettier for code quality

### Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy the environment variables:
   ```bash
   cp .env.example .env.local
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run test` - Run tests
- `npm run type-check` - Run TypeScript type checking

### Project Structure

```
├── app/                  # Next.js app directory
├── components/          # React components
├── lib/                 # Utility functions and configurations
├── public/             # Static assets
├── styles/             # Global styles
├── types/              # TypeScript type definitions
└── __tests__/          # Test files
```

### Environment Variables

Create a `.env.local` file with the following variables:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Testing

Run tests with:

```bash
npm run test
```

Add new tests in the `__tests__` directory following the naming convention `*.test.tsx` or `*.test.ts`.

### Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

### License

MIT