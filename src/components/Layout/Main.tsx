const Main: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <main className="container relative z-10 mx-auto mb-12 max-w-7xl flex-grow p-6">
            {children}
        </main>
    )
}

export default Main
