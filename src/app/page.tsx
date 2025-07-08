import Link from 'next/link';
import Button from '@/components/Button'; // Using relative path
import Card from '@/components/Card'; // Import the new Card component
import { strings } from '@/lib/i18n'; // Import strings

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <Card className="max-w-lg shadow-2xl border-t-4 border-indigo-500 transform hover:scale-105 transition-all duration-300">
        <div className="mb-6">
          <div className="w-8 h-8 mx-auto mb-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
            {strings.home.welcomeTitle}
          </h1>
        </div>
        <p className="text-md sm:text-lg text-gray-600 mb-8 leading-relaxed">
          {strings.home.welcomeMessage}
        </p>
        <Link href="/quiz" passHref>
          <Button 
            size="lg" 
            variant="primary" 
            className="w-full sm:w-auto min-w-[200px] shadow-lg hover:shadow-xl"
          >
            {strings.home.startButton}
          </Button>
        </Link>
      </Card>
    </main>
  );
}
