'use client';

import {Card, CardContent} from "@/components/ui/card";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Alert, AlertTitle} from "@/components/ui/alert";
import {OctagonAlertIcon} from "lucide-react";
import Link from "next/link";


const signInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1, {message: "password is required"})
});

export function SignInView() {

    const signInForm = useForm<z.infer<typeof signInSchema>>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    return (
        <div className="flex flex-col gap-6">
            <Card className="overflow-hidden p-0">
                <CardContent className="grid p-0 md:grid-cols-2">
                    <Form {...signInForm}>
                        <form className='p-6 md:p-8'>
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col items-center text-center">
                                    <h1 className='text-2xl font-bold'>
                                        Welcome back
                                    </h1>
                                    <p className='text-muted-foreground text-balance'>
                                        Login to your account
                                    </p>
                                </div>
                                <div className="grid gap-3">
                                    <FormField control={signInForm.control} render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input type='email' placeholder='m@example.com' {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )} name='email'/>
                                </div>
                                <div className="grid gap-3">
                                    <FormField control={signInForm.control} render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input type='password' placeholder='********' {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )} name='password'/>
                                </div>
                                {true && (
                                    <Alert className='bg-destructive/10 border-none'>
                                        <OctagonAlertIcon className='size-4 !text-destructive'/>
                                        <AlertTitle>Error</AlertTitle>
                                    </Alert>
                                )}
                                <Button type='submit'>Login</Button>
                                <div className="relative text-center text-sm">
                                    <div
                                        className="absolute inset-0 top-1/2 z-0 border-t border-muted-foreground"></div>
                                    <span className="relative z-10 bg-card text-muted-foreground px-2">
                                            Or continue with
                                        </span>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <Button variant='outline' type='button' className='w-full'>
                                        Google
                                    </Button>
                                    <Button variant='outline' type='button' className='w-full'>
                                        Github
                                    </Button>
                                </div>
                                <div className="text-center text-sm">Don&#39;t hav an account? {" "}<Link
                                    href='/sign-up' className='underline underline-offset-4'>Sign Up</Link>
                                </div>
                            </div>
                        </form>
                    </Form>
                    <div
                        className="bg-radial from-green-500 to-green-800 hidden md:flex flex-col gap-y-4 items-center justify-center">
                        <img src="/logo.svg" alt="image" className="h-[92px] w-[92px]"/>
                        <p className="text-2xl font-semibold text-white">
                            Meet.AI
                        </p>
                    </div>
                </CardContent>
            </Card>
            <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline-offset-4 *:[a]:underline">
                By clicking continue, you agree to our <a href="#"> Terms of services</a> and
                <a href="#" className='pl-1'>
                    Privacy Policy.
                </a>
            </div>
        </div>
    )
}