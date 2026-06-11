'use client'

import style from "./login.module.css"
import Input from "../Basic/Input"
import auth from "./action"
import Image from "next/image"
import {FaFacebook, FaGoogle, FaApple} from "react-icons/fa"
import {SiGoogle} from "react-icons/si"
import Link from "next/link"

import logoMC from "/resources/logoMC.png"

const Login = () => {
    return(
    <form action ={auth} >
        <div className="rounded-2xl overflow-hidden bg-white max-w-sm font-jim">
            <div className="h-[195px] bg-neutral-300 flex flex-col justify-center gap-4 text-center">
                <div className = "flex justify-center">
                    <Link href="/" aria-label="go to homepage">
                        <Image src={logoMC} alt="Logo MC 2026" className="w-[65px] h-auto"/>
                    </Link>
                </div>                
                <div className = "text-3xl" >Welcome</div>
                <div>Please enter your detail to sign in</div>
            </div>
            <div className="flex flex-col p-8 gap-5 text-center">

                {/* replace logo with an animation icons svg library */}
                <input placeholder="Username / Email" name="email" className={style.inputBar} />
                <input placeholder = "Password" id="password" name="pass" type="password" className={style.inputBar} />
                <div className="text-right">Forgot your password ?</div>
                <div>Or continue with </div>
                <div className = "w-full flex gap-8 justify-center">
                    <div className = {style['app-icon']}>
                        <FaGoogle className="h-3/5" />
                    </div>
                    <div className = {style['app-icon']}>
                        <FaFacebook className="text-blue-600 text-xl" />
                    </div>
                    <div className = {style['app-icon']}>
                        <FaApple className="h-3/5" />
                    </div>
                </div>
                <button type="submit" className="h-10 bg-neutral-300 border border-neutral-400 rounded-md hover:bg-neutral-400 active:bg-neutral-500 transition-colors">Log in</button>
                <div>Dont have an account? <span>Create new </span></div>
                <input type="hidden" name="userAgent" value={navigator.userAgent} />
                {/* <Input id="email" label="Email" type="email" required/>
                <Input id="password" label="Password" type="password" required/> */}
            </div>
        </div>
    </form>
    )
}

export {Login}