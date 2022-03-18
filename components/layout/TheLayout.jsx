import Header from './TheHeader';
import Footer from './TheFooter';

export default function Layout({ children }) {
  return (
    <>
      <div className="py-5 bg-sky-900 text-white overflow-auto h-screen  ... lg:p5 scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-slate-300">
        <Header />
        <main className='mb-20'>
        {children}
        </main>
      </div>
      <Footer />
    </>
  );
}
