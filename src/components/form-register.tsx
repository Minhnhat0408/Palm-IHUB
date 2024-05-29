import { useRef } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Textarea } from "./ui/textarea";
import emailjs from "@emailjs/browser";
import { LoaderCircleIcon } from "lucide-react";
import { toast } from "sonner";
const ContactSchema = z.object({
  email: z
    .string({
      required_error: "Vui lòng nhập email.",
    })
    .email({
      message: "Email không hợp lệ.",
    }),
  name: z.string({
    required_error: "Vui lòng nhập họ và tên.",
  }),
  phone: z
    .string({
      required_error: "Vui lòng nhập số điện thoại.",
    })
    .regex(/^[0-9]+$/, "Số điện thoại không hợp lệ")
    .min(10, { message: "Số điện thoại không hợp lệ" }),
  message: z.string().optional(),
});
type tContactSchema = z.infer<typeof ContactSchema>;

export default function FormRegister() {
  const form = useForm<tContactSchema>({
    resolver: zodResolver(ContactSchema),
  });
  const form_ref = useRef<HTMLFormElement>(null);
  async function onSubmit(values: tContactSchema) {
    const res = await toast.promise(
      emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: values.name,
          from_email: values.email,
          to_name: "Palm Now",
          message: values.phone + " \nLời nhắn:" + values.message,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      ),
      {
        loading: "Loading...",
        success: () => {
          return `Cảm ơn bạn đã liên hệ với chúng tôi.`;
        },
        error: "Có lỗi xảy ra, vui lòng thử lại sau.",
      }
    );
    
    return res
  }
  return (
    <Form {...form}>
      <form
        ref={form_ref}
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("mt-9  w-full sm:space-y-8 space-y-6 ")}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="h-[50px]">
              <FormControl>
                <Input
                  placeholder={"Tên đầy đủ"}
                  type="text"
                  {...field}
                  className="rounded-none text-secondary   border-l-0 border-r-0 border-t-0 border-black bg-transparent text-base tracking-wider  duration-500 placeholder:text-muted-foreground focus-visible:border-b-secondary focus-visible:!ring-0 focus-visible:!ring-offset-0  focus-visible:placeholder:text-secondary"
                />
              </FormControl>
              <FormMessage className="" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="h-[50px] w-full">
              <FormControl>
                <Input
                  placeholder="Email"
                  type="email"
                  {...field}
                  className="rounded-none text-secondary border-l-0 border-r-0 border-t-0 border-black bg-transparent text-base tracking-wider  duration-500 placeholder:text-muted-foreground focus-visible:border-b-secondary focus-visible:!ring-0 focus-visible:!ring-offset-0  focus-visible:placeholder:text-secondary"
                />
              </FormControl>
              <FormMessage className="" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="h-[50px] w-full">
              <FormControl>
                <Input
                  placeholder={"Số điện thoại"}
                  type="text"
                  {...field}
                  className="rounded-none text-secondary border-l-0 border-r-0 border-t-0 border-black bg-transparent text-base tracking-wider  duration-500 placeholder:text-muted-foreground focus-visible:border-b-secondary focus-visible:!ring-0 focus-visible:!ring-offset-0  focus-visible:placeholder:text-secondary"
                />
              </FormControl>
              <FormMessage className="" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="h-[70px]">
              <FormControl>
                <Textarea
                  placeholder={"Lời nhắn của bạn (không bắt buộc)"}
                  {...field}
                  className="rounded-none text-secondary border-l-0 border-r-0 border-t-0 border-black bg-transparent text-base tracking-wider  duration-500 placeholder:text-muted-foreground focus-visible:border-b-secondary focus-visible:!ring-0 focus-visible:!ring-offset-0  focus-visible:placeholder:text-secondary"
                />
              </FormControl>
              <FormMessage className="" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="self-end !mt-20 flex bg-secondary hover:bg-secondary/80  font-bold uppercase tracking-widest "
        >
          {"Gửi yêu cầu"}
          {form.formState.isSubmitting && (
            <LoaderCircleIcon className="ml-3 animate-spin " />
          )}
        </Button>
      </form>
    </Form>
  );
}
