import MainLayout from '@/Layouts/MainLayout';
import ServicesHero from '@/Components/Services/ServicesHero';
import Stats from '@/Components/Services/Stats';
import Categories from '@/Components/Services/Categories';
import ServicesDetail from '@/Components/Services/ServicesDetail';
import ProcessBand from '@/Components/Services/ProcessBand';
import AddonBanner from '@/Components/Services/AddonBanner';
import ServicesCTA from '@/Components/Services/ServicesCTA';
import { useEffect } from 'react';

export default function Services() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <MainLayout darkFooter={true}>
            <ServicesHero />
            <Stats />
            <Categories />
            <ServicesDetail />
            <ProcessBand />
            <AddonBanner />
            <ServicesCTA />
        </MainLayout>
    );
}
