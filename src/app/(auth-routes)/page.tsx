import ContainerFormsComponent from "@/components/forms/ContainerFormsComponent";

export default function Home() {

  return (
    <main className="w-full h-screen flex justify-center items-center flex-col gap-5 text-cyan-900">
      <section>
        <ContainerFormsComponent />
      </section>
    </main>
  );
}
