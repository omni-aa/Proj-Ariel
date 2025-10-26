export default function LoadingSkeleton() {
    return (
        <div className="grid gap-16 animate-pulse">
            {[...Array(3)].map((_, i) => (
        <div
            key={i}
    className="h-[420px] rounded-3xl bg-gray-200 dark:bg-gray-800/50 shadow-inner"
        />
))}
    </div>
);
}
