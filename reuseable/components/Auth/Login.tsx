'use client'

import Input from "../Basic/Input"
import auth from "./action"
import Image from "next/image"
import {FaFacebook, FaGoogle, FaApple} from "react-icons/fa"
import {SiGoogle} from "react-icons/si"

const Login = () => {
    return(
    <form action ={auth} >
        <div className="rounded-md bg-white mx-8 md:max-w-md md:mx-auto font-jim">
            <div className="h-[195px] bg-[#D9D9D9] flex flex-col items-center justify-center gap-4">
                <div className = "text-3xl" >Welcome</div>
                <div>Please enter your detail to sign in</div>
            </div>
            <div className="flex flex-col p-8 gap-5 text-center text-base">
                <div className = "px-0">
                    <Image className="mx-auto" src="/PageAsset/logoMC.png" width="62" height="45" alt="Logo SEO"/>
                </div>
                <div className = "w-full flex gap-8 justify-center">
                    <div className = "h-10 w-10 rounded-full border-solid border flex justify-center items-center">
                        <FaGoogle className="h-3/5" />
                    </div>
                    <div className = "w-10 h-10 rounded-full border border-solid flex justify-center items-center">
                        <FaFacebook className="text-blue-600 text-xl" />
                    </div>
                    <div className = "w-10 h-10 rounded-full border border-solid flex justify-center items-center">
                        <FaApple className="h-3/5" />
                    </div>                    
                </div>
                <div>Or continue with email</div>
                {/* replace logo with an animation icons svg library */}
                <input placeholder="Username / Email" name="email" className="h-8 w-[250px] flex bg-white border-b border-black p-2.5" />
                <input placeholder = "Password" id="password" name="pass" type="password" className="h-8 flex bg-[#F5EAEA] rounded-md border-b-2 border-black p-2.5" />
                <div className="text-right">Forgot your password ?</div>
                <button type="submit" className="bg-[#D9D9D9] border-[#B7B7B7] border h-10 flex items-center justify-center">Log in</button>
                <div>Dont have an account? <span>Create new </span></div>

                {/* <Input id="email" label="Email" type="email" required/>
                <Input id="password" label="Password" type="password" required/> */}
            </div>
        </div>
    </form>
    )
}

export {Login}