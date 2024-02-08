import Header from '@/components/shared/Header/Header';
import Home from '@/components/home/Home';
import MobileMenu from '@/components/shared/MobileMenu/MobileMenu';
import WelcomeMessage from '@/components/shared/WelcomeMessage';

export default function HomePage() 
{
  
  
  return (
    <div className="w-full min-h-[100dvh] flex justify-center home-background">
      <div className="w-full max-w-[1536px] flex-col min-h-full relative">
        <Header/>
        <MobileMenu/>
      
        <Home/>
        <WelcomeMessage/>
      </div>
    </div>
  );
}
