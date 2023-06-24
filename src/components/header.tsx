import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { ThemeToggle } from "./theme/theme-toggle";
import { buttonVariants } from "./ui/button";
import { useSession } from "next-auth/react";

export const Header = () => {
    const { data: session } = useSession();
    return (
        <div className="supports-backdrop-blur:bg-background/60 sticky top-0 mb-4 flex h-14 w-full items-center justify-between border-zinc-200 bg-background/95 backdrop-blur">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Avatar>
                            <AvatarImage src="" />
                            <AvatarFallback>RT</AvatarFallback>
                        </Avatar>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                            >
                                Pricing
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            {session ? (
                <div>Welcome, {session.user.name}!</div>
            ) : (
                <div className="flex space-x-2">
                    <Link
                        className={buttonVariants({ variant: "ghost" })}
                        href="/login"
                    >
                        Log in
                    </Link>
                    <Link
                        className={buttonVariants({ variant: "default" })}
                        href="/signup"
                    >
                        Sign up
                    </Link>
                </div>
            )}
        </div>
    );
};
