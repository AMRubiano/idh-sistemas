import { Head } from '@inertiajs/react';
import About from '@/components/home/About';
import Clients from '@/components/home/Clients';
import Contact from '@/components/home/Contact';
import Footer from '@/components/home/Footer';
import Hero from '@/components/home/Hero';
import IsoStandards from '@/components/home/IsoStandards';
import Methodology from '@/components/home/Methodology';
import Sectors from '@/components/home/Sectors';
import Services from '@/components/home/Services';
import Stats from '@/components/home/Stats';
import Testimonials from '@/components/home/Testimonials';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Header from '@/components/layout/header';

export default function Welcome() {
    return (
        <>
            <Head title="IDH Sistemas de Gestión" />

            <Header />

            <main className="bg-slate-50">
                <Hero />
                <Stats />
                <Services />
                <Sectors />
                <IsoStandards />
                <Methodology />
                <Clients />
                <Testimonials />
                <About />
                <WhyChooseUs />
                <Contact />
            </main>

            <Footer />
        </>
    );
}