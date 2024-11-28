import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center mt-6">
      <SignUp />
    </main>
  );
};

export default SignUpPage;
