import MainLayout from '@/Layouts/MainLayout';
import ServicesHero from '@/Components/Services/ServicesHero';
import Stats from '@/Components/Services/Stats';
import Categories from '@/Components/Services/Categories';
import ServicesDetail from '@/Components/Services/ServicesDetail';
import ProcessBand from '@/Components/Services/ProcessBand';
import AddonBanner from '@/Components/Services/AddonBanner';
import ServicesCTA from '@/Components/Services/ServicesCTA';

export default function Services() {
    return (
        <MainLayout>
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
