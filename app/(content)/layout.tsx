import '/globals.css' //import only once in the root layout, because it will be applied to all pages and components in the app. If import in other pages or components, it will be applied multiple times and cause performance issues.
import fs from 'fs'

import Navbar from 'components/Navigation/Navbar/Navbar'
import { FooterMC } from 'components/Navigation/Footer'

import { Provider } from 'react-redux' //npm update before npm install react-redux
import { use } from 'react'

import navContent from 'resources/header.json' 



import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Welcome bro',
  description: 'Thong tin cap nhat',
}

const fileRead = fs.readFileSync("./resources/footer.json", 'utf-8') //if edit after build, need to restart the server to see the changes, because the file is read at build time and stored in memory. So any changes made to the file after the build will not be reflected until the server is restarted.
const contentFooter = JSON.parse(fileRead)

export default function RootLayout({children,}: {children: React.ReactNode}) 
{
  return (
    <html lang='en'>
      <body className={inter.className}>
          <Navbar headings = {navContent.navigation} burMenu={navContent.burMenu}/>
          {children}
          <FooterMC content={contentFooter} />
      </body>
    </html>
  )
}
