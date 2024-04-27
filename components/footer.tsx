import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-20 mb-10 px-4 text-center text-gray-500 dark:text-white/40">
      <div className="flex flex-col sm:flex-row items-center justify-center mb-2">
        <Image
          src="/icon.png"
          alt="Entertainment Logo Icon"
          height={24}
          width={24}
          className="mt-1 mb-2 mr-4"
        />
        <span>&copy; 2024 Gagik Yeranosyan. All rights reserved.</span>
      </div>
      <span className="font-semibold">About this website:</span> build with
      React & Next.js, TypeScript, Tailwind CSS, Aceternity UI, OMDb API.
    </footer>
  );
}
