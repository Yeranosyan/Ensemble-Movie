import { cn } from "@/utils/cn";

export const MovieGridItem = ({
  className,
  poster,
  icon,
  title,
  year,
  button,
}: {
  className?: string;
  poster?: React.ReactNode;
  icon?: React.ReactNode;
  title?: string | React.ReactNode;
  year?: string | React.ReactNode;
  button?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 p-4 bg-black/10 border-white/10 border justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className="flex flex-1 max-w-3xl h-full min-h-[2rem]">{poster}</div>
      <div className="group-hover/bento:translate-x-2 transition duration-500">
        {icon}
        <div className="font-sans font-bold text-neutral-800 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="text-xs text-neutral-800 dark:text-white/60">
          {year}
        </div>
        <div className="text-xs mt-2">{button}</div>
      </div>
    </div>
  );
};
