import Link from 'next/link';
import { Button } from '@/components/Button'; // Assuming Button.tsx is in src/components
import { Card } from '@/components/Card';     // Assuming Card.tsx is in src/components

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 sm:p-8 bg-gradient-to-br from-slate-50 via-sky-50 to-cyan-100 text-gray-800">
      <Card className="max-w-xl w-full text-center shadow-2xl rounded-xl overflow-hidden">
        {/* Optional: Add a header image or decorative element within the card if desired later */}
        {/* <div className="bg-sky-600 p-4">
          <h2 className="text-white text-xl">An Introduction</h2>
        </div> */}
        
        <div className="p-6 sm:p-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-sky-700 mb-6">
            Welcome to the Islamic Introduction Quiz!
          </h1>
          <p className="text-gray-700 mb-8 text-md sm:text-lg leading-relaxed">
            This quiz offers a simple and engaging way to learn about the fundamental concepts of Islam. 
            It's designed for anyone interested—especially non-Muslims—to explore these teachings 
            in a respectful and educational format. Discover basic principles and enrich your understanding.
          </p>
          <Link href="/quiz" passHref legacyBehavior={false}> {/* Use legacyBehavior={false} for direct child component if Button doesn't wrap in <a> itself */}
            <Button 
              className="w-full max-w-md mx-auto !text-lg sm:!text-xl !py-3 !bg-sky-600 hover:!bg-sky-700 focus:!ring-sky-400"
              aria-label="Start the Islamic Introduction Quiz"
            >
              Start the Quiz
            </Button>
          </Link>
        </div>
      </Card>
      <footer className="mt-12 text-center text-sky-800/70 text-sm">
        <p>&copy; {new Date().getFullYear()} Islamic Quiz App. Aiming to foster understanding and knowledge.</p>
      </footer>
    </main>
  );
}
