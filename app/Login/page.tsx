//replace logo with an animation icons svg library

// 'use client' //why is this necessary? because we are using useState and useEffect in the Login component, which are client-side hooks. By default, Next.js components are server-side rendered, so we need to specify that this component should be rendered on the client side.

import { Login } from "reuseable/components/Auth/Login"


const page = () => {
    return(
    <div className=" bg-gradient-to-r from-orange-200 to-red-100 p-8">
        <div className="flex justify-center md:justify-start">
            <Login />
        </div>
    </div>
    )
}

export default page