import MainLayout from '@/Layouts/MainLayout';
import Hero from '@/Components/Home/Hero';
import Marquee from '@/Components/Home/Marquee';
import About from '@/Components/Home/About';
import Outcomes from '@/Components/Home/Outcomes';
import Services from '@/Components/Home/Services';
import Process from '@/Components/Home/Process';
import Portfolio from '@/Components/Home/Portfolio';
import Upgrade from '@/Components/Home/Upgrade';
import WhyMRK from '@/Components/Home/WhyMRK';
import Engagements from '@/Components/Home/Engagements';
import Testimonials from '@/Components/Home/Testimonials';
import FAQ from '@/Components/Home/FAQ';
import Instagram from '@/Components/Home/Instagram';
import FinalCTA from '@/Components/Home/FinalCTA';
import WhatsAppBubble from '@/Components/Home/WhatsAppBubble';
import { Head } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <MainLayout>
            <Head title="MRK Design Agency" />
            <Hero />
            <Marquee />
            <About />
            <Outcomes />
            <Services />
            <Process />
            <Portfolio />
            <Upgrade />
            <WhyMRK />
            <Engagements />
            <Testimonials />
            <FAQ />
            <Instagram />
            <FinalCTA />
            <WhatsAppBubble />
        </MainLayout>
    );
}
