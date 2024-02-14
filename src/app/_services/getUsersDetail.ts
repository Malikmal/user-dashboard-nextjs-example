export default async function getUsersDetail({ id }: { id: number }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}
