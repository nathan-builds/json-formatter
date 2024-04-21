'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { headers } from 'next/headers';

const formSchema = z.object({
    subject: z.string().min(1, {
        message: 'Subject must have at least one character!'
    }),
    email: z.string().email({
        message: 'Must enter valid email.'
    }),
    body: z.string().min(1, {
        message: 'Need at least one character!.'
    })
});

// 2. Define a submit handler.

export default function ContactPage() {
    const [submitted, setIsSubmitted] = useState(false);

    async function onSubmit(values: z.infer<typeof formSchema>) {

        if (values) {
            const queryParams = {
                subject: values.subject,
                fromEmail: values.email,
                message: values.body
            };
            console.log(queryParams);

            fetch('/api/send', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(queryParams)
                }
            )
                .then((res) => {
                    console.log('Contact form submitted');
                });
        }
        setIsSubmitted(true);
    }


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            subject: '',
            email: '',
            body: ''
        }
    });


    return (

        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8 flex items-center justify-center">
                <div className="flex flex-col w-11/12  md:w-4/6 lg:w-1/2">
                    <div className=" text-xl font-bold">
                        Got ideas, comments, questions?
                    </div>
                    <div className="mb-10">
                        We&apos;d love to hear from you. Send us a message and
                        we&apos;ll get back to you.
                    </div>

                    <div className="flex flex-col gap-5">
                        <FormField
                            control={form.control}
                            name="subject"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Subject</FormLabel>
                                    <FormControl>
                                        <Input placeholder="subject" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="email" {...field} />
                                    </FormControl>
                                    <FormMessage className="mb-1"/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="body"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Message</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Enter message..." {...field} className="h-[300px]"/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="flex items-center self-center ">
                        {submitted ? <div className="flex gap-3 text-2xl mt-5 items-center">
                            <CheckCircle/>
                            <div className="pb-0.5">
                                Sent!
                            </div>
                        </div> : <Button type="submit" className="w-[150px] self-center mt-5 mb-10">Submit</Button>}


                    </div>
                </div>

            </form>
        </Form>
    );
}