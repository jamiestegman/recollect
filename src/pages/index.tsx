import { Inter } from "next/font/google";
import Link from "next/link";
import { Header } from "@/components/header";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main
            className={`container flex w-full max-w-7xl flex-col justify-between ${inter.className}`}
        >
            <Header />

            {/* Hero */}
            <div className="prose-a:text-blue-600 mx-auto my-10 max-w-2xl text-center">
                <h1 className="scroll-m-20 text-5xl font-semibold tracking-tighter sm:text-7xl">
                    Your team’s
                    <br />
                    <span className="bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent">
                        second brain
                    </span>
                </h1>

                <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-lg text-lg">
                    Capture, <s className="text-muted-foreground">organize,</s>{" "}
                    and share knowledge amongst your team with less effort.
                    Remember anything instantly.
                </p>

                <div className="mt-10 flex max-w-fit space-x-4 mx-auto">
                    <Link
                        className={buttonVariants({ variant: "default" })}
                        href="/signup"
                    >
                        Start free <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                    <Link
                        className={buttonVariants({ variant: "outline" })}
                        href="https://github.com/jamiestegman/recollect"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Star on GitHub{" "}
                        <GitHubLogoIcon className="w-4 h-4 ml-2" />
                    </Link>
                </div>
            </div>
        </main>
    );
}
