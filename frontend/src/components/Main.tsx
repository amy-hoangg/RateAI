

const Main = () => {
    return (
        <div>
          <AppBar/>
    
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="sign-in" element={<AITools />} exact />
            <Route path="repositories/:id" element={<HowTos />} exact />
            <Route path="create-review" element={<News />} exact />
            <Route path="sign-up" element={<SignIn />} exact />
            <Route path="sign-up" element={<SignIn />} exact />
            <Route path="sign-up" element={<SignIn />} exact />
    
            <Route path="*" element={<Navigate to="/" replace />} /> 
          </Routes>
          <Footer />
        </div>
    );
};
//path="*" is a wildcard that return to undefined ot non matching route 

export default Main;