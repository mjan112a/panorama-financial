# Panorama Financial Analytics Platform

A web application that enables users to project their future long-term care needs using AI, facilitating personalized planning to protect their savings and loved ones.

## Features

- User Assessment Form
- AI-Driven Projections
- Personalized Planning
- Interactive Features
- Educational Resources

## Tech Stack

- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- Pinecone for Vector Database
- React Hook Form with Zod Validation

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/mjan112a/panorama-financial.git
cd panorama-financial
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example` and add your environment variables:
```
PINECONE_API_KEY=your-pinecone-api-key
PINECONE_ENVIRONMENT=your-pinecone-environment
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `/src/app` - Next.js app router pages and API routes
- `/src/components` - React components
- `/src/lib` - Utility functions and configurations

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Deployment

The application is configured for deployment on Vercel. Connect your GitHub repository to Vercel for automatic deployments.

## Environment Variables

- `PINECONE_API_KEY` - Your Pinecone API key
- `PINECONE_ENVIRONMENT` - Your Pinecone environment
- `NEXT_PUBLIC_SITE_URL` - Your site URL (e.g., http://localhost:3000)
- `JWT_SECRET` - Secret key for JWT tokens
- `SESSION_SECRET` - Secret key for session management

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
