import {authClient} from "@/lib/auth-client";

export  default async function Home() {

  const { data } = await authClient.getSession()

  return <div className="flex flex-col gap-4 max-w-lg mx-auto">
    {data?.session?.token && <div>Logged in</div>}
    this is a test
  </div>
}
