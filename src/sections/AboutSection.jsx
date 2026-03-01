import { Palette, Heart, Sparkles } from "lucide-react";
export default function AboutSection() {
  return (
    <>
      <section id="about" className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="">
            <h1 className="text-center text-xl text-purple-600 mb-10">
              About Pawsiters
            </h1>
          </div>

          <div className="">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <img
                className="rounded-2xl mx-auto"
                src="/Visitkort_2024.jpg"
                alt=""
              />
              <div className="">
                <h1 className="text-xl text-center text-purple-600 mb-3">
                  Hi, We are Pawsisters!
                </h1>
                <p className="text-lg text-center">
                  We specialize in handmade croched crafts but we also have lots
                  of stickers and other handmade crafts. Our main theme is
                  cutesy but we also adapt other themes such as Sci-fi, video
                  games and anime depending on the con we are attending.
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 grid md:grid-cols-3  gap-5 md:gap-5">
            <div className="text-center p-5 rounded-2xl bg-pink-100 flex items-center justify-center flex-col">
              <div className="h-18 w-18 bg-pink-200 rounded-full flex items-center justify-center text-pink-600 mb-5">
                <Palette size={38} />
              </div>
              <h2 className="mt-3 text-xl mb-3">Unique Style</h2>
              <h3 className="text-lg">Cute, Kawaii & Colorful.</h3>
            </div>

            <div className="text-center p-5 rounded-2xl bg-purple-100 flex items-center justify-center flex-col ">
              <div className="h-18 w-18 bg-purple-200 rounded-full flex items-center justify-center text-purple-600 mb-5">
                <Heart size={38} />
              </div>
              <h2 className="mt-3 text-xl mb-3">Made with Love</h2>
              <h3 className="text-lg">We donate a portion to charity.</h3>
            </div>

            <div className="text-center p-5 rounded-2xl bg-blue-100 flex items-center justify-center flex-col">
              <div className="h-18 w-18 bg-blue-200 rounded-full flex items-center justify-center text-blue-600 mb-5">
                <Sparkles size={38} />
              </div>
              <h2 className="mt-3 text-xl mb-3">Always Creating</h2>
              <h3 className="text-lg">Popular and new items.</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
