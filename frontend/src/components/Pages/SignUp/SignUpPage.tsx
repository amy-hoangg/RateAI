import SignUpForm from "./SignUpForm"

const SignUpPage = () => {
    return (
        <SignUpForm onSubmit={function (): void {
            throw new Error("Function not implemented.")
        } } />
    )
}
export default SignUpPage