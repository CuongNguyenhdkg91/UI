'use server'
import {redirect} from 'next/navigation'
import { cookies } from 'next/headers'


export default async function auth(formdata: FormData) {
    const pass = formdata.get('pass')
    console.log(`checking...:
        Date GMT+7: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Bangkok' })}
        ${pass}
        useragent: ${formdata.get('userAgent')} 
        `)
    if (pass=='1234'){
        cookies().set('Cookie1','!@#$1111',{
            httpOnly: true,
            secure: true,
            sameSite: 'none'
        })
        redirect('/Archive/Test')
    }

}