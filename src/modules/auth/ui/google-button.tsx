import React from 'react'
import {Button} from "@/components/ui/button";
import {authClient} from "@/lib/auth-client";
import Image from "next/image";

export type GoogleButtonProps = {
    setError: (error: string | null) => void
    setLoading: (loading:boolean) => void
    isLoading:boolean
}

export function GoogleButton(props: GoogleButtonProps) {
    const {setError,setLoading,isLoading} = props;

    const handleLoginWithGithub = () => {
        setLoading(true)
        authClient.signIn.social({ provider: 'google', callbackURL:"/"},{
            onSuccess: () => {
                setLoading(false)
            }
            ,onError: ({error}) => {
                setError(error.message)
                setLoading(false)
            }})
    }
    return (
    <Button onClick={handleLoginWithGithub} disabled={isLoading} variant="outline" type="button" className="w-full">
        <Image src='/google.svg' alt='google' width={18} height={18} />
        Goggle
    </Button>
    )
}
