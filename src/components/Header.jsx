export const Header = () =>{
    return(
        <nav id="header"className="bg-black text-white" >
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2" >
                <div className="logo-wrapper">
                    <img src= {"/"} alt="logo"/>
                </div>
                <div className="nav-menu-wrapper">
                    <div>Home</div>
                    <div>About</div>
                </div>
            </div>
        </nav>
    )
}