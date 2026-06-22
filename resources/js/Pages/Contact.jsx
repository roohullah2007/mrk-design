import MainLayout from '@/Layouts/MainLayout';
import ContactHero from '@/Components/Contact/ContactHero';
import ContactForm from '@/Components/Contact/ContactForm';
import InfoStrip from '@/Components/Contact/InfoStrip';
import ContactServices from '@/Components/Contact/ContactServices';
import WhyMRK from '@/Components/Contact/WhyMRK';
import ContactCTA from '@/Components/Contact/ContactCTA';
import WhatsAppBubble from '@/Components/Contact/WhatsAppBubble';

export default function Contact() {
    return (
        <MainLayout darkFooter={true}>
            <ContactHero />
            <ContactForm />
            <InfoStrip />
            <ContactServices />
            <WhyMRK />
            <ContactCTA />
            <WhatsAppBubble />
        </MainLayout>
    );
}
