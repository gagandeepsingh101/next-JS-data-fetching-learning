import { getAllUser } from "@/utils/features";
import Link from "next/link";

export const metadata = {
  title:"Users",
}

export default async function Home() {
	let userData = await getAllUser();
	return <div>
  {userData?.map((user) => (
    <Link href={"/user/" + user?.id} key={user?.id}>
      <h1>{user?.name}</h1>
    </Link>
  ))}
  </div>
}
