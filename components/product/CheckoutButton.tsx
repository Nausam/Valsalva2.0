import { Fin } from "@/types";
import React, { useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import state from "@/store";
import CustomSelect from "../shared/CustomSelect";
import { cuts } from "@/utils/data";
import Image from "next/image";

const CheckoutButton = ({ product }: { product: Fin }) => {
  const [selectedFootPocketColor, setSelectedFootPocketColor] = useState("");
  const [selectedBladeAngle, setSelectedBladeAngle] = useState("");
  const [selectedSoftness, setSelectedSoftness] = useState("");
  const [selectedBladeSize, setSelectedBladeSize] = useState("");
  const [selectedBladeCut, setSelectedBladeCut] = useState("");

  const colorMap: {
    [key: string]: string;
    Black: string;
    White: string;
  } = {
    Black: "#353535",
    White: "#A9A9A9",
  };

  const handleColorChange = (color: string) => {
    setSelectedFootPocketColor(color);
    state.footPocketColor = colorMap[color];
  };

  const handleBladeAngleChange = (angle: string) => {
    setSelectedBladeAngle(angle);
  };

  const handleSoftnessChange = (softness: string) => {
    setSelectedSoftness(softness);
  };

  const handleBladeSizeChange = (size: string) => {
    setSelectedBladeSize(size);
  };

  const handleBladeCutChange = (cut: string) => {
    setSelectedBladeCut(cut);
  };

  const isAnySelectEmpty =
    !selectedFootPocketColor ||
    !selectedBladeAngle ||
    !selectedSoftness ||
    !selectedBladeSize ||
    !selectedBladeCut;

  return (
    <div>
      <div className="flex gap-10 flex-wrap">
        <CustomSelect
          title="Foot Pocket Color"
          selectItems={["Black", "White"]}
          handleValueChange={handleColorChange}
        />

        <CustomSelect
          title="Blade Angle"
          selectItems={[
            "Blade Angle ~ 15°",
            "Blade Angle ~ 26°",
            "Blade Angle ~ 29°",
            "Blade Angle ~ 30°",
          ]}
          handleValueChange={handleBladeAngleChange}
        />
        <CustomSelect
          title="Hardness"
          selectItems={["Soft", "Medium", "Hard"]}
          handleValueChange={handleSoftnessChange}
        />
        <CustomSelect
          title="Blade Size"
          selectItems={[
            "35-36 cm",
            "37-38 cm",
            "39-40 cm",
            "41-42 cm",
            "43-44 cm",
            "45-46 cm",
          ]}
          handleValueChange={handleBladeSizeChange}
        />
        <CustomSelect
          title="Blade Cut"
          selectItems={[
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
          ]}
          handleValueChange={handleBladeCutChange}
        />

        <Carousel>
          <CarouselContent>
            {cuts.map((cut) => (
              <CarouselItem key={cut.id} className="basis-1/3">
                <Image
                  src={cut.imageUrl}
                  height={100}
                  width={100}
                  alt="blade cut image"
                  className="rounded-sm dark:invert-0 invert"
                  loading="lazy"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default CheckoutButton;
