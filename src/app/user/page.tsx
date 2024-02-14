import Image from "next/image";
import getUsers from "../_services/getUsers";
import Link from "next/link";
import Button from "../_components/Button";
import Header from "../_components/Header";

export default async function UserPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const { page: currentPage } = searchParams;
  const {
    page,
    per_page,
    total,
    total_pages,
    data: users,
  } = await getUsers({ page: currentPage || 1 });

  const currentStartRow = per_page * (page - 1) + 1;
  const currentEndRow = per_page * (page - 1) + users.length;

  return (
    <main className="p-4 w-full flex flex-col gap-14">
      <Header title="Users" />

      <section
        id="users-list"
        className="p-4 w-full flex flex-col gap-4 bg-white rounded-lg border border-[#DFE0EB]"
      >
        <h2 className="m-0 text-lg font-bold">All users</h2>
        <table className="w-full table-fixed">
          <thead className="text-[#9FA2B4] text-sm font-bold">
            <tr>
              <th className="p-4 border-b border-b-[#DFE0EB]">Full name</th>
              <th className="p-4 border-b border-b-[#DFE0EB]">Email</th>
              <th className="p-4 border-b border-b-[#DFE0EB]"></th>
            </tr>
          </thead>
          <tbody className="text-[#252733] font-semibold text-sm">
            {users.map((user: any) => (
              <tr key={user.id}>
                <td className="p-4 border-b border-b-[#DFE0EB] w-full inline-flex items-center gap-2">
                  <Image
                    src={user.avatar}
                    alt={`${user.first_name} ${user.last_name}`}
                    width={44}
                    height={44}
                    loading="lazy"
                    className="rounded-full"
                  />
                  <span className="">
                    {user.first_name} {user.last_name}
                  </span>
                </td>
                <td className="p-4 border-b border-b-[#DFE0EB]">
                  {user.email}
                </td>
                <td className="w-full inline-flex justify-end p-4 border-b border-b-[#DFE0EB]">
                  <Link href={`/user/${user.id}`}>
                    <Button>View Detail</Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-4 w-full inline-flex justify-end gap-2 text-sm text-[#9FA2B4]">
          <span>
            {currentStartRow} - {currentEndRow} of {total}
          </span>
          <Link
            href={{
              pathname: "/user",
              query: {
                page: page - 1 || 1,
              },
            }}
          >
            <ChevronLeftSvg className="" />
          </Link>
          <Link
            href={{
              pathname: "/user",
              query: {
                page: page + 1 > total_pages ? total_pages : page + 1,
              },
            }}
          >
            <ChevronLeftSvg className=" rotate-180" />
          </Link>
        </div>
      </section>
    </main>
  );
}

function ChevronLeftSvg(props: any) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15 18L9.07071 12.0707C9.03166 12.0317 9.03166 11.9683 9.07071 11.9293L15 6"
        stroke="#9FA2B4"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}