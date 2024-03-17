import React from "react";


function Footer(props) {
    return (
        <footer style={{ marginTop: "100%" }}>
            <nav className='flex items-center container-sm bg-purple-500 justify-center' style={{ height: "75px" }}>
                <a href="https://www.facebook.com/L14L07I"><i className="ml-5 text-5xl fa-brands fa-facebook "></i></a>
                <a href="https://github.com/lamtailoi2"><i className="ml-5 text-5xl fa-brands fa-github"></i></a>

                <span className="text-xl">© 2024 Loi Lam</span>
            </nav>
        </footer>
    )
}

export default Footer