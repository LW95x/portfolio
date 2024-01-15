import Image from "next/image";

export default function NavCard() {
  return (
    <div className="flex justify-center items-center relative">
      <div className="border border-white rounded mb-10 flex flex-row absolute">
        <div className="relative">
          <Image
            src="/ppic.jpg"

            width={200}
            height={200}
            className="object-cover rounded opacity-40"
            alt="author"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <p className="text-white text-lg bg-black bg-opacity-40 p-2 rounded">
              Growing Up Deaf
            </p>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/graduation3.jpg"
            alt="graduation"
            width={900}
            height={300}
            className="object-cover rounded opacity-40"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <p className="text-white text-lg bg-black bg-opacity-40 p-2 rounded">
              What University Taught Me
            </p>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/northcoders.avif"
            width={520}
            height={200}
            alt="northcoders"
            className="object-cover rounded opacity-40"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <p className="text-white text-lg bg-black bg-opacity-40 p-2 rounded">
              The Northcoders Experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
