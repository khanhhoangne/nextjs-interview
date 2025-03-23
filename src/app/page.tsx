import CategoryList from "@/components/ui/categories";
import ListCard from "@/components/ui/listCard";
import SearchBox from "@/components/ui/search";

export default function Home() {
  return (
    <div className="min-h-screen text-gray-900">
      {/* Main Content */}
      <section>
        <div className="my-15 flex justify-between">
          <img width={195} height={188} src="https://s3-alpha-sig.figma.com/img/e0d8/1ba5/cdfffb36b1833b8a6828c5ce85910382?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Tl4jx8eLct6F9P4EH-ODXRcnDwcsWyTQnVfKBGHo8ZJlb12zEEyzDNXnYUeXjq98JTVrFSKFV-1EnHGcvrOn5JYm7~A4qpItm8cL8eEEoIf7TtOKlaNNK8lkHH-xqOS8yyzQNpvHhpf0YKtpENl3SgXUXeo~zsooTwz42EdZWQjt6zYkGZnTcYUKejTFjsqFX~l0KGlTD0jonPvguGf7zMOJcy3-bTlm8XBYjR2qz3OchRFanT~0x5hOIm8XPwIuE19EfQAFblC9fr2A-ZBzyybhvn3JC1MwX4Nv8itxlZQvIMIps1EEwJPlZFU2qWCXYZhEAT~5Kff-Ysi7EQdPDw__" alt="" />
          <img src="/BlogFOSO.png" width={600} height={160} alt="Blog Image" className="rounded-md" />
          <img width={195} src="https://s3-alpha-sig.figma.com/img/b71b/64bf/30cd70aca236d986b8828bb5ad1ed8a5?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OqBF3cY4YCKaT2dd~wBA~5kqYKayt8ueCwXwgWH2sQnvvRbyEhG2lMRhAxOp4xiE5pjki8yWPb92NswfZ~xevKDe5jh1K6IiefqCVNcEpMsoj92b6XJwW4mHW9bN3bzERZNvqjSy3u8Ie4s2qqTEsdVXo6mM7rcXZXZCbyW-vmLuqyN-eE1FfUE9ya6ufmFLwCjEtKOfJBashVZcQGUmdCBVkH436-Vx88rXesNe81YynXXr4pOgJLoTiRyh7by68psebRVeOp9yFxSUFZDPcsbuiVfT3XpR-~Erl45OGPuUTF7BaaOMGcxAVwveBNSrSHMrTAUoHRe7Q0Hgzxuobw__" alt="" />
        </div>
        <span className="text-center block">Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!</span>
      </section>
      <main className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-12 gap-6">

        <section className="col-span-9 space-y-4">
          <article className="p-4 rounded-md">

            <h1 className="text-3xl font-extrabold mt-2">Tất cả bài viết</h1>
            <img src="/banner_left.png" width="100%" alt="Blog Image" className="rounded-md my-10" />
            <ListCard />
          </article>
        </section>

        <aside className="col-span-3 p-4 rounded-md">
          <h1 className="text-xl font-extrabold">Tìm kiếm</h1>
          <SearchBox />
          <CategoryList />
        </aside>
      </main>
    </div>
  );
}