import Image from "next/image";
export default function Logo() {
    return (
        <Image
        src="/logo.png"
        alt="Logo"
        className="h-8"
        width={40}
        height={50}
        priority />
    );
}
