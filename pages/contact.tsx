import Head from 'next/head'
import  Link  from 'next/link';
import { MainLayout } from '../components/layouts/MainLayout';
import { Navbar } from '../components/Navbar';

export default function AboutPage() {
  return (
   <MainLayout>
       <h1>Contact Page</h1>
        <h1 className="title">
          {/* Ir a <a href="/">Home</a> */}
          Ir a <Link href='/about'>About</Link>
          <hr />
          Ir a <Link href='/'>Home</Link>
        </h1>

        <p className="description">
          Edita el archivo {' '}
          <code className="code">pages/contact.jsx</code>
        </p>
   </MainLayout>
  )
}
