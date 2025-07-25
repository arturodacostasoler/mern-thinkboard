import React from 'react'
import { Link } from "react-router"
import { PlusIcon } from "lucide-react"

const Navbar = () => {
    return (
        <header className='border-b bg-base-300 border-base-content/10'>
            <div className='max-w-6xl p-4 mx-auto'>
                <div className='flex items-center justify-between'>
                    <h1 className='font-mono text-3xl font-bold tracking-tight text-primary'>
                        MERN - ThinkBoard
                    </h1>
                    <div className='flex items-center gap-4'>
                        <Link to="/create" m className='btn btn-primary'>
                            <PlusIcon className='size-5' />
                            <span>Nueva Nota</span>
                        </Link>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Navbar