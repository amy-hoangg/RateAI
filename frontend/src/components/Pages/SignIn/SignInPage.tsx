import SignInForm from "./SignInForm"

const SignInPage = () => {
    return (
        <SignInForm onSubmit={function (): void {
            throw new Error("Function not implemented.")
        } } />
    )
}

export default SignInPage