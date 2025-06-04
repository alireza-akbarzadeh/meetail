'use client'
import {authClient} from "@/lib/auth-client";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

export function HomeView() {
    const {push} = useRouter();
    const {data: session} = authClient.useSession()

    if (!session) return (
        <p>loading...</p>
    )

    return (
        <div className="flex flex-col gap-4 max-w-lg mx-auto">
            {session.user.name}
            <Button onClick={() => authClient.signOut({ fetchOptions: {onSuccess: () => push('/sign-in')}})}>
                Sign out
            </Button>
        </div>
    )
}
