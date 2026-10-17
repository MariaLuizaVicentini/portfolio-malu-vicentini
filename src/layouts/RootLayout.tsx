import Background from '@/components/Background/Background';
import ChatBubble from '@/components/ChatBubble';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/NavBar/NavBar';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#05140C]"
      >
        Pular para o conteúdo
      </a>

      <Background />

      <Header />

      <main id="conteudo" className="relative z-[1]">
        {children}
      </main>

      <div className="relative z-[1]">
        <Footer />
      </div>

      <ChatBubble />
    </>
  );
}
