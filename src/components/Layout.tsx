import { Header } from "./Header";

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <div className="h-auto min-h-screen px-10 bg-slate-100 dark:bg-slate-900 ">
            <Header />
            <div className="mt-2 px-10">
                {children}
            </div>

        </div>
    )
}
export default Layout;