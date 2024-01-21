import * as React from "react";
import BannerFirst from "../../assets/products/Ameera Ghee Toast.png";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function TohfaCarousel() {
  return (
    <Carousel className="w-[110rem]">
      <CarouselContent>
        <CarouselItem key={1}>
          <div className="p-1">
            <Card>
              <CardContent className="flex  items-center justify-center p-6">
                <Image
                  src={BannerFirst}
                  alt="banner-img"
                  width={600}
                  height={600}
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem key={1}>
          <div className="p-1">
            <Card>
              <CardContent className="flex  items-center justify-center p-6">
                <Image
                  src={BannerFirst}
                  alt="banner-img"
                  width={600}
                  height={600}
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
