import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12 mt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
