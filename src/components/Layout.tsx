import { Header } from "./Header";

interface Props {
    children: React.ReactNode;
}

const Layout = ({children}: Props) => {
    return (
        <div className="h-auto min-h-screen px-8 bg-slate-100">
            <Header />
            <div className="mt-10 p-10">
            {children} 
                </div>        
               
        </div>
    )
}
export default Layout;