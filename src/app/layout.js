import Navbar from '@/components/shared/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/shared/Footer'
import AuthProvider from '@/context/AuthProvider'
import ReactQueryProvider from './ReactQueryProvider'
// You can also use <link> for styles
// ..
// ..

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TechWeave',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <ReactQueryProvider>


          <AuthProvider>


            <main >


              <Navbar>



              </Navbar>


              {children}

              <Footer />
            </main>

          </AuthProvider>
        </ReactQueryProvider>


      </body>
    </html>
  )
}
