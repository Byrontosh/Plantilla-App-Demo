import {Outlet} from 'react-router-dom'

const Auth = () => {
    return (
        <main className="flex justify-center content-center w-full h-screen ">
        <Outlet/>
        </main>
    )
}

export default Auth