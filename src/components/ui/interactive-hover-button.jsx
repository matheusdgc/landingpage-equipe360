import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const InteractiveHoverButton = React.forwardRef(
  ({ text = "Button", className, dotClassName, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative cursor-pointer overflow-hidden rounded-full border bg-background px-6 py-3 text-center font-semibold transition-shadow duration-300 hover:shadow-[0_0_25px_rgba(232,119,46,0.5)]",
          className
        )}
        {...props}
      >
        <span className="relative z-10 inline-flex items-center gap-2 transition-all duration-300 group-hover:text-brand-orange">
          {text}
          <ArrowRight className="h-4 w-4 translate-x-0 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
        </span>
        <div
          className={cn(
            "absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg opacity-0 transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:opacity-100",
            dotClassName ?? "bg-white"
          )}
        />
      </button>
    );
  }
);

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
