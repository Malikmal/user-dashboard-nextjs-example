import Image from "next/image";
import Header from "./_components/Header";

export default async function Home() {
  return (
    <main className="p-4 w-full flex flex-col gap-14">
      <Header title="About" />

      <section id="about" className="p-4 w-full flex flex-row gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="m-0 text-2xl font-semibold">
            Lorem ipsum dolor sit amet
          </h2>
          <p className="text-base">
            consectetur adipiscing elit. Nulla vel turpis turpis. Sed mauris
            mauris, aliquam sed ante ut, ullamcorper laoreet erat. Duis eu
            rutrum purus. Ut luctus bibendum tellus ut congue. Ut dolor nisi,
            maximus aliquam nulla sed, venenatis consequat arcu. Nulla hendrerit
            vehicula arcu. In consectetur, purus sed consequat posuere, orci
            nunc consequat ipsum, ut sodales urna massa at neque.{" "}
          </p>
          <p className="text-base">
            Nulla eget tellus sodales, venenatis lacus eget, lobortis libero.
            Cras scelerisque metus non mi condimentum, ac lacinia enim
            fermentum. Sed arcu tortor, hendrerit a eros ac, eleifend porta
            enim. Suspendisse molestie enim quam, a maximus massa faucibus nec.
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Integer tortor odio, iaculis eget lobortis
            iaculis, tempor nec ante. Aliquam venenatis nisl at ipsum commod
          </p>
        </div>
        <Image
          src="/about.png"
          alt="about"
          width={487}
          height={344}
          loading="lazy"
          className="rounded-lg"
        />
      </section>
    </main>
  );
}
