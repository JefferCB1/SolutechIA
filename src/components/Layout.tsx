import { type FC, type ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-dark text-text font-sans">
            <Navbar />
            <main className="flex-grow pt-20">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
