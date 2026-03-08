import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
  return (
    <main className="container-page flex min-h-screen items-center justify-center">
      <SignUp />
    </main>
  );
};

export default SignUpPage;
