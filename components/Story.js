import Image from "next/image";

function Story({ img, username }) {
  console.log("img", img);
  return (
    <div className="z-0">
      <div className="relative h-14 w-14 p-[1.5px] border-2 border-red-500 object-contain rounded-full cursor-pointer hover:scale-110 transition transform duration-200 ease-out">
        <Image src={img} alt="" layout="fill" className="rounded-full" />
      </div>
      <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  );
}

export default Story;
