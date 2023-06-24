import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Button, buttonVariants } from "@/components/ui/button";
import { signIn } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main
            className={`container flex w-full max-w-7xl flex-col justify-between ${inter.className}`}
        >
            <Header />

            <Button onClick={() => signIn("google")}>
                Continue with Google
            </Button>
        </main>
    );
}
