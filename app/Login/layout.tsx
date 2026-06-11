import '/globals.css'

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
        <body className='bg-orange-300'>
            {children}
        </body>
    </html>
  );
}
