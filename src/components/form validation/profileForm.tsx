"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {Form,FormControl,FormDescription,FormField,FormItem,FormLabel,FormMessage} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";


const FormSchema = z.object({
    advice: z.string().min(1, "Advice is required"),
    fu_procedure: z.string().optional(),
    followup_required: z.boolean(),
    followup_notes: z.string().optional(),
    outcome: z.string(),
});


type FormData = z.infer<typeof FormSchema>
export default function AdviceForm() {
    const form = useForm<FormData>({
    
        resolver: zodResolver(FormSchema),
  defaultValues: {
    advice: "",
    fu_procedure: "",
    followup_required: false,
    followup_notes: "",
    outcome: "",  
  },
});

  const followupRequired = form.watch("followup_required");


    const onSubmit = (data: FormData) => {
        console.log("Submitted:", data);
        form.reset();
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 max-w-4xl mx-auto mt-10"
            >
                {/* Advice */}
                <FormField
                    control={form.control}
                    name="advice"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Advice on Discharge</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Enter discharge advice"
                                    {...field}
                                    className="resize-none"
                                />
                            </FormControl>
                            {/* <FormDescription>
                                Provide instructions or notes for patient discharge.
                            </FormDescription> */}
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Follow-up Procedure */}
                <FormField
                    control={form.control}
                    name="fu_procedure"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Follow-up Procedure</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter follow-up procedure" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Outcome */}
                <FormField
                    control={form.control}
                    name="outcome"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Outcome</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    className="flex gap-6 mt-2"
                                >
                                    {["Excellent", "Sufficient", "Average"].map((option) => (
                                        <FormItem
                                            key={option}
                                            className="flex items-center space-x-2"
                                        >
                                            <FormControl>
                                                <RadioGroupItem value={option} />
                                            </FormControl>
                                            <FormLabel className="font-normal">{option}</FormLabel>
                                        </FormItem>
                                    ))}
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Follow-up Required Checkbox */}
                <FormField
                    control={form.control}
                    name="followup_required"
                    render={({ field }) => (
                        <FormItem className="flex items-center gap-2">
                            <FormControl>
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            </FormControl>
                            <FormLabel className="font-medium">Follow-up Required</FormLabel>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Follow-up Notes (conditionally visible) */}
                {followupRequired && (
                    <FormField
                        control={form.control}
                        name="followup_notes"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Follow-up Notes</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Enter follow-up notes"
                                        {...field}
                                        className="resize-none"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                )}

                <Button type="submit" className="w-full">
                    Submit Advice
                </Button>
            </form>
        </Form>
    );
}
