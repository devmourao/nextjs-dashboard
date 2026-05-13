import SideNav from '@/app/ui/dashboard/sidenav';
import Footer from '@/app/ui/dashboard/footer'; // Importe o componente aqui
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      {/* Adicionei flex e flex-col na div abaixo para o footer descer */}

      <div className="flex grow flex-col p-6 md:p-12 md:overflow-y-auto">
        <div className="grow">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
}