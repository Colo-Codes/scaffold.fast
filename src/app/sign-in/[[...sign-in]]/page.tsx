import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    <main className="container-page flex min-h-screen items-center justify-center">
      <SignIn />
    </main>
  );
};

export default SignInPage;
