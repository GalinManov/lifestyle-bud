export const NavBar = () => {
    return (
        <div className="bg-green-400 flex justify-center align-center py-5">
            <ul className="flex gap-4 text-2xl text-black">
                <li className="hover:text-white transition-all">
                    <a className="">Home</a>
                </li>
                <li className="hover:text-white transition-all">
                    <a>Workouts</a>
                </li>
            </ul>
        </div>
    )
}