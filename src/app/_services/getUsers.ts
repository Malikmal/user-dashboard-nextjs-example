export default async function getUsers({
  page = 1,
}: {
  page?: string | number;
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/users?page=${page}`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data;
}
