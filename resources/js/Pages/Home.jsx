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
import ImageBanner from '@/Components/Home/ImageBanner';
import Testimonials from '@/Components/Home/Testimonials';
import ImageSlider from '@/Components/Home/ImageSlider';
import FAQ from '@/Components/Home/FAQ';
import Instagram from '@/Components/Home/Instagram';
import FinalCTA from '@/Components/Home/FinalCTA';
import WhatsAppBubble from '@/Components/Home/WhatsAppBubble';
import { Head } from '@inertiajs/react';

export default function Home() {
    return (
        <MainLayout>
            <Head title="MRK Design Agency" />
            <Hero />
            <Marquee />
            <About />
            <Outcomes />
            <Services />
            <Portfolio />
            <Engagements />
            <Upgrade />
            <ImageBanner />
            <Process />
            <WhyMRK />
            <Testimonials />
            <ImageSlider />
            <FAQ />
            <Instagram />
            <FinalCTA />
            <WhatsAppBubble />
        </MainLayout>
    );
}
