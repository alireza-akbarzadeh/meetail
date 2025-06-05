import React from 'react'
import {Button} from "@/components/ui/button";
import {authClient} from "@/lib/auth-client";
import {GoogleButtonProps} from "@/modules/auth/ui/google-button";
import Image from "next/image";


type  GithubButtonProps = GoogleButtonProps

export function GithubButton(props:GithubButtonProps) {
    const {setError,setLoading,isLoading} = props;

    const handleLoginWithGithub = () => {
        setLoading(true)
        authClient.signIn.social({ provider: 'github',callbackURL:"/"},{
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
        <Image src='/github.svg' alt='google' width={18} height={18} />
        Github
    </Button>
    )
}
