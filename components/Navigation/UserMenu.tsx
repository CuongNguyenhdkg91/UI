'use client'

import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/navigation";

interface MenuItemProps {
    label: string;
    onClick?: () => void;
    path?: string;
  }

export interface MenuItem{
    title: string
    url: string
}

const MenuItem: React.FC<MenuItemProps> = ({
      onClick,
      label,
      path
    }) => {
      const router = useRouter()
      const ClickMenu = () =>{
          onClick?onClick():onClick
          router.push('/'+(path??label))
        }

      return(
          <div  onClick={ClickMenu} 
                className="px-4 py-3 hover:bg-neutral-400 transition font-semibold">
              {label}
          </div>
      )
}


export const  UserMenu = ({burMenu}:{burMenu:MenuItem[]}) => {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)
    const toggleOpen = useCallback(() => {
        setIsOpen((state) => !state)
    },[])

    return(
        <div className="md:hidden relative">
            <div className="flex flex-row items-center gap-3">
                <div
                    className="text-sm font-semibold py-3 px-4 
                    rounded-full hover:bg-neutral-100 transition cursor-pointer
                    ">
                    Action to Do
                </div>

                <div    onClick={toggleOpen}
                        className="p-4 md:py-1 md:px-2 flex flex-row items-center gap-3 
                        rounded-full border-[1px] border-neutral-200 cursor-pointer hover:shadow-md transition
                        ">
                    <AiOutlineMenu/>
                </div>
            </div>
            {isOpen && (
                <div    className="absolute right-0 top-12 w-[40vw] md:w-full text-sm 
                        rounded-xl shadow-md bg-blue overflow-hidden
                        ">
                    {burMenu.map((item) => {
                        return(
                            <div  onClick={() => {router.push(item.url??'/'+item.title); toggleOpen();}} 
                                className="px-4 py-3 hover:bg-neutral-400 transition font-semibold">
                                {item.title}
                            </div>
                        )
                    })
                    }
                    <MenuItem
                    onClick={toggleOpen}
                    path='activity'
                    label = "Community"/>
                    <MenuItem
                    onClick={toggleOpen}
                    path='projects'
                    label = "projects"/>
                    <MenuItem
                    onClick={()=>{}}
                    label = "Login"/>
                </div>
            )}
        </div>

    )
}