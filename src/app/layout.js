import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import { ToastContainer } from '@/utils/react-toastify/toastContainer';
import { UserProvider } from '@/utils/useContext';
import { Inter } from 'next/font/google';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'V8 Wardrobe',
  description: "Ignite Your Style with V8 Wardrobe's Customizable Car T-Shirts",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <NavBar />
          {children}
          <Footer />
          <ToastContainer />
        </UserProvider>
      </body>
    </html>
  )
}