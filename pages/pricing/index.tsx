import  Link  from 'next/link';
import { MainLayout } from '../../components/layouts/MainLayout';

export default function AboutPage() {
  return (
   <MainLayout>
       <h1>Pricing Page</h1>
        <h1 className="title">
          {/* Ir a <a href="/">Home</a> */}
          Ir a <Link href='/about'>About</Link>
          <hr />
          Ir a <Link href='/'>Home</Link>
          <hr />
          Ir a <Link href='/'>Contact</Link>
        </h1>

        <p className="description">
          Edita el archivo {' '}
          <code className="code">pages/pricing.jsx</code>
        </p>
   </MainLayout>
  )
}
