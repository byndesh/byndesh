/**
 * @email NewsletterWelcome
 * @description Welcome email for new newsletter subscribers
 */

interface NewsletterWelcomeProps {
  recipientName: string;
  // TODO: add relevant props
}

export default function NewsletterWelcome({ recipientName }: NewsletterWelcomeProps) {
  return (
    <div style={{ fontFamily: 'Georgia, serif', maxWidth: 600, margin: '0 auto', padding: 32 }}>
      <h1 style={{ fontFamily: 'Helvetica, sans-serif', color: '#1A1A1A' }}>
        Beyndesh
      </h1>
      <p>Dear {recipientName},</p>
      {/* TODO: complete NewsletterWelcome email template */}
      <p style={{ color: '#E8652D', fontWeight: 'bold' }}>Beyond the Land.</p>
    </div>
  );
}
