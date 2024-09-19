import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export default async function Home() {
  const data = await client.fetch(`*[_type == "user"]`, {}, { cache: 'no-store' })
  console.log(data);

  return (
    <div>
      <h1 className="text-4xl font-bold">Users Data</h1>
      {
        data.map((user: any, index: number) => {
          return (
            <div>
              {user.first_name}
              <Image src={urlFor(user.image).url()} width={400} height={400} alt="image" />
            </div>
          )
        })
      }
    </div>
  );
}
