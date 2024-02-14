import Image from "next/image";
import path from "path";
import Link from "next/link";
import getUsersDetail from "@/app/_services/getUsersDetail";
import Button from "@/app/_components/Button";
import Header from "@/app/_components/Header";

export default async function UserPage({ params }: { params: { id: number } }) {
  const { id } = params;
  const { data: user } = await getUsersDetail({ id });

  return (
    <main className="p-4 w-full flex flex-col gap-4 lg:gap-14">
      <Header title="Users" />

      <section
        id="users-list"
        className="p-4 w-full lg:w-fit flex flex-col gap-4 bg-white rounded-lg border border-[#DFE0EB]"
      >
        <h1 className="m-0 text-2xl font-semibold">
          {user.first_name} {user.last_name}
        </h1>
        <div className="w-full flex flex-col lg:flex-row gap-8">
          <div className="relative w-full min-w-[287px] h-auto aspect-square">
            <Image
              src={user.avatar}
              alt={`${user.first_name} ${user.last_name}`}
              // width={287}
              // height={302}
              fill
              className="rounded-lg row-span-full object-contain object-top"
            />
          </div>
          <dl className="pr-8 flex flex-col gap-9">
            <div className="flex flex-col gap-2">
              <dt className="text-[#252733]">First Name</dt>
              <dd className="text-[#828282]">{user.first_name}</dd>
            </div>
            <div className="flex flex-col gap-2">
              <dt className="text-[#252733]">Last Name</dt>
              <dd className="text-[#828282]">{user.last_name}</dd>
            </div>
            <div className="flex flex-col gap-2">
              <dt className="text-[#252733]">Email</dt>
              <dd className="text-[#828282]">{user.email}</dd>
            </div>
          </dl>
        </div>
      </section>
      <section className="w-full">
        <Link href="/user">
          <Button>Back</Button>
        </Link>
      </section>
    </main>
  );
}
