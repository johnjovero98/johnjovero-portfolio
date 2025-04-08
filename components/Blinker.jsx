export default function Blinker() {
    return <span className="relative flex size-1">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75"></span>
        <span className="relative inline-flex size-1 rounded-full bg-blue-300"></span>
    </span>
}