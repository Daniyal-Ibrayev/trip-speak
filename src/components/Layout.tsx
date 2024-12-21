import Header from "./Header";

interface Props {
    children: React.ReactNode;
}

const Layout = ({children}: Props) => {
    return (
        <div className="h-screen px-8 bg-slate-100">
            <Header />
            {children}
        </div>
    )
}
export default Layout;