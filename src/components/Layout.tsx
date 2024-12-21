import Header from "./Header";

interface Props {
    children: React.ReactNode;
}

const Layout = ({children}: Props) => {
    console.log("asdfas")
    return (
        <div className="h-screen bg-slate-100 ">
            <Header />
            {children}
        </div>
    )
}
export default Layout;