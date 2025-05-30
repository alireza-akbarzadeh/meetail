'use client';

import {useState} from "react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {authClient} from "@/lib/auth-client";

export default function Home() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

const onSubmit = () => {
  authClient.signUp.email({email, name, password},{
      onSuccess:()=>{
          window.alert('success')
      },
      onError:()=>{
          window.alert('errors')
      },
  })
}

    return (
        <div className="flex flex-col gap-4 max-w-lg mx-auto">
            <Input placeholder='name' value={name} onChange={(event) => setName(event.target.value)}/>
            <Input placeholder='email' type='email' value={email} onChange={(event) => setEmail(event.target.value)}/>
            <Input placeholder='password' type='password' value={password} onChange={(event) => setPassword(event.target.value)}/>
            <Button type='submit' onClick={onSubmit}>create user</Button>
        </div>
    );
}
