"use client";

import { FC, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/legacy/image";
import Link from "next/link";
import { getRandomFins } from "@/lib/actions/product.actions";
import { TiltCard1 } from "@/components/TiltCard";
import { InView } from "@/components/ui/in-view";
import { Fin } from "@/types";
import { Faq } from "@/components/Faq";
import Footer from "@/components/Footer";
import { InfiniteSliderVertical } from "@/components/InfiniteSliderVertical";
import About from "@/components/About";

const heroImages = [
  "/assets/images/hero1.jpg",
  "/assets/images/hero2.jpg",
  "/assets/images/hero3.jpg",
  "/assets/images/hero4.jpg",
  "/assets/images/hero5.jpg",
];

const HomePage: FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fins, setFins] = useState<Fin[]>([]);

  useEffect(() => {
    const fetchFins = async () => {
      try {
        const fetchedFins = await getRandomFins();
        setFins(fetchedFins);
      } catch (error) {
        console.error("Failed to fetch random fins:", error);
      }
    };

    fetchFins();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="text-gray-800 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-screen">
        <div className="absolute inset-0">
          <Image
            src={heroImages[currentImageIndex]}
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white p-4">
          <h1 className="text-5xl font-bold md:text-7xl mb-6">
            EXPLORE THE DEPTHS BETWEEN
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl">
            Discover the finest snorkeling fins and masks crafted for comfort,
            performance, and endless underwater adventures.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-dark text-white"
          >
            Shop Now
          </Button>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Featured Section */}
      <InView
        variants={{
          hidden: {
            opacity: 0,
            x: 100,
          },
          visible: {
            opacity: 1,
            x: 0,
          },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewOptions={{ margin: "0px 0px -350px 0px" }}
      >
        <section className="py-16 mt-[700px] md:mt-[1000px] lg:mt-20 overflow-x-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12 lg:px-20">
            <div className="flex flex-col items-center text-center">
              <Image
                src="/assets/images/fins.jpg"
                alt="Fins"
                width={300}
                height={300}
                className="rounded-sm"
              />
              <h3 className="text-2xl font-semibold mt-6">
                High-Performance Fins
              </h3>
              <p className="text-gray-600 mt-3">
                Experience unmatched comfort and propulsion with our
                state-of-the-art snorkeling fins.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image
                src="/assets/images/masks.jpg"
                alt="Masks"
                width={300}
                height={300}
                className="rounded-sm"
              />
              <h3 className="text-2xl font-semibold mt-6">
                Crystal-Clear Masks
              </h3>
              <p className="text-gray-600 mt-3">
                Explore the underwater world with our wide-view, fog-resistant
                snorkeling masks.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image
                src="/assets/images/snorkel.jpg"
                alt="Snorkel"
                width={300}
                height={300}
                className="rounded-sm"
              />
              <h3 className="text-2xl font-semibold mt-6">
                Essential Accessories
              </h3>
              <p className="text-gray-600 mt-3">
                Complete your gear with durable and reliable snorkeling
                accessories.
              </p>
            </div>
          </div>
        </section>
      </InView>

      {/* Featured Fins Section */}
      <InView
        variants={{
          hidden: {
            opacity: 0,
            scale: 1.5,
          },
          visible: {
            opacity: 1,
            scale: 1,
          },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewOptions={{ margin: "0px 0px -350px 0px" }}
      >
        <section className="py-16 px-6 md:px-12 lg:px-20 overflow-x-hidden">
          <h2 className="text-3xl md:text-5xl font-semibold mb-8 text-center">
            Featured Fins
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fins.map((fin) => (
              <div
                key={fin.id}
                className="flex flex-col items-center text-center cursor-pointer"
              >
                <Link href={`/shop/${fin.id}`}>
                  <TiltCard1
                    imageUrl={fin.imageUrl}
                    name={fin.title}
                    price={fin.price}
                  />
                </Link>
              </div>
            ))}
          </div>
        </section>
      </InView>

      {/* Call to Action Section */}
      <InView
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <section className="py-16 bg-primary text-white text-center overflow-x-hidden">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            Ready to Dive In?
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Upgrade your snorkeling experience with the best fins, masks, and
            accessories. Shop now and start your underwater adventure today!
          </p>
          <Link href="/shop">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-200"
            >
              Shop the Collection
            </Button>
          </Link>
        </section>
      </InView>

      {/* FAQ Section */}
      <InView
        variants={{
          hidden: {
            opacity: 0,
            x: -100,
          },
          visible: {
            opacity: 1,
            x: 0,
          },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewOptions={{ margin: "350px 0px 0px 0px" }}
      >
        <section className="container flex flex-col items-center justify-center py-16 px-6 md:px-12 lg:px-20 overflow-x-hidden">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">FAQ</h2>
          <Faq />
        </section>
      </InView>

      {/* Footer Section */}
      <InView
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <section className="overflow-x-hidden">
          <Footer />
        </section>
      </InView>
    </div>
  );
};

export default HomePage;
