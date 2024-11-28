import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <main className="flex justify-center h-screen w-full items-center">
      <SignIn />
    </main>
  );
};

export default SignInPage;
