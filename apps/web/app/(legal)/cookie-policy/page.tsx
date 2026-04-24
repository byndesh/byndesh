import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';

export const metadata: Metadata = {
  title: 'Cookie Policy — Bynd BD',
  description: 'How we use cookies on our website.',
};

export default function CookiePolicyPage() {
  return (
    <div className="bg-[#FAF9F2] min-h-screen pb-24">
      <Container className="pt-24 md:pt-32">
        <div className="max-w-3xl mx-auto flex flex-col space-y-12">
          
          <div className="space-y-4">
            <span className="text-[#FF5F0F] font-heading font-bold uppercase tracking-[0.2em] text-xs">
              LEGAL
            </span>
            <h1 className="font-heading font-bold uppercase text-4xl md:text-5xl text-[#1D1D1B] leading-[1.1]">
              COOKIE POLICY
            </h1>
            <p className="font-body text-bynd-ash text-sm">Last updated: October 2025</p>
          </div>

          <div className="prose prose-lg text-[#8E8D8A] font-body prose-headings:font-heading prose-headings:font-bold prose-headings:uppercase prose-headings:text-[#1D1D1B] prose-a:text-[#FF5F0F] max-w-none">
            <h2>What Are Cookies</h2>
            <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.</p>
            
            <h2>How We Use Cookies</h2>
            <p>Bynd BD uses cookies for the following purposes:</p>
            <ul>
              <li><strong>Essential Cookies:</strong> Required to enable core site functionality, such as securing your session when logged into the Traveler Dashboard.</li>
              <li><strong>Analytics Cookies:</strong> We use privacy-first, anonymized analytics to understand how visitors interact with our content so we can improve the user journey.</li>
              <li><strong>Preference Cookies:</strong> To remember your choices, such as whether you have dismissed the cookie banner.</li>
            </ul>

            <h2>Managing Cookies</h2>
            <p>You can control and/or delete cookies as you wish using your browser settings. You can delete all cookies that are already on your computer, and you can set most browsers to prevent them from being placed. If you rely on this site's Dashboard, you must accept essential cookies.</p>
            
            <p>For inquiries regarding our use of cookies, contact us at legal@byndbd.com.</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
