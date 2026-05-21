import Navbar from '@/Components/Layout/Navbar';
import Footer from '@/Components/Layout/Footer';

export default function MainLayout({ children, darkFooter = false }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer dark={darkFooter} />
        </>
    );
}
