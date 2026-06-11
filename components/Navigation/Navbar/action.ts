'use server'
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const verifyAuth: () => Promise<boolean> = async () => {
    const auth = cookies().get('Cookie1')
    if (auth?.value != '!@#$111'){console.log('not auth'); redirect('/Login'); }
    console.log (auth?.value)
    console.log('hello')
    return true
  }