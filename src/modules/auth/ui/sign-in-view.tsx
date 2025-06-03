'use client';

import { Card, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/input";
import { Form , FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export  function SignInView() {

    const {}=useForm()

    return (
        <div className="flex flex-col gap-6">
         <Card className="overflow-hidden p-0">
            <CardContent className="grid p-0 md:grid-cols-2">
                <form action="">col 1</form>
                <div className="bg-radial from-green-500 to-green-800 hidden md:flex flex-col gap-y-4 items-center justify-center">
                    <img src="/logo.svg" alt="image" className="h-[92px] w-[92px]" />
                    <p className="text-2xl font-semibold text-white">
                        Meet.AI
                    </p>
                </div>
            </CardContent>
        </Card>
        </div>
    )
}