export const NavBar = () => {
    return (
        <div className="bg-green-400 flex justify-center align-center py-5 shadow-xl">
            <ul className="flex gap-9 text-2xl text-black">
                <li className="hover:text-white transition-all">
                    <a className="" href="/">Home</a>
                </li>
                <li className="hover:text-white transition-all">
                    <a href="/create">Create workout</a>
                </li>
            </ul>
        </div>
    )
}