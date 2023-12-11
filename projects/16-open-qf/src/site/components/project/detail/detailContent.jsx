import { useServerSideProps } from "@/context/serverSideProps";

export default function DetailContent() {
  const { detail } = useServerSideProps();
  return (
    <div className="flex flex-col gap-[16px]">
      <h1 className="text16semibold text-text-primary">Content</h1>
      {/* TODO: handle html or markdown */}
      <span className="text15medium text-text-primary">{detail.content}</span>
    </div>
  );
}
