import Link from 'next/link';
import Button from '../components/Button'; // Using relative path
import Card from '../components/Card'; // Import the new Card component
import { strings } from '../lib/i18n'; // Import strings

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center bg-gray-50">
      <Card className="max-w-lg"> {/* Use Card component and pass specific width */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
          {strings.home.welcomeTitle}
        </h1>
        <p className="text-md sm:text-lg text-gray-600 mb-8">
          {strings.home.welcomeMessage}
        </p>
        <Link href="/quiz" passHref>
          <Button className="w-full sm:w-auto"> {/* Added className for responsive width */}
            {strings.home.startButton}
          </Button>
        </Link>
      </Card>
    </main>
  );
}

// Simple i18n mock for demonstration
// (Removed local strings declaration to avoid redeclaration error)
