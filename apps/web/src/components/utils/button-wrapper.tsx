import { Button } from "@workspace/ui/components/button"
import { cn } from "cn";
interface ButtonWrapperProps {
    className?: string;
    buttonLabel: string;
    buttonHref: string;
}
export default function ButtonWrapper({ className, buttonHref, buttonLabel}: ButtonWrapperProps) {
  return (
    <Button 
    render={<a href={buttonHref} />}
    className={cn("w-full lg:w-auto h-10 px-4 py-1", className)}>
        {buttonLabel}
    </Button>
  )
}
